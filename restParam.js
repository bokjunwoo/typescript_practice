var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ...붙이면 rest parameter(여러 파라미터가 들어 올 수 있다는 뜻)
// 다른 파라미터 있으면 맨 뒤에만 사용가능
// 타입지정 :number[](숫자)
function func(num) {
    var a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        a[_i - 1] = arguments[_i];
    }
    console.log(a);
}
func(1, 4, 5, 2, true);
// ...spread operator 상식
var arr5 = [1, 2, 3];
var arr6 = [4, 5, 6];
var arr7 = __spreadArray(__spreadArray([], arr5, true), arr6, true); // ...은 괄호 벗겨주세요 문법이다
// destructuring 개념
var arr8 = ['안녕', 100]; // 이 자료들을 변수로 빼서 사용하려면
var newArr1 = arr8[0];
var newArr2 = arr8[1];
var _a = ['안녕', 100], variable1 = _a[0], variable2 = _a[1]; // destructuring
console.log(variable1); // '안녕'
console.log(variable2); // 100
var _b = { student: true, age5: 20 }, student = _b.student, age5 = _b.age5;
// 속성명을 맞춰야 한다
var obj5 = { student: true, age5: 20 };
function func1(a, b) {
    console.log(a, b);
}
func1(obj5.student, obj5.age5); // 이 방법을 destructuring으로 바꾸기
function func2(_a) {
    var student = _a.student, age5 = _a.age5;
    console.log(student, age5);
}
func2({ student: true, age5: 20 });
// 문제1
// 클래스형
var Problem1 = /** @class */ (function () {
    function Problem1() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.num = [];
        this.num = param;
    }
    Problem1.prototype.calculate = function () {
        var result = 0;
        this.num.forEach(function (i) {
            if (result < i) {
                result = i;
            }
        });
        return result;
    };
    return Problem1;
}());
var problem1 = new Problem1(1, 5, 6, 2, 8);
// 함수형
function calculate() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    var result = 0;
    param.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
// 문제2
function problem2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
function problem3(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log();
}
