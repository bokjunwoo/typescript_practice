// arr 입력하면 첫 자료 리턴해주는 함수
function func10(x :unknown[]) {
  return x[0]
}

let aG = func10([4, 2])

// (에러) console.log(aG + 1)
// type이 unknown이기 때문

// 해결1. narrowing, as 사용(귀찮음)
// 해결2. Generic 함수 만들기(파라미터로 타입을 입력하는 함수)
function func11<MyType>(x :MyType[]) :MyType {
  return x[0]
}

let bG = func11<number>([4 ,2])
console.log(bG + 1)
// 장점 : 확장성이 조금 있다, 매번 다른 타입 입력가능
let cG = func11<string>(['4', '2'])

// 예시1(에러가 나는 이유)
function func12<MyType extends number>(x :MyType){
  // return x - 1 -> MyType에 어떤 값이 들어올지 몰라 에러를 나타냄

  // 해결방법 extends -> MyType이 우측에 있는 속성을 가지고 있는지 확인

  return x - 1
}

let dG = func12<number>(100)

// 커스텀 타입으로도 제한이 가능
interface LengthCheck {
  length : number
}

function func13<MyType extends LengthCheck>(x : MyType){
  return x.length
}

// 숙제 1
function homework1<MyType extends string | string[]>(x :MyType) :number{
  return x.length
}

homework1<string>('hello')
homework1<string[]>(['bok', 'jun', 'woo'])

// 숙제 2
interface AnimalType {
  name : string;
  age : number
}

let animalData = '{"name" : "dog", "age" : 1}'

function homework2<MyType>(data :string) :MyType{
  return JSON.parse(data)
}

let result = homework2<AnimalType>(animalData)

// 숙제 3
class Person1<MyType extends string | number | string[]>{
  name;

  constructor(a:MyType){
    this.name = a;
  }
}

let aP = new Person1<string>('bok')
aP.name