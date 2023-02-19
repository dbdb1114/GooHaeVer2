'use strict';
const
    form = document.querySelector('form'),
    loginId = document.querySelector('#loginId'),
    loginPw = document.querySelector('#loginPw'),
    bodyInput = document.querySelector('.bodyInput'),
    button = document.querySelector('button'),
    p = document.querySelectorAll('p');

// console.log(loginId);
// console.log(loginPw);
// console.log(button);
console.log(p);

// ----아이 비번 경고 활성/비활성
function inputCheck() {
    if (loginId.value == "") {
        p[1].classList.remove('hidden');
        p[2].classList.add('hidden');
        loginId.classList.add('redInputBox');
        loginPw.classList.remove('redInputBox');
        return false;
    } else if(loginPw.value == "") {
        p[1].classList.add('hidden');
        p[2].classList.remove('hidden');
        loginId.classList.remove('redInputBox');
        loginPw.classList.add('redInputBox');
        return false;
    }
    form.submit();    
}

bodyInput.addEventListener('keydown', function (event) { //아이디 비밀번호 미입력시 엔터키 실행 방지
    if (event.keyCode === 13) {
        inputCheck();
    }
});

///------????아이디 입력후 왜안됨??
button.addEventListener('click', function(event){//아이디, 비밀번호 미입력시 로그인버튼 클릭 방지
    event.preventDefault();
    inputCheck();
});   

// ----아이디와 비밀번호 모두 입력시 로그인버튼 활성화
function validate() {
    if ((loginId.value && loginPw.value)) {
        // button.disabled = false;
        button.style.cursor = 'pointer';
        button.classList.add('buttonLogin');
    } else {
       

        // button.disabled = false;
        button.classList.remove('buttonLogin');
    }
}

bodyInput.addEventListener('keyup', validate);

