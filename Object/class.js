class User{
    constructor(email, birthdate){
        this.email = email;
        this.birthdate = birthdate;
    }
    buy(item){
        console.log(`${this.email} buys ${this.name}`);
    }
}

const item = {
    name: '스웨터',
    price : 30000,
};

const user1 = new User('shg5977@naver.com', '2000-01-02');