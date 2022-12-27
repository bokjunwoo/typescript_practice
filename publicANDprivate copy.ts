// 객체지향언어같은 문법도 제공함
// public, private, protected, static 키워드
class User {
  // publick 키워드(모든 자식들이 이용가능하다) 생략해도 기본 값이다, 함수에도 사용가능
  public name : string;

  // private 키워드(class 안에서만 수정, 이용가능하다)
  private familyName : string;

  constructor(name : string) {
    this.name = name + this.familyName
  }

  // 자식들이 familyName을 바꾸고 싶으면
  // 1. class안에 familyName 변경함수 제작
  // 2. 자식들이 사용 (user1.changeName())
  changeName() {
    this.familyName = 'kim'
  }
}

let user1 = new User('junwoo')
user1.name = 'bok'
// (에러) user1.age = 'kim'
user1.changeName()
