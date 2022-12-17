// Literal Types로 만드는 const 변수 유사품
let me: 'a' | 'b'

// 사용이유
// - 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// - 자동완성

// 함수
function l61(a: "hello") {}
l61("hello");

// 리턴 함수
function l62(a: "hello"): 1 | 0 {
  return 1
}

// 실습1
function game(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return ['가위']
}

// const 변수의 한계
// Literal Type은 const 변수 업글 버전임
const variable61 = 'kim';

// 문제점
var data = {
  name : 'bok'
}

data.name // 가능

function l63(a: "bok") {}
// 'bok'이라는 자료만 들어올 수 있습니다 x
// 'bok'이라는 타입만 들어올 수 있습니다 o
l63("bok"); // 가능
// l63(data.name) // 불가능

// 해결방법
// 1. 변수 만들 때 타입지정
var data2: { name: 'bok' } = {
  name: "bok",
};
l63(data2.name)

// 2. as 문법
var data3 = {
  name : a as 'bok'
}
l63(data3.name)

// 3. as const 키워드 사용
// 이 변수에 Literal Type 지정을 알아서 해주셈
// object value 값을 그대로 타입 지정
// object 속성들에 모두 readonly 붙여줌 (에러) name : 123
var data4 = {
  name : 'bok'
} as const 
l63(data4.name)
