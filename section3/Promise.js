// Date.now 는 현재 시간을 숫자 형태로 가져오는 자바스크립트 내장 함수임. 밑의 함수는
//work() 함수가 호출되면 for 문이 돌아갈 때는 다른 작업은 처리하지 않고 온전히 for 문만 실행된다.
// 만약 이 작업이 진행되는 동안 다른 작업도 진행하고 싶으면 함수를 비동기 형태로 전환 해주어야 한다.
function work() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }
  
  work();
  console.log('다음 작업');

// setTimeout 이라는 함수를 사용해주면 비동기화 함수로 만들 수 있다.
function work(){
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {}
        const end = Date.now();
        console.log(end - start + 'ms');
    }, 0);
}
//setTimeout 함수는 첫번째 파라미터에 넣는 함수를 두번째 파라미터에 넣은 시간(ms단위)가 흐른 후 호출
//이 함수를 사용하면 정한 작업이 백그라운드에서 수해오디기 때문에 기존의 코드 흐름을 막지 않고 동시에 작업 수행 가능

//만약 work 함수가 끝난 다음에 어떤 작업을 처리하고 싶으면 콜백 함수를 파라미터로 전달해주면 된다.
//콜백 함수란, 함수 타입의 값을 파라미터로 넘겨줘서, 파라미터로 받은 함수를 특정 작업이 끝나고 호출을 해주는 것을 의미함.
function work(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 0);
  }
  
  console.log('작업 시작!');
  work(() => {
    console.log('작업이 끝났어요!')
  });
  console.log('다음 작업');