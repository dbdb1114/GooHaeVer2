'use strict';
const
    form = document.querySelector('form'),
    span = document.querySelectorAll('span'),
    // input = document.querySelectorAll('input'),
    nonMemberName = document.querySelector('#nonMemberName'),
    nmMobile = document.querySelectorAll('.nmMobile'),
    nonMemberEmail = document.querySelector('#nonMemberEmail'),
    button = document.querySelector('button');

// console.log(input);

console.log(span);

// console.log(button);
// console.log(p);

// --- 미입력 경고
function nonMemberNameCheck() {
    if (nonMemberName.value == "") {
        span[0].classList.remove('hidden');
        nonMemberName.classList.add('redInputBox');
        return false;
    } else {
        span[0].classList.add('hidden');
        nonMemberName.classList.remove('redInputBox');
        return true;
    }
}


function nmMobileCheck() {
    if ((nmMobile[1].value == "") && (nmMobile[2].value == "")) {
        span[1].classList.remove('hidden');
        for (let i = 0; i < nmMobile.length; i++) {
            nmMobile[i].classList.add('redInputBox');
        }
        return false;
    } else if (!((nmMobile[1].value.length == "4") && (nmMobile[2].value.length == "4"))) {
        span[1].classList.remove('hidden');
        for (let i = 0; i < nmMobile.length; i++) {
            nmMobile[i].classList.add('redInputBox');
        }
        span[2].classList.remove('nonDisplay');
        return false;
    } else {
        span[1].classList.add('hidden');
        for (let i = 0; i < nmMobile.length; i++) {
            nmMobile[i].classList.remove('redInputBox');
        }
        return true;
    }
}

function nonMemberEmailCheck() {
    if (nonMemberEmail.value == "") {
        span[3].classList.remove('hidden');
        nonMemberEmail.classList.add('redInputBox');
        return false;
    } else {
        span[3].classList.add('hidden');
        nonMemberEmail.classList.remove('redInputBox');
        return true
    }
}



document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        nonMemberNameCheck();
        nmMobileCheck();
        nonMemberEmailCheck();
        if (nonMemberNameCheck() && nmMobileCheck() && nonMemberEmailCheck()) {
            form.submit();
        }
    }
});


button.addEventListener('click', function (event) {
    event.preventDefault();
    nonMemberNameCheck();
    nmMobileCheck();
    nonMemberEmailCheck();
    if (nonMemberNameCheck() && nmMobileCheck() && nonMemberEmailCheck()) {
        form.submit();
    }
});




function validate() {
    if (nonMemberName.value && nonMemberEmail.value && nmMobile[1].value.length == "4" && nmMobile[2].value.length == "4") {
        // button.disabled = false;
        button.style.cursor = 'pointer';
        button.classList.add('buttonLogin');
    } else {
        // button.disabled = true;
        button.classList.remove('buttonLogin');
    }
}

form.addEventListener('keyup', validate);
