// 함수와 methods에 type alias 지정하는 법
// 파라미터는 스트링만 들어올 수 있으며 넘버를 리턴(함수선언식)
function l71(a) {
    return 1;
}
// 함수 type alias 부착하려면 함수표현식 사용
var l72 = function () {
    return 1;
};
// 오브젝트 안에 함수 만들기
var l73 = {
    name: "bok",
    plusOne: function () { },
};
l73.plusOne();
// 오브젝트 안의 함수 타입지정 방법
// 파라미터 하나는 number return 값은 number
var l74 = {
    name: "bok",
    // 파라미터가 있으면 타입지정 필수
    plusOne: function (a) {
        return a + 1;
    },
    // 또다른 함수 만드는 방법
    changeName: function () {
        console.log("안녕");
    },
};
l74.plusOne(1);
l74.changeName();
// 콜백함수 개념
// 함수안에 함수를 넣고 싶을 때
function l75(a) {
    a();
}
function l76() { }
l75(l76);
var cutZero = function (a) {
    var result = a.replace(/^0+/, "");
    return result;
};
function removeDash(a) {
    var result = a.replace(/-/g, "");
    return parseFloat(result);
}
// 문제3
function q73(a, cutZero, removeDash) {
    var result = cutZero(a);
    var result2 = removeDash(result);
    console.log(result2);
}
