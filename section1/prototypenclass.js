//객체 생성 함수
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log(this.sound);
  };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
//객체 생성 함수는 보통 함수 이름의 첫 글자를 대문자로 함.
//새로운 객체를 생성하기 위해서는 new 키워드를 이용.
//같은 객체 생성 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있는데 객체 생성자 내의 값들을 프로토타입이라고 한다.
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
//.prototype.원하는키 = 코드 를 입력하여 프로토타입을 설정할 수 있다.
//클래스가 없었기에 객체 생성자를 재사용했었음.
//객체 생성자 상속받기
//새로운 객체 생성자를 만드는데 기존의 객체 생성자를 재사용할 수 있다.
//새로 만든 객체 생성자에 기존객체생성자.call 을 호출하면 된다. 여기서 첫번재 인자는 this를 넣어주어야 하고,
//그 이후에는 기존 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 함.
//ES6 부터 class가 JS에 추가 되었다. 이전에는 객체 생성자 함수 사용.
class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  const dog = new Animal('개', '멍멍이', '멍멍');
  const cat = new Animal('고양이', '야옹이', '야옹');
  
  dog.say();
  cat.say();

//상속도 쉬움.
//상속을 할 때는 extends 키워드를 사용하며, 생성자에서 사용하는 super() 함수가 상속받은 클래스의 생성자를 가르킴.
class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  class Dog extends Animal {
    constructor(name, sound) {
      super('개', name, sound);
    }
  }
  
  class Cat extends Animal {
    constructor(name, sound) {
      super('고양이', name, sound);
    }
  }
  
  const dog = new Dog('멍멍이', '멍멍');
  const cat = new Cat('야옹이', '야옹');
  
  dog.say();
  cat.say();