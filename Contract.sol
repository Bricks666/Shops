pragma solidity 0.7.0;
pragma experimental ABIEncoderV2;
contract Shoping { // Создание контракта

    //Создание структур данных
    struct User {
        address user_address;
        string FIO;
        bytes32 login;
        bytes32 password;
        uint role; //1 - shoper  2 - salesman  3 - admin
        bool admin;
        bool salesman;}
    struct Shop {
        uint shopId;
        address payable addresShop;
        string city;
        /*salemEn*/
        address[] slaesmen;
        bool shopStatus;
        bool bankMoney;}
    struct ComplaintsAndSuggestions {
        uint complaintsId;
        bytes32 login;
        string comment;
        uint mark;
        address[] like;
        address[] dislike;
    }
    struct RequestToSalesman {
      uint id_requestToSalesman;
      address addressShoper;
      uint shopId;
      bool finished;}
    struct RequestToShoper {
      uint id_requestToShoper;
      address addressSalesman;
      bool finished;}
    struct RequestToAdmin{
      uint id_requestToAdmin;
      address addressUser;
      bool finished;}
      
     // Объявление eventов
     
      event ChangeRole(address indexed user, uint role);
      event NewRole(address indexed user, uint role);
      event MarkComplaint(address shopAddress, uint complaintsId, uint mark);
      event NewComplaint(address bookAddress, uint complaintsId);
      
    //Конструктор заносит в контракт нужные данные при деплое
      
    constructor() {
        user[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4]=User(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,"Petrov Petr Petrovich", "petrov", keccak256(abi.encodePacked("petr")), 1, false, false);
        user[0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2]=User(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,"Admin", "admin", keccak256(abi.encodePacked("admin")), 3, true, false);
        user[0xdD870fA1b7C4700F2BD7f44238821C26f7392148]=User(0xdD870fA1b7C4700F2BD7f44238821C26f7392148, "Salesman", "salesman", keccak256(abi.encodePacked("salesman")), 2, false, true);
        user[msg.sender] = User(msg.sender, "User", keccak256(abi.encodePacked("user")), keccak256(abi.encodePacked("123")), 2, false, true);
        address[] memory startSalesmen = new address[](1);
        startSalesmen[0] = 0xdD870fA1b7C4700F2BD7f44238821C26f7392148;
        shop[shopAddress.length]=Shop(shopAddress.length,0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c, "kaluga", startSalesmen, true, false);
        shopAddress.push(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c);
        bookOfComplaintsAndSuggestions[0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c].push(ComplaintsAndSuggestions(0,keccak256(abi.encodePacked("Admin")), "Hello, i'm an admin", 1, zeroAddress, zeroAddress ));
        bookOfComplaintsAndSuggestions[0xdD870fA1b7C4700F2BD7f44238821C26f7392148].push(ComplaintsAndSuggestions(0,keccak256(abi.encodePacked("Admin")), "Hello, i'm an admin", 1, zeroAddress, zeroAddress ));
        
    }
        
    //Создание маппингов для удобного доступа к данным
        
    mapping (address => User) public user;
    /*Зачем мапить магазины по числу, если есть отдельный массив с адресами магазинов, если уж обращаться к мапу, то по адресу магазина*/
    mapping (uint => Shop) public shop;
    mapping (address => ComplaintsAndSuggestions[]) public bookOfComplaintsAndSuggestions;
    mapping (uint => RequestToAdmin) public requestToAdmin;
    mapping (uint => RequestToShoper) public requestToShoper;
    mapping (uint => RequestToSalesman) public requestToSalesman;
    mapping (uint => bool) public BankRequestShop;
    
    //Объявление переменных и массивов типов uint address[]
    
    address[] public shopAddress;
    address[] public zeroAddress;
    uint public RequestToSalesmanCount=0;
    uint public RequestToShoperCount=0;
    uint public RequestToAdminCount=0;
    address[] public userArray;
    uint CountMoneyToTransfer=1;
    
    //Внесение адреса банка и поставщика
    
    address payable bank = 0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678;
    address payable provider = 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db;
    
    //модифаеры нужны для оптимизации контракта (чтобы избежать многократного повторение одинаковых проверкок)
    
    modifier IsNotReg() { // Проверка на регистрацию пользователя. Если пользователь зарегистрирован, то выдает ошибку
        require(user[msg.sender].user_address == address(0), "You are registered");_;}
    modifier IsNotShop(address addresUser) {// Проверка адреса, не является ли он адресом магазина
        for (uint i=0; i<shopAddress.length;i++) {
        require(shop[i].addresShop != addresUser, "You are a store"); 
        }_;}
    modifier IsStore() { //Проверка, является ли адрес адресом магазина, зарегистрированного в системе
         for (uint i=0; i<shopAddress.length;i++) {
        require(shop[i].addresShop == msg.sender, "You are not a store"); 
        }_;}
    modifier IsShoperOrSamesman() {//Проверка пользователя на роль покупателя или продавца (для книги жалоб и предложений)
        require(user[msg.sender].role == 1 || user[msg.sender].role == 2, "You are not a shoper");_;}
    modifier IsNotSalesman() { //Проверка, не является ли данный пользователь продавцом
      require(user[msg.sender].role != 2, "You are a salesman");  _;}
    modifier IsAdmin() {//Проверка на то, что данный пользователь является администратором
        require(user[msg.sender].admin == true, "You are not an admin"); 
        require(user[msg.sender].role == 3, "Please, check your role");_;}
    modifier IsUser() {//Проверка на то, что пользователь зарегистрирован
        require(user[msg.sender].user_address != address(0), "You are not an user");_;}
    modifier IsSalesmanThisStore(uint shopId) {//Проверка, является ли данный пользователь продавцом этого магазина
        for (uint i=0; i<shop[shopId].slaesmen.length; i++) {
            require(msg.sender == shop[shopId].slaesmen[i], "You are not a shoper in this store");    
        }
        _;
        
    }
    modifier CheckLogin(string memory login) {//Проверка валидности логина (логин свободен)
        for (uint i=0; i<userArray.length; i++) {
            require(user[userArray[i]].login != keccak256(abi.encodePacked(login)), "Please, use different login");
        }
        require(keccak256(abi.encodePacked(login)) != keccak256(abi.encodePacked("")), "Login incorrect");_;}
    modifier CheckTheCorrectPassword(string memory password) {//Проверка валидности пароля
        require(keccak256(abi.encodePacked(password)) != 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470, "Password incorrect");
        _;
        
    }
        
    modifier CheckLike(address shopAddress,uint complaintsId) {//Проверка, ставил ли пользователь подтверждеие комментария
        for (uint i=0;i<bookOfComplaintsAndSuggestions[shopAddress][complaintsId].like.length;i++) {
            require(bookOfComplaintsAndSuggestions[shopAddress][complaintsId].like[i] != msg.sender, "You are liked");
        }
        _;
        
    }
    modifier CheckDislike(address shopAddress, uint complaintsId) {//Проверка, ставил ли пользователь опроверждение комментария
        for (uint i=0;i<bookOfComplaintsAndSuggestions[shopAddress][complaintsId].dislike.length;i++) {
            require(bookOfComplaintsAndSuggestions[shopAddress][complaintsId].dislike[i] != msg.sender, "You are disliked");
        }_;}    
    modifier CheckRequestToSalesman() {//Проверка, подавал ли пользователь ранее заявку на повышение до продавца 
        for (uint i=0; i<RequestToSalesmanCount; i++) {
            if (requestToSalesman[i].addressShoper == msg.sender) {
                require(requestToSalesman[i].finished == true, "You are in request to salesman");
            }}_;}
    modifier CheckRequestToAdmin() {//Проверка, подавал ли пользователь ранее заявку на повышение до роли администратора
        for (uint i=0; i<RequestToAdminCount; i++) {
            if (requestToAdmin[i].addressUser == msg.sender) {
                require(requestToAdmin[i].finished == true, "You are in request to admin");
            }}_;}
    modifier CheckRequestToShoper() {//Проверка, подавал ли пользователь ранее заявку на понижение роли до покупателя
        for (uint i=0; i<RequestToShoperCount; i++) {
            if (requestToShoper[i].addressSalesman == msg.sender) {
                require(requestToShoper[i].finished == true, "You are in request to shoper");
            }}_;}
            
    //Блок функций контракта
            
    //Функция регистрации пользователя с проверками на валидность логина, пароля, а также доступности адреса для регистрации (отсутствие его в системе)
            
    function regUser(string memory FIO, string memory password, string memory login) public IsNotReg IsNotShop(msg.sender) CheckLogin(login) CheckTheCorrectPassword(password){ 
        require(msg.sender != bank, "You are a bank");
        require(msg.sender != provider, "You are a provider");
        user[msg.sender]=User(msg.sender, FIO, keccak256(abi.encodePacked(login)), keccak256(abi.encodePacked(password)), 1, true, false);
        userArray.push(msg.sender);}
    
    function LoginUser(string memory login, string memory password) IsUser view public returns(bool){
        require(user[msg.sender].login == keccak256(abi.encodePacked(login)), "Login incorrect");
        require(user[msg.sender].password == keccak256(abi.encodePacked(password)), "Password incorrect");
        return(true);
    }
    //Функция подтверждения комментариев с соответствующими проверками 
        
    function LikeComplaints(address shopAddress, uint complaintsId) IsUser CheckDislike(shopAddress, complaintsId) CheckLike(shopAddress, complaintsId) IsNotSalesman public{
        require(bookOfComplaintsAndSuggestions[shopAddress][complaintsId].login != user[msg.sender].login, "This is your complaints");
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].like.push(msg.sender);
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].mark++;
        emit MarkComplaint(shopAddress, complaintsId, 1);
    }
        
    //Функция добавления комментариев в книгу жалоб и предложений с проверкой роли пользователя (покупатель или продавец)
        
    function AddComplaints(address shopAddress, string memory comment, uint mark) public IsShoperOrSamesman{
        address[] memory zeroArray;
        ComplaintsAndSuggestions[] storage book = bookOfComplaintsAndSuggestions[shopAddress];
        book.push(ComplaintsAndSuggestions(book.length, user[msg.sender].login, comment, mark, zeroArray, zeroArray));
        emit NewComplaint(shopAddress, book.length - 1);
    }
    
    //Функция опроверждения комментариев с соответствующими проверками 
    
    function DisikeComplaints(address shopAddress, uint complaintsId) IsUser CheckDislike(shopAddress, complaintsId) CheckLike(shopAddress, complaintsId) IsNotSalesman public{
        require(bookOfComplaintsAndSuggestions[shopAddress][complaintsId].login != user[msg.sender].login, "This is your complaints");
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].dislike.push(msg.sender);
        bookOfComplaintsAndSuggestions[shopAddress][complaintsId].mark--;
        emit MarkComplaint(shopAddress, complaintsId, 0);
    }
        
    //Функция переключения ролей в системе с роли продавца до роли покупателя
        
    function BeShoperForSalesman() IsUser IsNotShop(msg.sender) public{
        require(user[msg.sender].role != 1, "You are user");
        require(user[msg.sender].salesman == true, "You are not a salesman");
        user[msg.sender].role = 1;
        emit ChangeRole (msg.sender, 1);
    }
    
    //Функция отправления заявки на повышение роли до продавца
    
    function RequestToSalesmanFunc(uint shopId) IsUser CheckRequestToSalesman public{
        require(user[msg.sender].salesman != true, "You are a salesman");
        requestToSalesman[RequestToSalesmanCount]=RequestToSalesman(RequestToSalesmanCount, msg.sender, shopId, false);
        RequestToSalesmanCount++;}
        
    //Функция отправления заявки на повышение роли до администратора
        
    function RequestToAdminFunc() IsUser CheckRequestToAdmin public{
        require(user[msg.sender].admin == false, "You are admin");
        require(user[msg.sender].salesman != true, "You are a salesman");
        requestToAdmin[RequestToAdminCount]=RequestToAdmin(RequestToAdminCount, msg.sender, false);
        RequestToAdminCount++;}
    
    //Функция отправления заявки на понижение роли до покупателя
        
    function RequestToShoperFunc() IsUser CheckRequestToShoper public{
        require(user[msg.sender].salesman == true, "You are not a salesman");
        requestToShoper[RequestToShoperCount]=RequestToShoper(RequestToShoperCount, msg.sender, false);
        RequestToShoperCount++;}
        
    //Функция подтверждение администратором заявки на повышение роли до администратора
        
    function AccRequestAdmin(uint requestId) IsAdmin public{
        require(requestToAdmin[requestId].addressUser != address(0), "Check requestId");
        require(requestToAdmin[requestId].finished == false, "You are not in request");
        user[requestToAdmin[requestId].addressUser].admin = true;
        requestToAdmin[requestId].finished = true;
        emit NewRole(requestToAdmin[requestId].addressUser, 3);
    }
    
    //Функция подтверждение администратором заявки на понижение роли до покупателя
    
    function AccRequestShoper(uint requestId) IsAdmin public{
        require(requestToShoper[requestId].addressSalesman != address(0), "Check requestId");
        require(requestToShoper[requestId].finished == false, "You are not in request");
        user[requestToShoper[requestId].addressSalesman].salesman = false;   
        user[requestToShoper[requestId].addressSalesman].role=1;
        requestToShoper[requestId].finished = true;
        emit NewRole(requestToShoper[requestId].addressSalesman, 1);
    }
    
    //Функция подтверждение администратором заявки на повышение роли до продавца
    
    function AccRequestSalesman(uint requestId) IsAdmin public{
        require(requestToSalesman[requestId].addressShoper != address(0), "Check requestId");
        require(requestToSalesman[requestId].finished == false, "You are not in request");
        user[requestToSalesman[requestId].addressShoper].salesman = true;
        requestToSalesman[requestId].finished = true;
        shop[requestToSalesman[requestId].shopId].slaesmen.push(requestToSalesman[requestId].addressShoper);
        emit NewRole(requestToSalesman[requestId].addressShoper, 2);
    }
    
    //Функция отмены администратором заявки на повышение роли до администратора
    
    function CancelRequestAdmin(uint requestId) IsAdmin public{
        requestToAdmin[requestId].finished = true;}
        
    //Функция отмены администратором заявки на понижение роли до покупателя
        
    function CancelRequestShoper(uint requestId) IsAdmin public{
        requestToShoper[requestId].finished = true;}
        
    //Функция отмены администратором заявки на повышение роли до продавца
        
    function CancelRequestSalesman(uint requestId) IsAdmin public{
        requestToSalesman[requestId].finished = true;}
        
    //Функция смены роли на администратора
        
    function BeAdmin() IsUser public{
        require(user[msg.sender].admin == true, "You are not an admin");
        require(user[msg.sender].role != 3, "You are admin");
        user[msg.sender].role=3;
        emit ChangeRole(msg.sender, 3);
    }
    
    //Функция смены роли на продавца

    function BeSalesman() IsUser public{
        require(user[msg.sender].salesman == true, "You are not an salesman");
        require(user[msg.sender].role != 2, "You are salesman");
        user[msg.sender].role=2;
        emit ChangeRole(msg.sender, 2);
    }
    
    //Функция смены роли на пользователя
    
    function BeShoper() IsUser public{
        require(user[msg.sender].role != 1, "You are shoper");
        user[msg.sender].role=1;
        emit ChangeRole(msg.sender, 1);
    }
    
    //Функция отправления заявки магазином на получение стартового капитала от банка
    
    function ToBankRequest(uint shopId) IsStore public{
        require(shop[shopId].shopStatus == true, "This shop is already delete");
        require(msg.sender == shop[shopId].addresShop, "The shopId incorrect");
        require(shop[shopId].bankMoney ==false, "You are already have money from Bank");
        require(BankRequestShop[shopId] == false, "You are in request");
        BankRequestShop[shopId] = true;}
        
    //Функция подтверждения заявки банка на получение магазином стартового капитала
        
    function AccRequestBank(uint shopId) payable public{
        require(msg.sender == bank, "You are not a Bank");
        require(shop[shopId].bankMoney == false, "The shop is already have money");
        require(BankRequestShop[shopId] == true, "The shop is not send a request to have money");
        require(msg.sender.balance >= 1000, "You are have not a money");
        require(msg.value > 0, "Check value");
        shop[shopId].addresShop.transfer(msg.value);
        shop[shopId].bankMoney = true;}
        
    //Функция ввода в систему нового магазина
        
    function AddShop(address payable addressShop, string memory city) IsAdmin IsNotShop(addressShop) public{
        address[] storage zeroAddressSalesman;
        shop[shopAddress.length]=Shop(shopAddress.length, addressShop, city, zeroAddressSalesman, true, false);
        shopAddress.push(addressShop);}
        
    //Функция просмотра продавцов в определенном магазине
        
    function ShowSalesmanOfStore(uint shopId) view public returns(address [] memory){
        return(shop[shopId].slaesmen);
        
    }
        
    //Функция удаления магазина из системы
    /*Есть оператор delete для удаления какого либо элемента*/
    function DeleteShop(uint shopId) IsAdmin public{
        require(shop[shopId].shopStatus == true, "This shop is already delete");
        shop[shopId].shopStatus = false;
        DeleteSalesman(shopId);
        shop[shopId].slaesmen = zeroAddress;}
        
    //Функция смены ролей продавцов удаленного магазина на роль покупателя
        
    function DeleteSalesman(uint shopId) private{
        for (uint i=0;i<shop[shopId].slaesmen.length;i++) {
            user[shop[shopId].slaesmen[i]].salesman = false;
            user[shop[shopId].slaesmen[i]].role = 1;
            emit NewRole(shop[shopId].slaesmen[i], 1);
        }
        
    }
    function getShopsAddress() view public returns(address[] memory) {
        return shopAddress;
    }
    
    function getShopComplainAndSuggestion(address addressShop) view external returns(ComplaintsAndSuggestions[] memory) {
        return bookOfComplaintsAndSuggestions[addressShop];
    }
}
        
    
