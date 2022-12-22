const nunu = {
  q: 'consume',
  w: 'showball'
}

const garen = {
  q: 'strike',
  w: 'courage'
}

// JS class 문법으로 변환(비슷한 object많이 만들일이 있을 경우 사용하면 좋다)

// 예전 문법
function machine() {
  this.q = 'consume', // 새로 생성되는 object에 추가해주세요
  this.w = 'snowball'
  // this : machine로 부터 새로 생성되는 object (instance)
}

// 새로운 object를 뽑고 싶으면
new machine()

const nunu1 = new machine()
const garen1 = new machine() // -> 위와 같은 object를 만들어준다

// 해결방법(함수의 파라미터)
function machine1(param) {
  this.q = param,
  this.w = 'snowball'
}

const nunu2 = new machine1('consume');
const garen2 = new machine('strike');

// es6 문법
class machine2 {
  constructor(param) {
    this.q = param;
  }
}
new machine2() // 새로운 object 생성