const quotesrist = [
    {
        quotes: "삶이 있는 한 희망은 있다.",
        auhors: "키케로",

    },

    {
        quotes: "산다는것 그것은 치열한 전투이다",
        auhors: "로망로랑",

    },

    {
        quotes: "피할수 없으면 즐겨라",
        auhors: "로버트 엘리엇",

    },

    {
        quotes: "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
        auhors: "채근담",

    },

    {
        quotes: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
        auhors: "제임스 딘",

    },

    {
        quotes: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        auhors: "괴테",

    },

    {
        quotes: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        auhors: "베토벤",

    },

    {
        quotes: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
        auhors: "발타사르 그라시안",

    },

    {
        quotes: "문제점을 찾지 말고 해결책을 찾으라",
        auhors: "헨리포드",

    },

    {
        quotes: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        auhors: "하버트 개서",

    },

    {
        quotes: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
        auhors: "동아프리카속담",

    },


]

const quote=document.querySelector("#quotes span:first-child")
const auhor=document.querySelector("#quotes span:last-child")

const todayquote=(quotesrist[Math.floor(Math.random()*quotesrist.length)])
quote.innerHTML=todayquote.quotes
auhor.innerHTML=todayquote.auhors