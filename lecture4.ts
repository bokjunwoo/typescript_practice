// 타입 화정하기 Narrowing & Assertion

// 타입이 아직 하나로 확정되지 않았을 경우 Type Narrowing을 써야함
function a4(x: number | string) {
  // (에러) return x + 1

  // 해결
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function b4(x: number | string) {
  let arr: number[] = [];

  if (typeof x === "number") {
    arr[0] = x;
  }

  // in = 속성명 in 오브젝트자료
  // instanceof = 인스턴스 부모
}

// assertion 문법(타입 덮어쓰기)
// 용도
// 1. Narrowing 할 때
// 2. 무슨타입이 들어올지 100% 확실할 때
function c4(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}

// 문제 1
function q41(x: (number | string)[]){
  let clean : number[] = []
  
  x.map((a) => {
    clean.push(Number(a))
  })
  console.log(clean)

  // 정답
  // x.forEach((b) => {
  //   if (typeof b === "string") {
  //     clean.push(parseFloat(b));
  //   } else {
  //     clean.push(b);
  //   }
  // });
}

// 문제 2
let bok : {subject : string} = { subject : 'math' }
let kim : {subject : string[]} = { subject : ['science', 'english'] }
let lee : {subject : string[]} = { subject : ['art', 'korean'] }

function q42(x : {subject : string | string[]}) : string {
  if(typeof x.subject === 'string') {
    return x.subject
  } else if(Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1]
  } else {
    return 'x'
  }
}
