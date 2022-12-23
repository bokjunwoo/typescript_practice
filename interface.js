var square = {
    color: "red",
    width: 100,
};
var square2 = {
    color: "red",
    width: 100,
};
var student1 = { name: "bok" };
var teacher1 = { name: "bok", age: 20 };
var student2 = { name: "bok" };
var teacher2 = { name: "bok", age: 20 };
var product = { brand: "samsung", serialNumber: 1, model: ["TV", "phone"] };
var shoppingBasket = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var shoppingBasket1 = [{ product: '청소기', price: 7000, card: false }];
var obj = {
    plus: function (param1, param2) {
        return (param1 + param2);
    },
    minus: function (param1, param2) {
        return (param1 - param2);
    }
};
var Func = /** @class */ (function () {
    function Func(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    Func.prototype.plus = function () {
        return (this.param1 + this.param2);
    };
    Func.prototype.minus = function () {
        return (this.param1 - this.param2);
    };
    return Func;
}());
var num = new Func(4000, 3000);
// 클래스 Y9Button 인터페이스 Button 확장
var Y9Button = /** @class */ (function () {
    function Y9Button(width, height) {
        this.width = width;
        this.height = height;
    }
    Y9Button.prototype.onInit = function () {
    };
    Y9Button.prototype.onClick = function () {
    };
    return Y9Button;
}());
