import { type } from "os"

interface KeyOf {
  name : string,
  age : number
}

// key값을 전부 가져오는 keyof
type Keys = keyof KeyOf
let change :Keys = 'name'

// index signature에 keyof 사용하면
interface IndexKey {
  [key : string] : number
}

type IndexKeys = keyof IndexKey
let change2 : IndexKeys = 'age'


// 전부 string으로 바꾸려면
type CarType = {
  color : boolean,
  model : boolean
}

// 타입 변환기 만들기
type TypeChanger<T> = {
  [key in keyof T] :string
}

type newType = TypeChanger<CarType>

