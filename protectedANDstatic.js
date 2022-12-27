var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User2 = /** @class */ (function () {
    function User2() {
        this.x = 10;
        // private, protected 붙이면 class 안에서만 사용가능
        this.y = 10;
    }
    return User2;
}());
// class 복사하고 싶으면 extends붙이면 된다
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser;
}(User2));
// 정리
// protected : extends된 class는 사용가능, 자식들 사용 불가능
// private : extends된 class는 사용 불가능, 자식들 사용 불가능
var newUser = new NewUser();
// static키워드
var Static = /** @class */ (function () {
    function Static() {
        this.y = 10;
    }
    // 부모 class에 직접 부여됨(자식에서 안물려줌)
    // protected, private, public + static 가능하다
    Static.x = 10;
    return Static;
}());
var static = new Static();
// 활용예시
var User3 = /** @class */ (function () {
    function User3() {
        this.intro = User3.skill + '전문가';
    }
    User3.skill = 'ts';
    return User3;
}());
var meIntro = new User3();
console.log(meIntro); // 'ts 전문가'
User3.skill = 'js';
var yourIntro = new User3();
console.log(yourIntro); // 'js 전문가'
