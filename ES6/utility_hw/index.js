const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.
function add(datas){
    datas.forEach(({title, isClear}, i) => {
        const li = document.createElement('li'); //li 태그 요소노드 생송
        li.classList.add('item'); //item 클래스 추가
        if(isClear === true){
            li.classList.add('done');
        } //done class add
        li.textContent = `${i+1}. ${title}`;
        list.append(li);
    });
}
add(data);