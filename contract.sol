pragma solidity ^0.8.13;

contract Utils {
    address[] zero_address_array;

    function hashString(string memory str) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(str));
    }
}

contract Users is Utils {
    enum Roles {
        user,
        salesman,
        shop,
        admin
    }

    struct User {
        uint256 id;
        address login;
        bytes32 password;
        Roles role;
        address shop_address;
    }

    address[] user_addresses;
    mapping(address => User) users;

    event NewUser(address indexed login);
    event ChangeRole(address indexed login, Roles role);
    event RemoveUser(address indexed login);

    modifier IsReg(address a) {
        require(users[a].login != address(0), "You are not registred");
        _;
    }

    modifier IsNotReg(address a) {
        require(users[a].login == address(0), "You are registred");
        _;
    }

    modifier IsRole(address a, Roles role) {
        require(users[a].role == role, "Your role is not allowed");
        _;
    }

    constructor() {}

    function get_user_addresses() external view returns (address[] memory) {
        return user_addresses;
    }

    function registration(bytes32 password) external IsNotReg(msg.sender) {
        _create_user(msg.sender, password);
    }

    function login(bytes32 password)
        external
        view
        IsReg(msg.sender)
        returns (User memory)
    {
        require(
            users[msg.sender].password == password,
            "Password is incorrect"
        );

        return users[msg.sender];
    }

    function _create_user(address login, bytes32 password) internal {
        users[msg.sender] = User({
            id: user_addresses.length,
            login: msg.sender,
            password: password,
            role: Roles.user,
            shop_address: address(0)
        });
        user_addresses.push(msg.sender);
        emit NewUser(login);
    }

    function _change_role(address login, Roles role)
        internal
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
        IsReg(login)
    {
        users[login].role = role;
        emit ChangeRole(login, role);
    }

    function _remove_user(address login)
        internal
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
        IsReg(login)
    {
        delete user_addresses[users[login].id];
        delete users[login];
        emit RemoveUser(login);
    }
}

contract Shops is Users {
    struct Shop {
        uint256 id;
        address login;
        string city;
    }

    mapping(uint256 => address[]) shop_salesmen_map;
    mapping(address => uint256) salesman_id_map;
    Shop[] shops;

    event NewShop(address login);
    event RemoveShop(address indexed login);
    event NewSalesman(uint256 indexed shopId, address salesman);
    event RemoveSalesman(uint256 indexed shopId, address salesman);

    constructor() {}

    function get_shops() external view returns (Shop[] memory) {
        return shops;
    }

    function create_shop(
        address login,
        bytes32 password,
        string memory city
    )
        external
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
        IsNotReg(login)
    {
        _create_shop(login, password, city);
        return;
    }

    function remove_shop(uint256 id)
        external
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
        IsReg(shops[id].login)
        IsRole(shops[id].login, Roles.shop)
    {
        Shop memory shop = shops[id];
        address[] memory salsmen = shop_salesmen_map[id];

        for (uint256 i = 0; i < salsmen.length; i++) {
            _change_role(salsmen[i], Roles.user);
            _remove_salesman(id, salsmen[i]);
        }

        delete shops[id];
        emit RemoveShop(shop.login);

        _remove_user(shop.login);
    }

    function _add_salsman(uint256 shopId, address salesman)
        internal
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
        IsReg(salesman)
        IsRole(salesman, Roles.salesman)
        IsReg(shops[shopId].login)
        IsRole(shops[shopId].login, Roles.shop)
    {
        salesman_id_map[salesman] = shop_salesmen_map[shopId].length;
        shop_salesmen_map[shopId].push(salesman);
        emit NewSalesman(shopId, salesman);
    }

    function _remove_salesman(uint256 shopId, address salesman)
        internal
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
        IsReg(salesman)
        IsRole(salesman, Roles.salesman)
        IsReg(shops[shopId].login)
        IsRole(shops[shopId].login, Roles.shop)
    {
        uint256 salesmanId = salesman_id_map[salesman];
        delete shop_salesmen_map[shopId][salesmanId];
        delete salesman_id_map[salesman];
        emit RemoveSalesman(shopId, salesman);
    }

    function _create_shop(
        address login,
        bytes32 password,
        string memory city
    ) internal {
        shops.push(Shop({id: shops.length, login: login, city: city}));
        _create_user(login, password);
        emit NewShop(login);
    }
}

