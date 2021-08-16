const quotes = [
    {
        quote: "위대한 사람은 말은 겸손하지만 행동이 남보다 뛰어나다.",
        author: "공자"
    },
    {
        quote: "남이 말할 때 완전히 귀 기울여라. 대부분의 사람들은 남의 말을 경청하지 않는다.",
        author: "어네스트 헤밍웨이"
    },
    {
        quote: "신념만 가지고 따르는 것은 맹목적으로 따르는 것과 같다.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "존재의 가장 중요한 이유, 세상을 사는 이유는 발견이다",
        author: "제임스 딘"
    },
    {
        quote: "죄악은 자연 상태에서 생겨날 수 없고, 무엇이 좋고 나쁜지 만장일치로 판단하는 시민 사회에서 결정된다.",
        author: "바뤼흐 스피노자"
    },
    {
        quote: "진실에 대해 만족스러운 결정을 내리려면 논쟁의 당사자보다는 중재자가 되어야 한다.",
        author: "아리스토텔레스"
    }
]

const quote = document.querySelector('div#quote > span:first-child');
const author = document.querySelector('div#quote > span:last-child');
const todayquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayquote.quote;
author.innerText = todayquote.author;