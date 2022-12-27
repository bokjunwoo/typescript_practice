class User2 {
  x = 10;

  // private, protected 붙이면 class 안에서만 사용가능
  protected y = 10
}

// class 복사하고 싶으면 extends붙이면 된다
class NewUser extends User2{
  // User2에 있는 private는 사용할 수 없다
  // protected는 사용이 가능하다 서로의 차이점
}

// 정리
// protected : extends된 class는 사용가능, 자식들 사용 불가능
// private : extends된 class는 사용 불가능, 자식들 사용 불가능

let newUser = new NewUser();

// static키워드
class Static {
  // 부모 class에 직접 부여됨(자식에서 안물려줌)
  // protected, private, public + static 가능하다
  static x = 10;
  y = 10;
}

let static = new Static();

// 활용예시
class User3 {
  static skill = 'ts'
  intro = User3.skill + '전문가'
}

let meIntro = new User3()
console.log(meIntro) // 'ts 전문가'

User3.skill = 'js'
let yourIntro = new User3()
console.log(yourIntro) // 'js 전문가'