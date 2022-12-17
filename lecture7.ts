// 함수와 methods에 type alias 지정하는 법

// 파라미터는 스트링만 들어올 수 있으며 넘버를 리턴(함수선언식)
function l71(a: string): number {
  return 1;
}

// 쓰는법
type A = (a: string) => number;

// 함수 type alias 부착하려면 함수표현식 사용
let l72: A = function() {
  return 1
}

// 오브젝트 안에 함수 만들기
let l73 = {
  name: "bok",
  plusOne() {},
};

l73.plusOne()

// 오브젝트 안의 함수 타입지정 방법
// 파라미터 하나는 number return 값은 number
let l74 = {
  name: "bok",
  // 파라미터가 있으면 타입지정 필수
  plusOne(a: number): number {
    return a + 1;
  },

  // 또다른 함수 만드는 방법
  changeName: () => {
    console.log("안녕");
  },
};

l74.plusOne(1)
l74.changeName();

// 콜백함수 개념
// 함수안에 함수를 넣고 싶을 때
function l75(a: any) {
  a();
}
function l76() {}

l75(l76);

// 문제1
type Member = {
  name : string,
  age : number,
  plusOne : (a : number) => number,
  changeName : () => void
}

// 문제2
type CutType = (a : string) => string

let cutZero: CutType = function (a) {
  let result = a.replace(/^0+/, "");
  return result;
};

function removeDash(a: string): number {
  let result = a.replace(/-/g, "");
  return parseFloat(result);
}

// 문제3
function q73(a: string, cutZero: CutZero, removeDash: RemoveDash) {
  let result = cutZero(a);
  let result2 = removeDash(result)
  console.log(result2)
}

// 해결 방법
// 함수의 파라미터 타입을 지정하기 위해서 type alias사용
type CutZero = (a : string) => string
type RemoveDash = (a : string) => number