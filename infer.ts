// 조건문으로 타입만들기
type IfType<T> = T;

let type1 : IfType<string>

// 파라미터로 string이 들어오면 string을 남기고 아니면 unknown을 남김

// 1. type if문은 삼항연산자로
type IfType2<T> = T extends string ? string : unknown;

let type2 : IfType2<string>
let type3 : IfType2<number>

// 퀴즈
type FirstItem<T> = T extends any[] ? T[0] : any

// infer 키워드 
type IfTyp3<T> = T extends infer R ? R : unknown; // infer R 왼쪽에서 타입을 추출
// 타입을 뽑는 이유
let type4 : IfType<string>

// 실용예제
type IfType4<T> = T extends (infer R)[] ? R : unknown;

// arr 내부의 타입만 뽑고 싶을 경우
type a = IfType4<string[]>

// 함수를 넣으면 return 타입만 뽑는다
type IfType5<T> = T extends ( () => infer R ) ? R : unknown;
type b = IfType5<() => void>