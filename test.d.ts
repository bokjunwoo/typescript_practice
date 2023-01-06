// 1. 타입정의 보관용 파일
export type Age1 = number

// 2. 타입 레퍼런스 생성하고 싶을 경우
// tsconfig.json에 "declaration" :true 옵션을 사용

// 글로벌 모듈이 아니다 export 해야한다

// d.ts 파일을 글로벌 모듈로 만드는 법
// tsconfig.json에 "typeRoots": ["./types"] 폴더명 아무거나(폴더안에 있는 타입은 글로벌로 사용 가능하다)
// common 폴더를 만들고 그 안에 정의해야 한다