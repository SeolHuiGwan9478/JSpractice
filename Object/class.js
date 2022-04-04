class User{
    constructor(email, birthdate){
        this.email = email;
        this.birthdate = birthdate;
    }
    buy(item){
        console.log(`${this.email} buys ${this.name}`);
    }
    
    get email(){
        return `Eamil Adress is ${this._email}`;
    }

    set email(address){
        if (address.includes('@')){
            this._email = address;
        }
        else{
            throw new Error('invalid email address'); //오류 발생
        }
    }
}

const item = {
    name: '스웨터',
    price : 30000,
};

const user1 = new User('shg5977@naver.com', '2000-01-02');