contract Requests is Users, Shops {
    enum Status {
        pending,
        success,
        cancel
    }

    struct Request {
        uint256 id;
        address sender;
        Roles role;
        Status status;
        uint256 shopId;
    }

    Request[] requests;

    event NewRequest(uint256 id);
    event ChangeStatus(uint256 id, Status status);

    constructor() {}

    function get_requests() external view returns (Request[] memory) {
        return requests;
    }

    function create_request(Roles role, uint256 shopId)
        external
        IsReg(msg.sender)
    {
        requests.push(
            Request({
                id: requests.length,
                sender: msg.sender,
                role: role,
                status: Status.pending,
                shopId: shopId
            })
        );

        emit NewRequest(requests.length - 1);
    }

    function approve_request(uint256 id)
        external
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
    {
        Request memory request = requests[id];
        _change_role(request.sender, request.role);
        if (request.role == Roles.user) {
            _remove_salesman(request.shopId, request.sender);
        } else if (request.role == Roles.salesman) {
            _add_salsman(request.shopId, request.sender);
        }
        request.status = Status.success;
        emit ChangeStatus(id, Status.success);
    }

    function cancel_request(uint256 id)
        external
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
    {
        Request memory request = requests[id];
        request.status = Status.cancel;
        emit ChangeStatus(id, Status.cancel);
    }
}

contract Reviews is Shops {
    enum Reaction {
        like,
        dislike
    }

    struct Review {
        uint256 id;
        address author;
        string content;
        uint256 mark;
        uint256 likes;
        uint256 dislikes;
        address[] reviewers;
    }

    mapping(uint256 => Review[]) reviews;

    event NewReview(uint256 indexed shopId, uint256 reviewId);
    event ReactionReview(
        uint256 indexed shopId,
        uint256 indexed reviewId,
        Reaction reaction
    );

    modifier ReviewIsNotReaction(
        address a,
        uint256 shopId,
        uint256 reviewId
    ) {
        bool flag = true;
        Review memory review = reviews[shopId][reviewId];
        for (uint256 i = 0; i < review.reviewers.length; i++) {
            if (review.reviewers[i] == a) {
                flag = false;
                break;
            }
        }
        require(flag, "You have already reacted");
        _;
    }

    function get_reviews(uint256 shopId)
        external
        view
        returns (Review[] memory)
    {
        return reviews[shopId];
    }

    function create_review(
        uint256 shopId,
        string memory content,
        uint256 mark
    ) external IsReg(msg.sender) {
        reviews[shopId].push(
            Review({
                id: reviews[shopId].length,
                author: msg.sender,
                content: content,
                mark: mark,
                likes: 0,
                dislikes: 0,
                reviewers: zero_address_array
            })
        );
        emit NewReview(shopId, reviews[shopId].length - 1);
    }

    function reaction_review(
        uint256 shopId,
        uint256 reviewId,
        Reaction reaction
    )
        external
        IsReg(msg.sender)
        ReviewIsNotReaction(msg.sender, shopId, reviewId)
    {
        if (reaction == Reaction.like) {
            reviews[shopId][reviewId].likes += 1;
        } else if (reaction == Reaction.dislike) {
            reviews[shopId][reviewId].dislikes += 1;
        }
        reviews[shopId][reviewId].reviewers.push(msg.sender);
        emit ReactionReview(shopId, reviewId, reaction);
    }
}

contract Comments is Reviews {
    struct Comment {
        uint256 id;
        address author;
        string content;
        uint256 likes;
        uint256 dislikes;
        address[] reviewers;
    }

    mapping(uint256 => mapping(uint256 => Comment[])) comments;

    event NewComment(
        uint256 indexed shopId,
        uint256 indexed reviewId,
        uint256 commentId
    );
    event ReactionComment(
        uint256 indexed shopId,
        uint256 indexed reviewId,
        uint256 indexed commentId,
        Reaction reaction
    );

    modifier CommentIsNotReaction(
        address a,
        uint256 shopId,
        uint256 reviewId,
        uint256 commentId
    ) {
        Comment memory comment = comments[shopId][reviewId][commentId];
        bool flag = true;
        for (uint256 i = 0; i < comment.reviewers.length; i++) {
            if (comment.reviewers[i] == a) {
                flag = false;
                break;
            }
        }
        require(flag, "You have already reacted");
        _;
    }

    function get_comments(uint256 shopId, uint256 reviewId)
        external
        view
        returns (Comment[] memory)
    {
        return comments[shopId][reviewId];
    }

    function create_comment(
        uint256 shopId,
        uint256 reviewId,
        string memory content
    ) external IsReg(msg.sender) {
        comments[shopId][reviewId].push(
            Comment({
                id: comments[shopId][reviewId].length,
                author: msg.sender,
                content: content,
                likes: 0,
                dislikes: 0,
                reviewers: zero_address_array
            })
        );
        emit NewComment(
            shopId,
            reviewId,
            comments[shopId][reviewId].length - 1
        );
    }

    function reaction_comment(
        uint256 shopId,
        uint256 reviewId,
        uint256 commentId,
        Reaction reaction
    ) external {
        if (reaction == Reaction.like) {
            comments[shopId][reviewId][commentId].likes += 1;
        } else if (reaction == Reaction.dislike) {
            comments[shopId][reviewId][commentId].dislikes += 1;
        }
        comments[shopId][reviewId][commentId].reviewers.push(msg.sender);
        emit ReactionComment(shopId, reviewId, commentId, reaction);
    }
}

contract TotalContract is Utils, Users, Shops, Requests, Reviews, Comments {}
