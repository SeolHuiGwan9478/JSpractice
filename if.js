//if-else if문
const a = 10;
if (a === 5) {
  console.log('5입니다!');
} 
else if (a === 10) {
  console.log('10입니다!');
} 
else {
  console.log('5도 아니고 10도 아닙니다.');
}

//switch case 문
//특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용.
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}