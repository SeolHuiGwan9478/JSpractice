class User{
    constructor(email, birthdate){
        this.email = email;
        this.birthdate = birthdate;
    }

    buy(item){
        console.log(`${this.email} buys ${item.name}`);
    }
}

class PremiumUser extends User{
    constructor(email, birthdate, level){
        super(email, birthdate);
        this.level = level;
        this.point = point;
    }

    buy(item){
        super.buy(item);
        this.point = point;   
    }
    streammusicForFree(){
        console.log(`Free music streaming for ${this.email}`);
    }
}

const item = {
    name: '스웨터',
    price: 30000,
}

const user1 = new User('a@naver.com', '20000102');
const user2 = new User('b@naver.com', '20000102');
const user3 = new User('c@naver.com', '20000102');

const puser1 = new PremiumUser('d@naver.com', '20000102');
const puser2 = new PremiumUser('e@naver.com', '20000102');
const puser3 = new PremiumUser('f@naver.com', '20000102');

const users = [user1, puser1, user2, puser2, user3, puser3];

users.forEach((user) => {
    console.log(user instanceof User);
});