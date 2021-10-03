pragma solidity 0.7.6;
pragma experimental ABIEncoderV2;

contract Shoping {
    struct User {
        address userAddress;
        string FIO;
        string login;
        bytes32 password;
        uint role; //1 - shoper  2 - salesman  3 - admin -  4 - provider  5 - bank  6 - shop
        int shopId; //Если пользователь не продавец то равно -1, иначе id магазина
        bool isSalesman;
        bool isAdmin;
    }
    struct Shop {
        uint shopId;
        address payable shopAddress;
        string city;
        address[] salesmen;
        bool haveBankMoney;
    }
    struct Comment {
        uint commentId;
        string login;
        string comment;
        address[] likes;
        address[] dislikes;
    }
    struct ComplaintsAndSuggestions {
        uint complaintsId;
        string login;
        string comment;
        uint mark;
        address[] likes;
        address[] dislikes;
    }
    struct Request {
        uint id;
        address senderAddress;
        uint currentRole;
        uint newRole;
        int shopId;//Если покупатель хочет стать продавцом, то хранит id магазина, иначе равен -1
        bool isFinish;
    }
    /*Users*/
    event NewUser(address user);
    /* Roles */
    event ChangeRole(address indexed user, uint role);
    event NewRole(address indexed user, uint role);
    /* Complains */
    event MarkComplaint(address shopAddress, uint complaintsId, uint mark, address changer);
    event NewComplaint(address bookAddress, uint complaintsId);
    event NewComment(address bookAddress, uint complaintsId, uint commentId);
    event MarkComment(address bookAddress, uint CASId, uint commentId, uint mark, address changer);
    /* Requests */
    event RequestFinished(string requestType, uint id); // Type may be "beAdmin", "beSalesman" and "beBuyer"
    event NewRequest(string requestType, uint id);
    event AddSalesman(address salesmanAddress, uint shopId);
    event RemoveSalesman(address salesman, uint shopId);
    /* Shops */
    event RemoveShop(address shopAddress);
    event AddShopEvent(address shopNewAddress, uint shopId);
    event RemoveFreeAddress(address freeAddress);
    event AddFreeAddress(address freeAddress, uint index);

    constructor() {
        user[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4] = User(
            {
                userAddress: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,
                FIO: "Petrov Petr Petrovich",
                login:  "petrov",
                password: keccak256(abi.encodePacked("petr")), role: 1,
                shopId: -1,
                isSalesman: false,
                isAdmin: false
            }
        );
        userArray.push(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);

        user[0x98ABCBdDb13B61b30205c04B325A2202050d2bBC] = User(
            {
                userAddress: 0x98ABCBdDb13B61b30205c04B325A2202050d2bBC,
                FIO: "Admin",
                login: "admin",
                password: keccak256(abi.encodePacked("admin")),
                role: 3,
                shopId: -1,
                isAdmin: true,
                isSalesman: false
            }
        );
        userArray.push(0x98ABCBdDb13B61b30205c04B325A2202050d2bBC);

        user[0xdD870fA1b7C4700F2BD7f44238821C26f7392148] = User(
            {
                userAddress: 0xdD870fA1b7C4700F2BD7f44238821C26f7392148,
                FIO: "Salesman",
                login: "salesman",
                password: keccak256(abi.encodePacked("salesman")),
                role: 2,
                shopId: 0,
                isAdmin: false,
                isSalesman: true
            }
        );
        userArray.push(0xdD870fA1b7C4700F2BD7f44238821C26f7392148);

        user[msg.sender] = User(
            {
                userAddress: msg.sender,
                FIO: "User",
                login: "user",
                password: keccak256(abi.encodePacked("123")),
                role: 2,
                shopId: 0,
                isAdmin: false,
                isSalesman: true
            }
        );
        userArray.push(msg.sender);

        user[0x468afC816Bf4Cf8EC93923b9722484617f1c6Ebc] = User(
            {
                userAddress: 0x468afC816Bf4Cf8EC93923b9722484617f1c6Ebc,
                FIO: "Provider",
                login: "provider",
                password: keccak256(abi.encodePacked("provider")),
                role: 4,
                shopId: -1,
                isAdmin: false,
                isSalesman: false
            }
        );
        userArray.push(0x468afC816Bf4Cf8EC93923b9722484617f1c6Ebc);

        user[0x0359F0EE893BCF6882E455bA911e59Ba68f966D2] = User(
            {
                userAddress: 0x0359F0EE893BCF6882E455bA911e59Ba68f966D2,
                FIO: "Bank",
                login: "bank",
                password: keccak256(abi.encodePacked("bank")),
                role: 5,
                shopId: -1,
                isAdmin: false,
                isSalesman: false
            }
        );
        userArray.push(0x0359F0EE893BCF6882E455bA911e59Ba68f966D2);

        freeAddresses.push(0x5E0d17253fe14d19FAe6de54C6BFa49B334Bf268);

        address[] memory startSalesmen = new address[](2);
        startSalesmen[0] = 0xdD870fA1b7C4700F2BD7f44238821C26f7392148;
        startSalesmen[1] = msg.sender;

        shop.push(Shop(
                {
                    shopId: uint(shop.length),
                    shopAddress: 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c,
                    city: "kaluga",
                    salesmen: startSalesmen,
                    haveBankMoney: false
                }
            )
        );
        user[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c] = User(
            {
                userAddress:0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c,
                FIO: "shop1",
                login: "shop1",
                password: keccak256(abi.encodePacked("shop1")),
                role: 6,
                shopId: -1,
                isAdmin: false,
                isSalesman: false
            }
        );//Попробовать избавиться от дублирования
        userArray.push(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c);


        bookOfComplaintsAndSuggestions[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c].push(
            ComplaintsAndSuggestions(
                {
                    complaintsId: uint(bookOfComplaintsAndSuggestions[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c].length),
                    login: "Admin",
                    comment: "Hello, i'm an admin",
                    mark: 1,
                    likes: zeroAddress,
                    dislikes: zeroAddress
                }
            )
        );
        bookOfComplaintsAndSuggestions[msg.sender].push(
            ComplaintsAndSuggestions(
                {
                    complaintsId: uint(bookOfComplaintsAndSuggestions[msg.sender].length),
                    login: "Admin",
                    comment: "Hello, i'm an admin",
                    mark: 1,
                    likes: zeroAddress,
                    dislikes: zeroAddress
                }
            )
        );

        comments[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c][0].push(
            Comment(
                {
                    commentId: uint(comments[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c][0].length),
                    login: "Admin",
                    comment: "Hay",
                    likes: zeroAddress,
                    dislikes: zeroAddress
                }
            )
        );
    }

    mapping(address => User) public user;
    Shop[] public shop;
    mapping(address => ComplaintsAndSuggestions[])
        public bookOfComplaintsAndSuggestions;
    Request[] public requestToShoper;
    Request[] public requestToSalesman;
    mapping(uint => bool) public BankRequestShop;
    mapping(address => uint) AddressToShop;
    mapping (address => mapping (uint => Comment[])) public comments;
    /* Отсуда берутся адреса для назвачения магазина и хранятся адреса, которые принадлежали магазинам */
    address[] public freeAddresses;
    address[] public zeroAddress;
    address[] public userArray;
    uint[] public bankRequestsIndexes;

    modifier IsNotReg() {
        require(
            user[msg.sender].userAddress == address(0),
            "You are registered"
        );
        _;
    }
    modifier IsNotShop(address addressUser) {
        for (uint256 i = 0; i < shop.length; i++) {
            require(shop[i].shopAddress != addressUser, "You are a store");
        }
        _;
    }
    modifier IsStore(address shopAddress) {
        bool flag = false;
        for (uint256 i = 0; i < shop.length; i++) {
            if (shop[i].shopAddress == msg.sender) {
                flag=true;
                break;
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
        require(user[msg.sender].isAdmin == true, "You are not an admin");
        require(user[msg.sender].role == 3, "Please, check your role");
        _;
    }
    modifier IsUser() {
        require(
            user[msg.sender].userAddress != address(0),
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
                .likes
                .length;
            i++
        ) {
            require(
                bookOfComplaintsAndSuggestions[shopAddress][complaintsId].likes[
                    i
                ] != msg.sender,
                "You are liked"
            );
        }
        _;
    }
    modifier CheckLikeComment(address shopAddress, uint complaintsId, uint256 commentId) {
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
                .dislikes
                .length;
            i++
        ) {
            require(
                bookOfComplaintsAndSuggestions[shopAddress][complaintsId]
                    .dislikes[i] != msg.sender,
                "You are disliked"
            );
        }
        _;
    }
    modifier CheckDislikeComment(address shopAddress, uint complaintsId, uint commentId) {
        for (uint256 i = 0;i <comments[shopAddress][complaintsId][commentId].dislikes.length;i++) {
            require(comments[shopAddress][complaintsId][commentId].dislikes[i] != msg.sender,"You are disliked");
        }
        _;
    }
    modifier CheckRequestToSalesman() {
        for (uint i = 0; i < requestToSalesman.length; i++) {
            if (requestToSalesman[i].senderAddress == msg.sender) {
                require(requestToSalesman[i].isFinish == true,"You are in request to salesman");
            }
        }
        _;
    }
    modifier CheckRequestToShoper() {
        for (uint256 i = 0; i < requestToShoper.length; i++) {
            if (requestToShoper[i].senderAddress == msg.sender) {
                require(requestToShoper[i].isFinish == true,"You are in request to shoper");
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
        user[msg.sender] = User(
            {
                userAddress: msg.sender,
                FIO: FIO,
                login: login,
                password: password,
                role: 1,
                shopId: -1,
                isAdmin: false,
                isSalesman: false
            }
        );
        userArray.push(msg.sender);

        emit NewUser(msg.sender);
    }

    function LoginUser(string memory login, bytes32 password)public view IsUser returns (bool)
    {
        require(keccak256(abi.encodePacked(user[msg.sender].login)) == keccak256(abi.encodePacked(login)), "Login incorrect");
        require(user[msg.sender].password == password, "Password incorrect");
        return true;
    }

    function LikeComplaints(address shopAddress, uint complaintsId)public IsUser CheckDislike(shopAddress, complaintsId) CheckLike(shopAddress, complaintsId) IsNotSalesman(msg.sender) IsNotSenderComplains(shopAddress, complaintsId)
    {
        require(user[msg.sender].role != 6, "You are a Shop");
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].likes.push(msg.sender);

        emit MarkComplaint(shopAddress, complaintsId, 1, msg.sender);
    }

    function AddComplaints(address shopAddress,string memory comment,  uint mark) public IsShoperOrSalesman {
        ComplaintsAndSuggestions[] storage book = bookOfComplaintsAndSuggestions[shopAddress];
        book.push(
            ComplaintsAndSuggestions(
                {
                    complaintsId: uint(book.length),
                    login: user[msg.sender].login,
                    comment: comment,
                    mark: mark,
                    likes: zeroAddress,
                    dislikes: zeroAddress
                }
            )
        );
        emit NewComplaint(shopAddress, uint(book.length - 1));
    }

    function AddComment(address shopAddress, uint complaintsId, string memory comment) public IsSalesmanOnThisShop(AddressToShop[shopAddress]) {
        if (user[msg.sender].role == 1 || user[msg.sender].role == 2) {
            Comment[] storage tempComments = comments[shopAddress][complaintsId]; // Понять насколько это оптимально
            tempComments.push(
                Comment(
                    {
                        commentId: uint(tempComments.length),
                        login: user[msg.sender].login,
                        comment: comment,
                        likes: zeroAddress,
                        dislikes: zeroAddress
                    }
                )
            );
            emit NewComment(shopAddress, complaintsId, uint(tempComments.length - 1));
        }
    }

    function LikeComment(address shopAddress, uint complaintsId, uint commentId) public IsUser CheckDislikeComment(shopAddress, complaintsId, commentId) CheckLikeComment(shopAddress, complaintsId, commentId) IsNotSalesman(msg.sender)
    {
        require(user[msg.sender].role!=6, "You are a Shop");
        comments[shopAddress][complaintsId][commentId].likes.push(msg.sender);
        emit MarkComment(shopAddress, complaintsId, commentId, 1, msg.sender);
    }

    function DisikeComment(address shopAddress, uint complaintsId, uint commentId)public IsUser CheckDislikeComment(shopAddress, complaintsId, commentId)CheckLikeComment(shopAddress, complaintsId, commentId)IsNotSalesman(msg.sender)
    {
        require(user[msg.sender].role!=6, "You are a Shop");
        comments[shopAddress][complaintsId][commentId].dislikes.push(
            msg.sender
        );
        emit MarkComment(shopAddress, complaintsId, commentId, 0, msg.sender);
    }

    function DisikeComplaints(address shopAddress, uint complaintsId)public IsUser IsNotShop(msg.sender)  CheckDislike(shopAddress, complaintsId)CheckLike(shopAddress, complaintsId) IsNotSalesman(msg.sender) IsNotSenderComplains(shopAddress, complaintsId)
    {
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].dislikes.push(msg.sender);
        emit MarkComplaint(shopAddress, complaintsId, 0, msg.sender);
    }

    function RequestToSalesmanFunc(uint shopId)public IsUser CheckRequestToSalesman IsNotShop(msg.sender)
    {
        require(user[msg.sender].isSalesman == false, "You are a salesman");
        require(user[msg.sender].role == 1 || user[msg.sender].role == 3);
        requestToSalesman.push(
            Request(
                {
                    id: requestToSalesman.length,
                    senderAddress: msg.sender,
                    currentRole: user[msg.sender].role,
                    newRole: 2,
                    shopId: int(shopId),
                    isFinish: false
                }
            )
        );
        emit NewRequest("beSalesman", uint(requestToSalesman.length - 1));
    }

    function RequestToShoperFunc() public IsUser CheckRequestToShoper IsNotShop(msg.sender) {
        require(user[msg.sender].isSalesman == true, "You are not a salesman");
        requestToShoper.push(
            Request(
               {
                    id: uint(requestToShoper.length),
                    senderAddress: msg.sender,
                    currentRole: user[msg.sender].role,
                    newRole: 1,
                    shopId: user[msg.sender].shopId,
                    isFinish: false
                }
            )
        );

        emit NewRequest("beBuyer", uint(requestToShoper.length - 1));
    }

    function AccRequestShoper(uint requestId) public IsAdmin {
        require(requestToShoper[requestId].senderAddress != address(0),"Check requestId");
        require(requestToShoper[requestId].isFinish == false,"You are not in request");

        address salesman = requestToShoper[requestId].senderAddress;
        address[] storage salesmen = shop[uint256(requestToShoper[requestId].shopId)].salesmen;

        for (uint i = 0; i < salesmen.length; i++) {
            if(salesmen[i] == salesman) {
                delete salesmen[i];
                break;
            }
        }

        user[salesman].isSalesman = false;
        user[salesman].role = 1;
        requestToShoper[requestId].isFinish = true;

        emit RemoveSalesman(salesman, uint(requestToShoper[requestId].shopId));
        emit RequestFinished("beBuyer", requestId);
        emit NewRole(salesman, 1);
    }

    function AccRequestSalesman(uint requestId) public IsAdmin {
        require(requestToSalesman[requestId].senderAddress != address(0),"Check requestId");
        require(requestToSalesman[requestId].isFinish == false,"You are not in request")
        ;
        Request memory tempData = requestToSalesman[requestId];
        shop[uint256(tempData.shopId)].salesmen.push(requestToSalesman[requestId].senderAddress);

        user[tempData.senderAddress].isSalesman = true;
        user[tempData.senderAddress].shopId = tempData.shopId;

        requestToSalesman[requestId].isFinish = true;

        emit RequestFinished("beSalesman", requestId);
        emit AddSalesman(tempData.senderAddress, uint(tempData.shopId));
        emit NewRole(tempData.senderAddress, 2);
    }
    function CancelRequestShoper(uint requestId) public IsAdmin {
        requestToShoper[requestId].isFinish = true;
        emit RequestFinished("beBuyer", requestId);
    }

    function CancelRequestSalesman(uint requestId) public IsAdmin {
        requestToSalesman[requestId].isFinish = true;
        emit RequestFinished("beSalesman", requestId);
    }

    function BeAdmin() public IsUser {
        require(user[msg.sender].isAdmin == true, "You are not an admin");
        require(user[msg.sender].role != 3, "You are admin");
        user[msg.sender].role = 3;
        emit ChangeRole(msg.sender, 3);
    }

    function BeSalesman() public IsUser {
        require(user[msg.sender].isSalesman == true, "You are not an salesman");
        require(user[msg.sender].role != 2, "You are salesman");
        user[msg.sender].role = 2;
        emit ChangeRole(msg.sender, 2);
    }

    function BeShoper() public IsUser {
        require(user[msg.sender].role == 2 || user[msg.sender].role == 3, "You are shoper");
        user[msg.sender].role = 1;
        emit ChangeRole(msg.sender, 1);
    }

    function ToBankRequest(uint shopId) public IsStore(msg.sender) {
        require(msg.sender == shop[shopId].shopAddress, "The shopId incorrect");
        require(shop[shopId].haveBankMoney == false,"You are already have money from Bank");
        require(BankRequestShop[shopId] == false, "You are in request");
        BankRequestShop[shopId] = true;
        bankRequestsIndexes.push(shopId);
    }

    function AccRequestBank(uint shopId) public payable {
        // require(msg.sender == bank, "You are not a Bank"); Исправить, проверка нужна, но переменная банк - нет
        require(shop[shopId].haveBankMoney == false,"The shop is already have money");
        require(BankRequestShop[shopId] == true,"The shop is not send a request to have money");
        require(msg.sender.balance >= 1000, "You are have not a money");
        require(msg.value > 0, "Check value");
        shop[shopId].shopAddress.transfer(msg.value);
        shop[shopId].haveBankMoney = true;
    }

    function upgradeToAdmin(address userAddress) public IsAdmin {
        require(user[userAddress].isAdmin == false,"This user is already an admin");
        user[userAddress].role = 3;
        user[userAddress].isAdmin = true;
        emit NewRole(userAddress, 3);
    }

    function AddShop(uint freeAddressId, string memory city, string memory login, bytes32 password)public IsAdmin IsNotShop(freeAddresses[freeAddressId])IsNotSalesman(freeAddresses[freeAddressId])
    {
        address payable newShopAddress = payable(freeAddresses[freeAddressId]);
        require(newShopAddress != address(0), "This address is buzy or not registered");
        user[newShopAddress] = User(
                {
                    userAddress: newShopAddress,
                    FIO: login,
                    login: login,
                    password: password,
                    role: 6,
                    shopId: -1,
                    isAdmin: false,
                    isSalesman: false

                }
            );
        shop.push(
            Shop(
                {
                    shopId: uint(shop.length),
                    shopAddress: newShopAddress,
                    city: city,
                    salesmen: zeroAddress,
                    haveBankMoney: false

                }
            )
        );
        AddressToShop[newShopAddress] = uint(shop.length - 1);
        delete freeAddresses[freeAddressId];
        emit AddShopEvent(newShopAddress, uint(shop.length - 1));
        emit RemoveFreeAddress(newShopAddress);
    }

    function ShowSalesmanOfStore(uint256 shopId) public view returns (address[] memory)
    {
        return (shop[shopId].salesmen);
    }

    function DeleteShop(uint256 shopId) public IsAdmin {
        Shop memory tempShop = shop[shopId];

        require(tempShop.shopAddress != address(0), "This shop is already delete");

        DeleteSalesman(tempShop);

        freeAddresses.push(tempShop.shopAddress);
        delete user[tempShop.shopAddress];
        delete shop[shopId];

        emit RemoveShop(tempShop.shopAddress);
        emit AddFreeAddress(tempShop.shopAddress, freeAddresses.length - 1);
    }

    function DeleteSalesman(Shop memory deletingShop) private {
        for (uint256 i = 0; i < deletingShop.salesmen.length; i++) {
            user[deletingShop.salesmen[i]].isSalesman = false;
            user[deletingShop.salesmen[i]].role = 1;
            emit NewRole(deletingShop.salesmen[i], 1);
        }
    }

    function getShops() public view returns (Shop[] memory) {
        return shop;
    }

    function getShopComplainAndSuggestion(address shopAddress) public view returns (ComplaintsAndSuggestions[] memory)
    {
        return bookOfComplaintsAndSuggestions[shopAddress];
    }


    function getBeSalesmanRequests() public view returns (Request[] memory)
    {
        return requestToSalesman;
    }

    function getBeBuyerRequests() public view returns (Request[] memory)
    {
        return requestToShoper;
    }

    function getUsersAddresses() public view returns (address[] memory) {
        return userArray;
    }

    function getCASComments(address shopAddress, uint CASId) external view returns(Comment[] memory) {
        return comments[shopAddress][CASId];
    }

    function getFreeAddresses() external view returns(address[] memory) {
        return freeAddresses;
    }
    function getBankRequestsIndexes() external view returns(uint[] memory) {
        return bankRequestsIndexes;
    }
 }
