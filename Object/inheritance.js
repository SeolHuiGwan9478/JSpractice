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
    }

    buy(item){
        console.log(`${this.email} buys ${item.name} with a 5% discount`);
    }
    streammusicForFree(){
        console.log(`Free music streaming for ${this.email}`);
    }
}