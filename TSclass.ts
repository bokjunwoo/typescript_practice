class People {
  data = 0; // class 필드 값(constructor와 동일 역할)

  // TS constructor는 필드값에 어쩌구가 미리 있어야 this.어쩌구 가능
  name :string; 
  constructor() {
    this.name = 'bok'
  }
}

let person = new People();
// person.data = 0

// param의 경우
class People1 {
  name :string; 
  
  constructor(name :string) { // 복제되는게 항상 object이여서 return 타입을 지정할 이유는 없다
    this.name = name
  }

  // prototype 함수 생성
  func(name :string) {
    console.log('안녕' + name);
  }
}

let person1  = new People1('bok')
person1.func('bokjunwoo')

// 문제1
class Car {
  model :string;
  price :number;

  constructor(model :string, price :number) {
    this.model = model
    this.price = price
  }

  tax() :number {
    return this.price / 10
  }
}

let car = new Car('소나타', 3000)

// 문제2
class Word {
  num;
  str;

  constructor(...param: any[]) {
    let nums: number[] = [];
    let strs: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        strs.push(i);
      } else {
        nums.push(i);
      }
    });

    this.num = nums;
    this.str = strs;
  }
}
let obj1 = new Word('bok', 1, 2, 'kim')
