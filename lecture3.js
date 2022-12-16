// 함수에 타입 지정하는 법 & void 타입
function aa(x) {
    return x * 2;
}
aa(6);
// void 타입 (return이 없을 때)
function bb(x) {
    1 + 1;
}
bb(2);
// (에러) bb() -> 파라미터 입력을 해야함
// 파라미터가 옵션일 경우 ?:타입 -> undefined와 같음 즉 number | undefined
function cc(x) { }
cc();
// 이 함수에서 에러가 발생하는 이유
function dd(x) {
    // (에러) console.log(x + 1) -> 숫자 타입을 엄격히 검사
}
// return에 방지장치를 주고 싶을 때 void 타입
function ee(x) {
    // (에러) return x * 2
}
// 문제 1
function q1(x) {
    if (x) {
        console.log(x);
    }
    else {
        console.log('입력하지 않음');
    }
}
// 문제 2
function q2(x) {
    if (x) {
        x = x.toString();
        console.log(x.length);
    }
    else {
        console.log('잘못입력');
    }
}
// 정답
function a2(x) {
    return x.toString().length;
}
// 문제 3
function q3(월소득, 집보유, 매력점수) {
    var score = 0;
    score = +월소득;
    if (집보유 === true) {
        score += 500;
    }
    if (매력점수 === "상") {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
