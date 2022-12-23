// type 키워드
type StrType = string;

type Square = { color: string; width: number };

let square: Square = {
  color: "red",
  width: 100,
};

// interface
interface Square1 {
  color: string;
  width: number;
}

let square2: Square1 = {
  color: "red",
  width: 100,
};

// 퀴즈1
interface Student1 {
  name: string;
}
interface Teacher1 {
  name: string;
  age: number;
}
let student1: Student1 = { name: "bok" };
let teacher1: Teacher1 = { name: "bok", age: 20 };

// 장점
// 1. extends로 복사가능(위의 경우 중복되는 점이 있을 때 복사해서 사용)
interface Student2 {
  name: string;
}
interface Teacher2 extends Student2 {
  // 복사
  age: number;
}
let student2: Student2 = { name: "bok" };
let teacher2: Teacher2 = { name: "bok", age: 20 };

// type일 때도 &(intersection type)을 이용해 가능은 하다
type Animals = { name: string };
type Cat = { age: number } & Animals; // 두 타입을 전부 만족하는 타입이라는 뜻

// 중요한 차이점
// interface는 중복 선언 가능 / type은 중복선언 불가능
interface MyInfo {
  name: string;
}
interface MyInfo {
  age: number;
}
// -> MyInfo는 {name : string, age : number}인 object를 가진다

// 2. 외부 라이브러리를 사용하면서 추후에 타입에 더하는게 쉽다

// 3. extends 쓸 때 중복속성 발견하면 에러

// 4. & 쓸 때 중복속성이 발생할 경우 미리 에러를 띄어주지 않는다

// 문제1
interface Product {
  brand: string,
  serialNumber: number,
  model: string[]
}

let product:Product = { brand: "samsung", serialNumber: 1, model: ["TV", "phone"] };

// 문제2
interface Shopping {
  product: string,
  price: number
}

let shoppingBasket:Shopping[] = [{product : '청소기', price : 7000}, {product : '삼다수', price : 800}]

// 문제3
interface Shopping1 extends Shopping {
  card: boolean
}
let shoppingBasket1:Shopping1[] = [{product : '청소기', price : 7000, card : false}]

// 문제4
interface Obj {
  plus : (param1: number, param2: number) => number
  minus : (param1: number, param2: number) => number
}

let obj:Obj = {
  plus(param1, param2){
    return (param1 + param2)
  },

  minus(param1, param2) :number{
    return (param1 - param2)
  }
}

// class 이용
interface Obj1 {
  plus(): number
  minus(): number
}

class Func implements Obj1 {
  param1
  param2

  constructor(param1: number, param2: number) {
    this.param1 = param1
    this.param2 = param2
  }

  plus() {
    return (this.param1 + this.param2)
  }
  minus() {
    return (this.param1 - this.param2)
  }
}

let num = new Func(4000, 3000)

// 인터페이스 Button 정의
interface ButtonInterface {
  onInit():void;
  onClick():void;
}

// 클래스 Y9Button 인터페이스 Button 확장
class Y9Button implements ButtonInterface {

  width:number;
  height:number;
  
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  onInit(): void {
    
  }
  onClick(): void {
    
  }
  
  // [오류]
  // 'Y9Button' 클래스가 'Button' 인터페이스를 잘못 구현합니다.
  // 'onInit' 속성이 'Y9Button' 형식에 없습니다.

}