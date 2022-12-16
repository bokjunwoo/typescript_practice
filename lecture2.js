// 타입을 미리 정하기 애매할 때(union type, any, unknown)
// 문자 or 숫자 들어올 수 있는 변수 union type
var a = 123;
a = 'kim';
// arr
var b = [1, '2', 3];
// object
var c = { a: '123' };
// any 타입 = 모든 자료형 허용해줌(타입실드 해제 문법)
var d;
d = 123;
d = '123';
// unknown 타입 = 모든 자료형 허용해줌(any보다 안전)
// 간단한 수학연산도 타입이 일치해야함
var e;
e = 123;
e = '123';
// (에러) let variable1 : string = e
// (에러) e - 1 
// 타입이 일치하지만 +1이 안되는 이유
var num1;
// (에러) num1 + 1
// string +1 -> 허용
// number +1 -> 허용
// string | number +1 -> 불가
// 변수가 일치한데 안되는 이유(unknown)
var num2 = 1;
// (에러) num2 + 1;
// 숫자타입이여야 숫자처럼 연산을 해줌
// 문제 1
var user = 'bok';
var userAge = undefined;
var marryed = false;
var junwoo = [user, age, marryed];
// 문제 2
var school = {
    score: [100, 90, 80],
    teacher: "bok",
    friend: "kim",
};
school.score[4] = false;
school.friend = ['lee', school.teacher];
