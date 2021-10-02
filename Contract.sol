pragma solidity 0.7.6;
pragma experimental ABIEncoderV2;

contract Shoping {
    struct User {
        address user_address;
        string FIO;
        string login;
        bytes32 password;
        uint256 role; //1 - shoper  2 - salesman  3 - admin -  4 - provider  5 - bank  6 - shop
        bool admin;
        bool salesman;
    }
    struct Shop {
        uint256 shopId;
        address payable addressShop;
        string city;
        address[] salesmen;
        bool shopStatus;
        bool bankMoney;
    }
    struct Comment {
        uint idComment;
        string login;
        string comment;
        address[] likes;
        address[] dislikes;
    }
    struct ComplaintsAndSuggestions {
        uint256 complaintsId;
        uint8 shopId;
        string login;
        string comment;
        int256 mark;
        address[] like;
        address[] dislike;
    }
    struct RequestToSalesman {
        uint256 id;
        address addressShoper;
        uint256 shopId;
        bool finished;
    }
    struct RequestToShoper {
        uint256 id;
        address addressSalesman;
        bool finished;
    }
    /*Users*/
    event RemoveUser(address user);
    event NewUser(address user);
    /* Roles */
    event ChangeRole(address indexed user, uint256 role);
    event NewRole(address indexed user, uint256 role);
    /* Complains */
    event MarkComplaint(address shopAddress, uint256 complaintsId, uint256 mark, address changer);
    event NewComplaint(address bookAddress, uint256 complaintsId);
    event NewComment(address bookAddress, uint256 complaintsId, uint commentId);
    event MarkComment(address bookAddress, uint CASId, uint commentId, uint mark, address changer);
    /* Requests */
    event RequestFinished(string requestType, uint256 id); // Type may be "beAdmin", "beSalesman" and "beBuyer"
    event NewRequest(string requestType, uint256 id);
    event AddSalesman(address salesmanAddress, uint256 shopId);
    event RemoveSalesman(address salesman, uint256 shopId);
    /* Shops */
    event RemoveShop(address shopAddress);
    event AddShopEvent(address shopNewAddress, uint256 shopId);

    constructor() {
        user[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4] = User(
            0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, "Petrov Petr Petrovich", "petrov", keccak256(abi.encodePacked("petr")), 1, false, false);
        user[0x98ABCBdDb13B61b30205c04B325A2202050d2bBC] = User(
            0x98ABCBdDb13B61b30205c04B325A2202050d2bBC, "Admin", "admin", keccak256(abi.encodePacked("admin")), 3, true, false);
        user[0xdD870fA1b7C4700F2BD7f44238821C26f7392148] = User(
            0xdD870fA1b7C4700F2BD7f44238821C26f7392148,"Salesman", "salesman", keccak256(abi.encodePacked("salesman")),2,false,true
        );
        user[msg.sender] = User(msg.sender,"User","user",keccak256(abi.encodePacked("123")),2,false,true);
        user[0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db] = User(
            0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,"provider","provider",keccak256(abi.encodePacked("provider")),4,false,false);
        user[0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678] = User(
            0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678,"bank","bank",keccak256(abi.encodePacked("bank")),5,false,false);
        userArray.push(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
        userArray.push(0x7E548B655Cd85547F6709601bA19515903F233Bd);
        userArray.push(0xdD870fA1b7C4700F2BD7f44238821C26f7392148);
        userArray.push(0x98ABCBdDb13B61b30205c04B325A2202050d2bBC);
        userArray.push(0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678);
        userArray.push(msg.sender);
        address[] memory startSalesmen = new address[](1);
        shop.push(Shop(shop.length,0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c,"kaluga",startSalesmen,true,false));
        userArray.push(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c);
        user[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c]=User(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c, "shop1", "shop1", keccak256(abi.encodePacked("shop1")), 6, false, false);
        bookOfComplaintsAndSuggestions[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c].push(
            ComplaintsAndSuggestions(0,1,"Admin","Hello, i'm an admin",1,zeroAddress,zeroAddress));
        bookOfComplaintsAndSuggestions[msg.sender].push(
            ComplaintsAndSuggestions(0,2,"Admin","Hello, i'm an admin",1,zeroAddress,zeroAddress));
        comments[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c][0].push(Comment(comments[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c][0].length, "admin", "Hay", zeroAddress, zeroAddress));
     }
    mapping(address => User) public user;
    Shop[] public shop;
    mapping(address => ComplaintsAndSuggestions[])
        public bookOfComplaintsAndSuggestions;
    RequestToShoper[] public requestToShoper;
    RequestToSalesman[] public requestToSalesman;
    mapping(uint256 => bool) public BankRequestShop;
    mapping(address => uint8) AddressToShop;
    mapping (address => mapping (uint => Comment[])) public comments;

    address[] public zeroAddress;
    address[] public userArray;
    address payable bank = 0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678;
    address payable provider = 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db;
    modifier IsNotReg() {
        require(
            user[msg.sender].user_address == address(0),
            "You are registered"
        );
        _;
    }
    modifier IsNotShop(address addressUser) {
        for (uint256 i = 0; i < shop.length; i++) {
            require(shop[i].addressShop != addressUser, "You are a store");
        }
        _;
    }
    modifier IsStore(address addressShop) {
        bool flag = false;
        for (uint256 i = 0; i < shop.length; i++) {
            if (shop[i].addressShop == msg.sender) {
                flag=true;
            }
        }
        require(flag==true, "You are not a shop");
        _;
    }
    modifier IsShoperOrSalesman() {
        require(
            user[msg.sender].role == 1 || user[msg.sender].role == 2,
            "You are not a shoper"
        );
        _;
    }
    modifier IsNotSalesman(address notSalesman) {
        require(user[notSalesman].role != 2, "You are a salesman");
        _;
    }
    modifier IsAdmin() {
        require(user[msg.sender].admin == true, "You are not an admin");
        require(user[msg.sender].role == 3, "Please, check your role");
        _;
    }
    modifier IsUser() {
        require(
            user[msg.sender].user_address != address(0),
            "You are not an user"
        );
        _;
    }

modifier CheckLogin(string memory login) {
        for (uint256 i = 0; i < userArray.length; i++) {
            require(
                keccak256(abi.encodePacked(user[userArray[i]].login)) !=
                    keccak256(abi.encodePacked(login)),
                "Please, use different login"
            );
        }
        require(
            keccak256(abi.encodePacked(login)) !=
                keccak256(abi.encodePacked("")),
            "Login incorrect"
        );
        _;
    }
    modifier CheckTheCorrectPassword(bytes32 password) {
        require(
            password !=
                0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470,
            "Password incorrect"
        );
        _;
    }

    modifier CheckLike(address shopAddress, uint256 complaintsId) {
        for (
            uint256 i = 0;
            i <
            bookOfComplaintsAndSuggestions[shopAddress][complaintsId]
                .like
                .length;
            i++
        ) {
            require(
                bookOfComplaintsAndSuggestions[shopAddress][complaintsId].like[
                    i
                ] != msg.sender,
                "You are liked"
            );
        }
        _;
    }
    modifier CheckLikeComment(address shopAddress, uint256 complaintsId, uint256 commentId) {
        for (
            uint256 i = 0;
            i <
            comments[shopAddress][complaintsId][commentId]
                .likes
                .length;
            i++
        ) {
            require(
                comments[shopAddress][complaintsId][commentId].likes[
                    i
                ] != msg.sender,
                "You are liked"
            );
        }
        _;
    }
    modifier IsSalesmanOnThisShop(uint shopId) {
        if (user[msg.sender].role==2) {
            bool flag=false;
        for (uint i=0;i<shop[shopId].salesmen.length;i++) {
            if (msg.sender==shop[shopId].salesmen[i]) {
                flag=true;
            }}
            require(flag==true, "You are not a salesmen on this shop");
        }
        _;}

    modifier CheckDislike(address shopAddress, uint256 complaintsId) {
        for (
            uint256 i = 0;
            i <
            bookOfComplaintsAndSuggestions[shopAddress][complaintsId]
                .dislike
                .length;
            i++
        ) {
            require(
                bookOfComplaintsAndSuggestions[shopAddress][complaintsId]
                    .dislike[i] != msg.sender,
                "You are disliked"
            );
        }
        _;
    }
    modifier CheckDislikeComment(address shopAddress, uint256 complaintsId, uint256 commentId) {
        for (uint256 i = 0;i <comments[shopAddress][complaintsId][commentId].dislikes.length;i++) {
            require(comments[shopAddress][complaintsId][commentId].dislikes[i] != msg.sender,"You are disliked");
        }
        _;
    }
    modifier CheckRequestToSalesman() {
        for (uint256 i = 0; i < requestToSalesman.length; i++) {
            if (requestToSalesman[i].addressShoper == msg.sender) {
                require(requestToSalesman[i].finished == true,"You are in request to salesman");
            }
        }
        _;
    }
    modifier CheckRequestToShoper() {
        for (uint256 i = 0; i < requestToShoper.length; i++) {
            if (requestToShoper[i].addressSalesman == msg.sender) {
                require(requestToShoper[i].finished == true,"You are in request to shoper");
            }
        }
        _;
    }

    modifier IsNotSenderComplains(address complainsAddress,uint256 complainsId) {
        require(keccak256(abi.encodePacked(bookOfComplaintsAndSuggestions[complainsAddress][complainsId].login)) != keccak256(abi.encodePacked(user[msg.sender].login)),"It's your complains");
        _;
    }


    function regUser(string memory FIO,bytes32 password,string memory login )public IsNotReg IsNotShop(msg.sender) CheckLogin(login) CheckTheCorrectPassword(password)
    {
        require(msg.sender != bank, "You are a bank");
        require(msg.sender != provider, "You are a provider");
        user[msg.sender] = User(
            msg.sender,
            FIO,
            login,
            password,
            1,
            false,
            false
        );
        userArray.push(msg.sender);
        emit NewUser(msg.sender);
    }

    function LoginUser(string memory login, bytes32 password)public view IsUser returns (bool)
    {
        require(keccak256(abi.encodePacked(user[msg.sender].login)) == keccak256(abi.encodePacked(login)), "Login incorrect");
        require(user[msg.sender].password == password, "Password incorrect");
        return (true);
    }

    function LikeComplaints(address shopAddress, uint256 complaintsId)public IsUser CheckDislike(shopAddress, complaintsId) CheckLike(shopAddress, complaintsId) IsNotSalesman(msg.sender) IsNotSenderComplains(shopAddress, complaintsId)
    {
        require(user[msg.sender].role!=6, "You are a Shop");
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].like.push(msg.sender);
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].mark++;
        emit MarkComplaint(shopAddress, complaintsId, 1, msg.sender);
    }

    function AddComplaints(address shopAddress,string memory comment,  int256 mark) public IsShoperOrSalesman {
        ComplaintsAndSuggestions[] storage book = bookOfComplaintsAndSuggestions[shopAddress];
        book.push(
            ComplaintsAndSuggestions({ complaintsId: book.length,shopId: AddressToShop[shopAddress], login: user[msg.sender].login, comment: comment, mark: mark, like: zeroAddress, dislike: zeroAddress} )
        );
        emit NewComplaint(shopAddress, book.length - 1);
    }

    function AddComment(address addressShop, uint complaintsId, string memory comment) public IsSalesmanOnThisShop(AddressToShop[addressShop]) {
        if (user[msg.sender].role == 1 || user[msg.sender].role == 2) {
            Comment[] storage tempComments = comments[addressShop][complaintsId]; // Понять насколько это оптимально
            tempComments.push(Comment(tempComments.length, user[msg.sender].login, comment, zeroAddress, zeroAddress));
            emit NewComment(addressShop, complaintsId, tempComments.length - 1);
        }
    }

    function LikeComment(address shopAddress, uint256 complaintsId, uint256 commentId) public IsUser CheckDislikeComment(shopAddress, complaintsId, commentId) CheckLikeComment(shopAddress, complaintsId, commentId) IsNotSalesman(msg.sender)
    {
        require(user[msg.sender].role!=6, "You are a Shop");
        comments[shopAddress][complaintsId][commentId].likes.push(msg.sender);
        emit MarkComment(shopAddress, complaintsId, commentId, 1, msg.sender);
    }

    function DisikeComment(address shopAddress, uint256 complaintsId, uint256 commentId)public IsUser CheckDislikeComment(shopAddress, complaintsId, commentId)CheckLikeComment(shopAddress, complaintsId, commentId)IsNotSalesman(msg.sender)
    {
        require(user[msg.sender].role!=6, "You are a Shop");
        comments[shopAddress][complaintsId][commentId].dislikes.push(
            msg.sender
        );
        emit MarkComment(shopAddress, complaintsId, commentId, 0, msg.sender);
    }

    function DisikeComplaints(address shopAddress, uint256 complaintsId)public IsUser IsNotShop(msg.sender)  CheckDislike(shopAddress, complaintsId)CheckLike(shopAddress, complaintsId) IsNotSalesman(msg.sender) IsNotSenderComplains(shopAddress, complaintsId)
    {
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].dislike.push(msg.sender);
        emit MarkComplaint(shopAddress, complaintsId, 0, msg.sender);
    }

    function BeShoperForSalesman() public IsUser{
        require(user[msg.sender].role == 2, "You are not a salesman, check your role");
        require(user[msg.sender].salesman == true, "You are not a salesman");
        user[msg.sender].role = 1;
        emit ChangeRole(msg.sender, 1);
    }

    function RequestToSalesmanFunc(uint256 shopId)public IsUser CheckRequestToSalesman IsNotShop(msg.sender)
    {
        require(user[msg.sender].salesman != true, "You are a salesman");
        require(user[msg.sender].role == 1 || user[msg.sender].role == 3);
        requestToSalesman.push(RequestToSalesman(requestToSalesman.length,msg.sender,shopId,false));
        emit NewRequest("beSalesman", requestToSalesman.length - 1);
    }

    function RequestToShoperFunc() public IsUser CheckRequestToShoper IsNotShop(msg.sender) {
        require(user[msg.sender].salesman == true, "You are not a salesman");
        requestToShoper.push(RequestToShoper(requestToShoper.length, msg.sender, false));
        emit NewRequest("beBuyer", requestToShoper.length - 1);
    }

    function AccRequestShoper(uint256 requestId) public IsAdmin {
        require(requestToShoper[requestId].addressSalesman != address(0),"Check requestId");
        require(requestToShoper[requestId].finished == false,"You are not in request");
        address salesman = requestToShoper[requestId].addressSalesman;
        user[salesman].salesman = false;
        user[salesman].role = 1;
        requestToShoper[requestId].finished = true;
        uint64 shopId = 0;
        bool isFound = false;
        for (; shopId < shop.length && !isFound; shopId++) {
            address[] memory salesmen = shop[shopId].salesmen;

            for (uint64 j = 0; j < salesmen.length; j++) {
                if (salesmen[j] == salesman) {
                    delete shop[shopId].salesmen[j];
                    isFound = true;
                    break;
                }
            }
        }
        emit RemoveSalesman(salesman, shopId);
        emit RequestFinished("beBuyer", requestId);
        emit NewRole(salesman, 1);
    }

    function AccRequestSalesman(uint256 requestId) public IsAdmin {
        require(requestToSalesman[requestId].addressShoper != address(0),"Check requestId");
        require(requestToSalesman[requestId].finished == false,"You are not in request");
        RequestToSalesman memory tempData = requestToSalesman[requestId];
        user[tempData.addressShoper].salesman = true;
        requestToSalesman[requestId].finished = true;
        shop[tempData.shopId].salesmen.push(requestToSalesman[requestId].addressShoper);
        emit RequestFinished("beSalesman", requestId);
        emit AddSalesman(tempData.addressShoper, tempData.shopId);
        emit NewRole(tempData.addressShoper, 2);
    }
    function CancelRequestShoper(uint256 requestId) public IsAdmin {
        requestToShoper[requestId].finished = true;
        emit RequestFinished("beBuyer", requestId);
    }

    function CancelRequestSalesman(uint256 requestId) public IsAdmin {
        requestToSalesman[requestId].finished = true;
        emit RequestFinished("beSalesman", requestId);
    }

    function BeAdmin() public IsUser {
        require(user[msg.sender].admin == true, "You are not an admin");
        require(user[msg.sender].role != 3, "You are admin");
        user[msg.sender].role = 3;
        emit ChangeRole(msg.sender, 3);
    }

    function BeSalesman() public IsUser {
        require(user[msg.sender].salesman == true, "You are not an salesman");
        require(user[msg.sender].role != 2, "You are salesman");
        user[msg.sender].role = 2;
        emit ChangeRole(msg.sender, 2);
    }

    function BeShoper() public IsUser {
        require(user[msg.sender].role == 2 || user[msg.sender].role == 3, "You are shoper");
        user[msg.sender].role = 1;
        emit ChangeRole(msg.sender, 1);
    }

    function ToBankRequest(uint256 shopId) public IsStore(msg.sender) {
        require(shop[shopId].shopStatus == true, "This shop is already delete");
        require(msg.sender == shop[shopId].addressShop, "The shopId incorrect");
        require(shop[shopId].bankMoney == false,"You are already have money from Bank");
        require(BankRequestShop[shopId] == false, "You are in request");
        BankRequestShop[shopId] = true;
    }

    function AccRequestBank(uint256 shopId) public payable {
        require(msg.sender == bank, "You are not a Bank");
        require(shop[shopId].bankMoney == false,"The shop is already have money");
        require(BankRequestShop[shopId] == true,"The shop is not send a request to have money");
        require(msg.sender.balance >= 1000, "You are have not a money");
        require(msg.value > 0, "Check value");
        shop[shopId].addressShop.transfer(msg.value);
        shop[shopId].bankMoney = true;
    }

    function upgradeToAdmin(address userAddress) public IsAdmin {
        require(user[userAddress].admin == false,"This user is already an admin");
        user[userAddress].role = 3;
        user[userAddress].admin = true;
        emit NewRole(userAddress, 3);
    }

    function AddShop(address payable addressShop, string memory city, string memory login, string memory password)public IsAdmin IsNotShop(addressShop)IsNotSalesman(addressShop)
    {
        require(user[addressShop].user_address == address(0), "This address is buzy");
        user[addressShop] = User(addressShop, login, login, keccak256(abi.encodePacked(password)), 6, false, false);
        shop.push(Shop(shop.length, addressShop, city, zeroAddress, true, false));
        AddressToShop[addressShop]=uint8(shop.length);
        emit AddShopEvent(addressShop, shop.length - 1);
        emit RemoveUser(addressShop);
    }

    function ShowSalesmanOfStore(uint256 shopId) public view returns (address[] memory)
    {
        return (shop[shopId].salesmen);
    }

    function DeleteShop(uint256 shopId) public IsAdmin {
        require(shop[shopId].addressShop != address(0), "This shop is already delete");

        DeleteSalesman(shop[shopId]);

        delete shop[shopId];

        emit RemoveShop(shop[shopId].addressShop);
    }

    function DeleteSalesman(Shop memory deletingShop) private {
        for (uint256 i = 0; i < deletingShop.salesmen.length; i++) {
            user[deletingShop.salesmen[i]].salesman = false;
            user[deletingShop.salesmen[i]].role = 1;
            emit NewRole(deletingShop.salesmen[i], 1);
        }
    }

    function getShops() public view returns (Shop[] memory) {
        return shop;
    }

    function getShopComplainAndSuggestion(address addressShop) public view returns (ComplaintsAndSuggestions[] memory)
    {
        return bookOfComplaintsAndSuggestions[addressShop];
    }


    function getBeSalesmanRequests() public view returns (RequestToSalesman[] memory)
    {
        return requestToSalesman;
    }

    function getBeBuyerRequests() public view returns (RequestToShoper[] memory)
    {
        return requestToShoper;
    }

    function getUsersAddresses() public view returns (address[] memory) {
        return userArray;
    }

    function getCASComments(address shopAddress, uint CASId) external view returns(Comment[] memory) {
        return comments[shopAddress][CASId];
    }
 }
