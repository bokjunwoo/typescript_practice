// 객체지향언어같은 문법도 제공함
// public, private, protected, static 키워드
var User = /** @class */ (function () {
    function User(name) {
        this.name = name + this.familyName;
    }
    // 자식들이 familyName을 바꾸고 싶으면
    // 1. class안에 familyName 변경함수 제작
    // 2. 자식들이 사용 (user1.changeName())
    User.prototype.changeName = function () {
        this.familyName = 'kim';
    };
    return User;
}());
var user1 = new User('junwoo');
user1.name = 'bok';
// (에러) user1.age = 'kim'
user1.changeName();
