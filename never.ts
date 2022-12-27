// function return 값에 붙일 수 있는 never type
// 조건 1. return 값이 없어야 함
// 조건 2. endpoint 가 없어야 함
function func6() :never {
  // 에러발생코드
  throw new Error()

  // while(무한)
  while(true) {

  }
}

// never타입이 등장하는 경우
function func7(param : string) {
  if(typeof param === 'string') {

  } else {
    console.log(param) // 1. 뭔가 이상한 narrowing (있을 수 없는 일)
  }
}

// 2. 함수표현식은 return 타입이 자동으로 never
let func8 = function() {
  throw new Error()
}