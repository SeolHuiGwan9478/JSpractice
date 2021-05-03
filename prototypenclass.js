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