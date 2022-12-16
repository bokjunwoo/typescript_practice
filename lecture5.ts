// 타입도 변수에 담아 쓰세요 type 키워드 써서 & readonly

// type alias 만드는 법
type Animal = string | number | undefined;

let animal1 : Animal = 123;

// 오브젝트 경우 (대문자)
type Animal2 =  { name: string; age: number }

let animal2: Animal2 = { name: "bok", age: 24 };

// const 경우
const region = { region: "seoul" };
region.region = 'busan' // 가능

// const 경우 typescript
type Boy = {
  // readonly 읽기전용 (자료수정 막을 수 있음 / 타입스크립트에서만 에러발생)
  readonly name : string
}

const boy: Boy = {
  name : 'bok'
}

// type 합치기
type Name = string;
type Age = number;

type Person = Name | Age;

// 오브젝트 경우 & 연산자로 합치기 extend
type PositionX = { x: number };
type PositionY = { y: number };

type NewPosition = PositionX & PositionY;

let position: NewPosition = { x: 10, y: 10 };

// 문제 1 (불가능)

// 문제 2
type Q52 = {
  color? : string,
  size : number,
  readonly position : number[]
}

// 문제 3
type Q53 = {
  name: string;
  phone: number;
  email: string;
};

// 문제 4
type Q54 = { adult: boolean };

type NewQ = Q53 & Q54;
