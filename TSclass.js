var People = /** @class */ (function () {
    function People() {
        this.data = 0; // class 필드 값(constructor와 동일 역할)
        this.name = 'bok';
    }
    return People;
}());
var person = new People();
// person.data = 0
// param의 경우
var People1 = /** @class */ (function () {
    function People1(name) {
        this.name = name;
    }
    // prototype 함수 생성
    People1.prototype.func = function (name) {
        console.log('안녕' + name);
    };
    return People1;
}());
var person1 = new People1('bok');
person1.func('bokjunwoo');
// 문제1
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car = new Car('소나타', 3000);
// 문제2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                strs.push(i);
            }
            else {
                nums.push(i);
            }
        });
        this.num = nums;
        this.str = strs;
    }
    return Word;
}());
var obj1 = new Word('bok', 1, 2, 'kim');
