'use strict';

const
    form = document.querySelector('form'),
    span = document.querySelectorAll('span'),
    input = document.querySelectorAll('input'),
    fiName = document.querySelector('#fiName'),
    fiEmail = document.querySelector('#fiEmail'),
    select = document.querySelector('select'),
    fiMobile = document.querySelectorAll('.fiMobile'),
    button = document.querySelector('button');

// --- 미입력 경고 함수들
function fiNameCheck() {
    if (fiName.value == "") {
        span[0].classList.remove('hidden');
        fiName.classList.add('redInputBox');
        return false;
    } else {
        span[0].classList.add('hidden');
        fiName.classList.remove('redInputBox');
        return true;
    }
}

function fiEmailCheck() {
    if (fiEmail.value == "") {
        span[1].classList.remove('hidden');
        fiEmail.classList.add('redInputBox');
        select.classList.add('redInputBox');
        return false;
    } else {
        span[1].classList.add('hidden');
        fiEmail.classList.remove('redInputBox');
        select.classList.remove('redInputBox');
        return true;
    }
}

function fiMobileCheck() {
    if ((fiMobile[1].value == "") && (fiMobile[2].value == "")) {
        span[2].classList.remove('hidden');
        for (let i = 0; i < fiMobile.length; i++) {
            fiMobile[i].classList.add('redInputBox');
        }
        return false;
    } else if (!((fiMobile[1].value.length == "4") && (fiMobile[2].value.length == "4"))) {
        span[2].classList.remove('hidden');
        span[3].classList.remove('nondisplay');
        for (let i = 0; i < fiMobile.length; i++) {
            fiMobile[i].classList.add('redInputBox');
        }
        return false;
    } else {
        span[2].classList.add('hidden');
        for (let i = 0; i < fiMobile.length; i++) {
            fiMobile[i].classList.remove('redInputBox');
        }
        return true;
    }
}
// 버튼 누를때 각각의 input 조건을 충족하지 못할경우 경고 활성화
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        // e.preventDefault();
        fiNameCheck();
        fiEmailCheck();
        fiMobileCheck();
        if(fiNameCheck() && fiEmailCheck() && fiMobileCheck()){
            form.submit();
        }
    };
});

// 버튼 클릭시 각각의 input 조건을 충족하지 못할경우 경고 활성화
button.addEventListener('click', function (e) {
    e.preventDefault();
    fiNameCheck();
    fiEmailCheck();
    fiMobileCheck();
    if(fiNameCheck() && fiEmailCheck() && fiMobileCheck()){
        form.submit();
    }
});

// 전부 입력시 로그인버튼 색깔 변경
function validate() {
    if (fiName.value && fiEmail.value&& fiMobile[1].value.length == "4"&&fiMobile[2].value.length == "4") {
        button.style.cursor = 'pointer';
        button.classList.add('buttonLogin');
    } else {
        button.classList.remove('buttonLogin');
    }
}

form.addEventListener('keyup', validate);
