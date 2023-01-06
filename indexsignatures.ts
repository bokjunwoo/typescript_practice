interface UserType {
  name : string,
  age : string,
  location : string
}

let userIndex: UserType = {
  name : 'bok',
  age : '25',
  location : 'seoul'
}

// 모든 속성은 string이라고 타입지정
interface UserAll {
  [key :string] : string | number
}

let userIndex1: UserAll = {
  name : 'bok',
  age : 25,
  location : 'seoul'
}

// index signature와 중복되는 속성인 경우
interface UserType1 {
  // (에러) age : number,
  [key :string] : string
}

// 해결
interface UserType2 {
  age : number,
  [key :string] : string | number
}

// 속성 이름이 숫자인 경우
interface Numbers {
  [key :number] : string
}

let numbers: Numbers = {
  0 : 'bok',
  1 : '25'
}

numbers[0] // arr와 유사

// object 자료 타입 지정
interface Css  {
  'font-size' : {
    'font-size' : {
      'font-size' : number
    }
  }
}

let css :Css = {
  'font-size' : {
    'font-size' : {
      'font-size' : 10
    }
  }
}

// recursive 하게 타입 만드는 방법
interface CssType {
  'font-size': CssType | number
}

let cssType :CssType = {
  'font-size' : {
    'font-size' : {
      'font-size' : 10
    }
  }
}

// 숙제 1
interface ObjIndex {
  [key: string] : string | number
}

let objIndex: ObjIndex = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

// 숙제 2
interface ObjIndex2 {
  'font-size': number,
  [key: string] : number | ObjIndex2
}

let objIndex2: ObjIndex2 = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}