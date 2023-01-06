let dog:(string | boolean)[] = ['dog', true]

// 첫 자료는 무조건 string 두번째 자료는 무조건 boolean이 들어오는 경우 : tupletype
let cat: [string, boolean] = ['cat', true]

// arr
function tuple(...x: [number, string]){
  console.log(x)
}
tuple(1, '2')

// arr 합칠 때
let arrO = [1, 2, 3]
let arrT:[number, number, ...number[]] = [4, 5, ...arrO] // 경우 타입지정 :[number, number, ...number[]]

// 숙제 1
let hw1: [string, number, boolean] = ['coke', 2000, true]

// 숙제 2
let hw2: [string, number, ...boolean[]] = ['coke', 2000, true, false, false, true]

// 숙제 3
function hw3(...rest :[string, boolean, (string | number)[]]) {

}

// 숙제 4
function hw4(...rest :(string| number)[]) :[string[], number[]]{
  let result :[string[], number[]] =[[], []];

  rest.forEach((a) => {
    if (typeof a === 'string') {
      result[0].push(a)
    } else {
      result[1].push(a)
    }
  })

  return result
}
hw4('a', 1, 2, 'b')