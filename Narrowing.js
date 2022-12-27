function func3(a) {
    // if문을 하나로 중릴 수 있는 방법
    // 1. &&연산자로 null, undefined 타입 체크하기
    if (a && typeof a === "string") {
        // a가 undefined면 if문 실행x string이면 실행
    }
}
function func4(animal) {
    // typeof 연산자는 number, string, boolean object 이런식으로만 판정 가능
    // 2. in 키워드로 object narrowing 가능 (속성명 in 오브젝트자료)
    if ('swim' in animal) { // Fish 타입 검사
        animal.swim;
    }
}
// 3. instanceof 연산자로 object narrowing 가능
// object 두개가 비슷하면 부모class가 누준지 물어봐서 narrowing 가능
var date = new Date();
if (date instanceof Date) {
}
// object 타입이 둘이 비슷하게 생겨서 2번 불가능, 부모가 없어서 3번도 불가능
// 4. literal type 강제로 만들어 두기
function func5(x) {
    if (x.wheel === '4개') {
    }
}
