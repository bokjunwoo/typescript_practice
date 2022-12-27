// ...붙이면 rest parameter(여러 파라미터가 들어 올 수 있다는 뜻)
// 다른 파라미터 있으면 맨 뒤에만 사용가능
// 타입지정 :number[](숫자)
function func(num:number, ...a:(number | boolean)[]){
  console.log(a)
}
func(1, 4, 5, 2, true);

// ...spread operator 상식
let arr5 = [1, 2, 3]
let arr6 = [4, 5, 6]
let arr7 = [...arr5, ...arr6] // ...은 괄호 벗겨주세요 문법이다

// destructuring 개념
let arr8 = ['안녕', 100] // 이 자료들을 변수로 빼서 사용하려면
let newArr1 = arr8[0]
let newArr2 = arr8[1]

let [variable1, variable2] = ['안녕', 100] // destructuring
console.log(variable1) // '안녕'
console.log(variable2) // 100

let {student, age5} = { student : true, age5 : 20 }
// 속성명을 맞춰야 한다

let obj5 = { student : true, age5 : 20 }

function func1(a:boolean, b:number){
  console.log(a, b)
}

func1(obj5.student, obj5.age5) // 이 방법을 destructuring으로 바꾸기

function func2({ student, age5 }:{student :boolean, age5 : number}) {
  console.log(student, age5);
}

func2({ student: true, age5: 20 });

// 문제1

// 클래스형
class Problem1 {
  num:number[] = []

  constructor(...param:number[]){
    this.num = param
  }

  calculate() :number {
    let result = 0;
    this.num.forEach((i) => {
      if(result < i) {
        result = i
      }
    })
    return result
  }
}

let problem1 = new Problem1(1, 5, 6, 2, 8)

// 함수형
function calculate(...param : number[]) {
  let result = 0;
    param.forEach((i) => {
      if(result < i) {
        result = i
      }
    })
    return result
}

// 문제2

function problem2({user, comment, admin}:{user : string, comment : number[], admin : boolean}) :void{
  console.log(user, comment, admin)
}

// 문제3
type Pro = (string | number | boolean)[]
function problem3([a, b, c]:Pro){
  console.log()
}