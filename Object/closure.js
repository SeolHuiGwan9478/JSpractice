function createUser(email, birthdate){
    let _email = email;

    const user = {
        birthdate,
        get email(){
            return _email;
        },
        set email(){
            if(address.includes('@')){
                _email = address;
            }else{
                throw new Error('invalid email address');
            }
        },
    };

    return user;
}

function createUser(email, birthdate) {
    const _email = email;
    let _point = 0;
  
    function increasePoint() {
      _point += 1;
    }
  
    const user = {
      birthdate,
  
      get email() {
        return _email;
      },
  
      get point() {
        return _point;
      },
  
      buy(item) {
        console.log(`${this.email} buys ${item.name}`);
        increasePoint();
      },
    };
  
    return user;
  }
  
  const item = {
    name: '스웨터',
    price: 30000,
  };
  
  const user1 = createUser('chris123@google.com', '19920321');
  user1.buy(item);
  user1.buy(item);
  user1.buy(item);
  console.log(user1.point);

const user1 = createUser('shg5977@naver.com', '20000102');
console.log(user1.email);