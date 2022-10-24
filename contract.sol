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

    function registration(bytes32 password) external IsNotReg(msg.sender) {
        create_user(msg.sender, password);
    }

    function login(bytes32 password)
        external
        view
        IsReg(msg.sender)
        returns (bool)
    {
        require(
            users[msg.sender].password == password,
            "Password is incorrect"
        );

        return true;
    }

    function create_user(address login, bytes32 password) internal {
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

    function change_role(address login, Roles role)
        internal
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
        IsReg(login)
    {
        users[login].role = role;
        emit ChangeRole(login, role);
    }

    function remove_user(address login)
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
        address[] salesmen;
    }

    Shop[] shops;

    event NewShop(address login);
    event RemoveShop(address indexed login);

    constructor() {}

    function add_shop(
        address login,
        bytes32 password,
        string memory city
    )
        external
        IsReg(msg.sender)
        IsRole(msg.sender, Roles.admin)
        IsNotReg(login)
    {
        create_shop(login, password, city);
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
        address[] memory salsmen = shop.salesmen;

        for (uint256 i = 0; i < salsmen.length; i++) {
            change_role(salsmen[i], Roles.user);
        }

        delete shops[id];
        emit RemoveShop(shop.login);

        remove_user(shop.login);
    }

    function create_shop(
        address login,
        bytes32 password,
        string memory city
    ) internal {
        shops.push(
            Shop({
                id: shops.length,
                login: login,
                city: city,
                salesmen: zero_address_array
            })
        );
        create_user(login, password);
        emit NewShop(login);
    }
}
