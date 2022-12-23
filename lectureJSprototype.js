function machine() {
  this.q = 'consume',
  this.w = 'snowball'
}

// prototype에 뭔가 추가하면 자식들이 사용이 가능
machine.prototype.name = 'bok'

const nunu = new machine() // nunu의 object는 q와 w만 가지고 있지만 nunu.name으로 'bok'을 가져올 수 있다(상속기능, 부모만 가지고 있다)

// JS에서 object에서 자료뽑을 때 일어나는 일
nunu.name // nunu가 name을 가지고 있지 않으면 -> nunu의 부모유전자를 본다
// prototype chain
// 1. 직접 자료를 가지고 있으면 그 자료를 출력
// 2. 없으면 부모유전자에서 해당 자료를 출력