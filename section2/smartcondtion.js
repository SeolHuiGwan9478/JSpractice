//1. 특정 값이 여러 값중 하나인지 확인할 때
//before
function isAnimal(text) {
    return (
      text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    );
  }
  
  console.log(isAnimal('개')); // true
  console.log(isAnimal('노트북')); // false

//after -> 배열의 include 함수 이용.
function isAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
  }
  
  console.log(isAnimal('개')); // true
  console.log(isAnimal('노트북')); // false
