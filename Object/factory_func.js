function createUser(email, birthdate){
    const user = {
        email : email,
        birthdate : birthdate,
        buy(item){
            console.log(`${this.email} buys ${item.name}`);
        },
    };
    return user;
}

const item = {
    name: '스웨터',
    price: 30000,
};

const user1 = createUser('chris123@google.com', '1992-03-21');
const user2 = createUser('shg0102kr@google.com', '2000-01-02');
const user3 = createUser('shg5977@google.com', '2000-01-21');
