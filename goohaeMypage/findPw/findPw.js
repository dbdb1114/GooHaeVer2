'use strict';
const
    form = document.querySelector('form'),
    span = document.querySelectorAll('span'),
    // input = document.querySelectorAll('input'),
    fpId = document.querySelector('#fpId'),
    fpName = document.querySelector('#fpName'),
    fpFw = document.querySelector('#fpFw'),
    select = document.querySelector('select'),
    fpMobile = document.querySelectorAll('.fpMobile'),
    button = document.querySelector('button');
    
// --- 미입력 경고
function fpIdCheck() {
    if (fpId.value == "") {
        span[0].classList.remove('hidden');
        fpId.classList.add('redInputBox');
        return false;
    } else {
        span[0].classList.add('hidden');
        fpId.classList.remove('redInputBox');
        return true;
    }
}

function fpNameCheck() {
    if (fpName.value == "") {
        span[1].classList.remove('hidden');
        fpName.classList.add('redInputBox');
        return false;
    } else {
        span[1].classList.add('hidden');
        fpName.classList.remove('redInputBox');
        return true;
    }
}

function fpMobileCheck() {
    if ((fpMobile[1].value == "") && (fpMobile[2].value == "")) {
        span[2].classList.remove('hidden');
        for (let i = 0; i < fpMobile.length; i++) {
            fpMobile[i].classList.add('redInputBox');
        }
        return false;
    } else if (!((fpMobile[1].value.length == "4") && (fpMobile[2].value.length == "4"))) {
        span[2].classList.remove('hidden');
        for (let i = 0; i < fpMobile.length; i++) {
            fpMobile[i].classList.add('redInputBox');
        }
        span[3].classList.remove('nonDisplay');
        return false;
    } else {
        span[2].classList.add('hidden');
        for (let i = 0; i < fpMobile.length; i++) {
            fpMobile[i].classList.remove('redInputBox');
        }
        return true;
    }
}

function fpFwCheck() {
    if (fpFw.value == "") {
        span[4].classList.remove('hidden');
        fpFw.classList.add('redInputBox');
        select.classList.add('redInputBox');
        return false;
    } else {
        span[4].classList.add('hidden');
        fpFw.classList.remove('redInputBox');
        select.classList.remove('redInputBox');
        return true;
    }
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        // e.preventDefault();
        fpIdCheck();
        fpNameCheck();
        fpMobileCheck();
        fpFwCheck();

    };
});

button.addEventListener('click', function (e) {
    e.preventDefault();
    fpIdCheck();
    fpNameCheck();
    fpMobileCheck();
    fpFwCheck();
    if(fpIdCheck() && fpNameCheck() && fpMobileCheck()&&fpFwCheck() ){
        form.submit();
    }
});

function validate() {
    if (fpId.value && fpName.value &&fpFw.value && fpMobile[1].value.length == "4"&&fpMobile[2].value.length == "4") {
        button.style.cursor = 'pointer';
        button.classList.add('buttonLogin');
    } else {
        button.classList.remove('buttonLogin');
    }
}

form.addEventListener('keyup', validate);
