var Square1 = /** @class */ (function () {
    function Square1() {
    }
    Square1.addOne = function (param) {
        Square1.x += param;
    };
    Square1.printX = function () {
        console.log(Square1.x);
    };
    Square1.x = 10;
    Square1.y = 20;
    return Square1;
}());
Square1.addOne(3);
Square1.addOne(10);
Square1.printX();
var Square2 = /** @class */ (function () {
    function Square2(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square2.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style='position:relative;\n      top:".concat(a * 400, "px;\n      left:").concat(a * 400, "px;\n      width:").concat(this.width, "px;\n      height:").concat(this.height, "px;\n      background:").concat(this.color, "'></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square2;
}());
var squares = new Square2(30, 30, 'blue');
squares.draw();
squares.draw();
squares.draw();
squares.draw();
var Square3 = /** @class */ (function () {
    function Square3(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square3.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square3;
}());
var 네모 = new Square3(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
