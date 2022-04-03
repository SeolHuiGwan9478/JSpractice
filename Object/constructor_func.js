function User(email, birthdate){
    this.email = email;
    this.birthdate = birthdate;
    this.buy = function(item){
        console.log(`${this.email} buys ${item.name}`);
    };
}

const item = {
    name: '스웨터',
    price: 30000,
};

const user1 = new User('chirs123@naver.com', '2000-01-02');
const user2 = new User('shg0102kr@naver.com', '2000-01-02');
const user3 = new User('shg5977@naver.com', '2000-01-02');
