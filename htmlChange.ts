// 타입스크립트로 html 변경과 조작할 때 주의점
// document.getElementById()

let title = document.querySelector('#title');
// 불가 title.innerHTML = '변경'
// type이 Element | null

// 해결방법 -> narrowing
if(title !== null) {
  title.innerHTML = '변경'
}

// narrowing 방법
// 1. instanceof 연산자 (가장 많이 사용)
// 맞으면 ture를 리턴
if(title instanceof Element) {
  title.innerHTML = '변경'
}

// 2. as로 사기치기
let title2 = document.querySelector('#title') as Element

// 3. 오브젝트에 붙이는 ?
let title3 = document.querySelector('#title');
// 있으면 출력 없으면 undefined
if(title3?.innerHTML !== undefined){
  title3.innerHTML = '변경'
}

// 4. strict 모드 끄기

// <a>
let link = document.querySelector('.link');
// <a>에 필요한 정확한 타입명이 있음
if(link instanceof HTMLAnchorElement){
  link.href = 'https://kakao.com'
}

// <button> addEventListener 사용
let btn = document.querySelector('#btn');
btn?.addEventListener('click', () => {

})

// 문제 1
let image = document.querySelector('#image');
if(image instanceof HTMLImageElement) {
  image.src = 'new.jpg';
}

// 문제 2
let link2 = document.querySelectorAll('.link2');
link2.forEach((a) => {
  if(a instanceof HTMLAnchorElement) {
    a.href = 'https://kakao.com'
  }
})