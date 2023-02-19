'use strict';

const 
    body = document.querySelector('body'),
    infoForm = document.querySelector('.InfoForm'),
    idInput = infoForm.querySelector('.idInput'),
    nameInput = infoForm.querySelector('.nameInput'),
    pwInput = infoForm.querySelector('.pwInputWrap>input'),
    pwConfirmInput = infoForm.querySelector('.pwConfirmInputWrap>input'),
    [emailIdInput, emailDomainInput] = infoForm.querySelectorAll('.emailInput>input'),
    [midPhoneNum, lastPhoneNum] = infoForm.querySelectorAll(' .tellInputWrap>input:not(:first-of-type) '),
    emailCertificationBtn = infoForm.querySelector('.emailCertification'),
    emailSelectTag = infoForm.querySelector('.emailInput>select'),
    signUpSubmitBtn = infoForm.querySelector('.signUpSubmitBtn'),
    checkBox = infoForm.querySelectorAll('input[type=checkBox]');



const [usingServicePermitionContent, personalInfoPermitionContent] = infoForm.querySelectorAll('.emailGetRadio a'),
    [usingServicepermitionBtn, personalInfoPermitionBtn] = infoForm.querySelectorAll('.emailGetRadio>div>div>button');
console.log(usingServicepermitionBtn)
console.log(personalInfoPermitionBtn)

usingServicePermitionContent.addEventListener('click', function(e){
    e.preventDefault();
    e.target.nextElementSibling.style.display = 'flex'
    e.target.nextElementSibling.classList.add('empasized')
})

personalInfoPermitionContent.addEventListener('click', function(e){
    e.preventDefault();
    e.target.nextElementSibling.style.display = 'flex'
    e.target.nextElementSibling.classList.add('empasized')
})

usingServicepermitionBtn.addEventListener('click',function(e){
    e.preventDefault();
    e.target.parentNode.style.display = 'none'
})

personalInfoPermitionBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.target.parentNode.style.display = 'none'
})


emailCertificationBtn.classList.add('btnDisable');
signUpSubmitBtn.classList.add('btnDisable');

emailSelectTag.addEventListener('change',function () {
emailDomainInput.value = emailSelectTag.value;
})

checkBox[0].addEventListener('change', function (e){
    if(isId(idInput.value)&&
    isEmailDomain(emailDomainInput.value)&&
    isId(emailIdInput.value)&&
    isPassword(pwInput.value)&&
    isPassword(pwConfirmInput.value)&&
    isName(nameInput.value)&&
    isPhoneNumber(midPhoneNum.value)&&
    isPhoneNumber(lastPhoneNum.value)&&
    checkBox[0].checked == true&&
    checkBox[1].checked == true){
        signUpSubmitBtn.classList.remove('btnDisable')
    } else {
        signUpSubmitBtn.classList.add('btnDisable')
    }
})
checkBox[1].addEventListener('change', function (e){
    if(isId(idInput.value)&&
    isEmailDomain(emailDomainInput.value)&&
    isId(emailIdInput.value)&&
    isPassword(pwInput.value)&&
    isPassword(pwConfirmInput.value)&&
    isName(nameInput.value)&&
    isPhoneNumber(midPhoneNum.value)&&
    isPhoneNumber(lastPhoneNum.value)&&
    checkBox[0].checked == true&&
    checkBox[1].checked == true){
        signUpSubmitBtn.classList.remove('btnDisable')
    }  else {
        signUpSubmitBtn.classList.add('btnDisable')
    }
})

infoForm.addEventListener('keyup', function (e) {
    confirm(e.target)
    if(isId(idInput.value)&&
    isEmailDomain(emailDomainInput.value)&&
    isId(emailIdInput.value)&&
    isPassword(pwInput.value)&&
    isPassword(pwConfirmInput.value)&&
    isName(nameInput.value)&&
    isPhoneNumber(midPhoneNum.value)&&
    isPhoneNumber(lastPhoneNum.value)&&
    checkBox[0].checked == true&&
    checkBox[1].checked == true){
        signUpSubmitBtn.classList.remove('btnDisable')
    } else {
        signUpSubmitBtn.classList.add('btnDisable')
    }
})

function isEmailDomain(asValue) {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;;
    return regExp.test(asValue);
}

function isId(asValue) { //영문 대문자, 소문자, 숫자, 문자 사이 공백 및 특수문자 -_/,. 
    const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    if(asValue =="") return false;
    return regExp.test(asValue);
}

function isPassword(asValue) { //8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
    const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

function isPhoneNumber(asValue) {
    const regExp = /^\d{4}$/;
    return regExp.test(asValue);
}

function isCorrect(asValue) { //한글 영문
    const regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
    return regExp.test(asValue);
}

function isName(asValue) {
    const regExp = /^[가-힣]{2,4}$/;
    return regExp.test(asValue);
}

emailSelectTag.addEventListener('change',function (e) {
    let target = e.target.previousElementSibling;;

    let flag,
    infoGuide;

    infoGuide = e.target.parentNode.nextElementSibling;
    flag = isEmailDomain(target.value);
    inputEffect(target, flag, infoGuide);

    if(isEmailDomain(emailDomainInput.value) && isId(emailIdInput.value)){
        emailCertificationBtn.classList.remove('btnDisable')
    }else {
        emailCertificationBtn.classList.add('btnDisable')
    }
})

function confirm(target) {

    let flag,
        infoGuide;

    switch (target.className) {
        case 'idInput':
            infoGuide = target.nextElementSibling;
            flag = isId(target.value);
            inputEffect(target, flag, infoGuide)
            break;

        case 'emailIdInput':
            infoGuide = target.parentNode.nextElementSibling;
            flag = isId(target.value)
            inputEffect(target, flag, infoGuide);
            if(isEmailDomain(emailDomainInput.value) && isId(emailIdInput.value)){
                emailCertificationBtn.classList.remove('btnDisable')
            }else {
                emailCertificationBtn.classList.add('btnDisable')
            }
            break;
        case 'emailDomainInput':
            infoGuide = target.parentNode.nextElementSibling;
            flag = isEmailDomain(target.value);
            inputEffect(target, flag, infoGuide);
            if(isEmailDomain(emailDomainInput.value) && isId(emailIdInput.value)){
                emailCertificationBtn.classList.remove('btnDisable')
            }else {
                emailCertificationBtn.classList.add('btnDisable')
            }
            break;
        case 'idInput':
            infoGuide = target.nextElementSibling;
            flag = isId(target.value)
            inputEffect(target, flag, infoGuide);
            break;
        case 'pwInput':
            infoGuide = target.nextElementSibling;
            flag = isPassword(target.value)
            inputEffect(target, flag, infoGuide);
            if(!(pwConfirmInput.value == ''))
            {inputEffect(pwConfirmInput, flag && pwInput.value == pwConfirmInput.value ,pwConfirmInput.nextElementSibling);}
            break;
        case 'pwConfirmInput':
            infoGuide = target.nextElementSibling;
            flag = (pwInput.value == pwConfirmInput.value && isPassword(pwConfirmInput.value));
            inputEffect(target, flag, infoGuide);
            break;
        case 'midPhoneNum' :
            // infoGuide = target.parentNode.nextElementSibling;
            flag = isPhoneNumber(midPhoneNum.value);
            if(flag) target.style.border ='1px solid var(--PurpleBlue)';
            else target.style.border ='1px solid var(--CoralRed)';
            break;
        case 'lastPhoneNum':
            infoGuide = target.parentNode.nextElementSibling;
            flag = isPhoneNumber(midPhoneNum.value) && isPhoneNumber(lastPhoneNum.value)
            inputEffect(target, flag, infoGuide);
            break;
        case 'nameInput':
            infoGuide = target.nextElementSibling;
            flag = isName(target.value);
            inputEffect(target, flag, infoGuide);
            break;

        default: break;
    }
}

function inputEffect (target , flag, infoGuide) {
    if (flag) {
        target.style.border = '1px solid var(--PurpleBlue)'
        if( !target.className.includes('email') || (isEmailDomain(emailDomainInput.value) && isId(emailIdInput.value)) ) {
        infoGuide.style.visibility = 'visible';
        infoGuide.style.color = 'blue';
        infoGuide.innerHTML = '맞게 입력하셨습니다.'}
    } else {
        target.style.border = '1px solid var(--CoralRed)'
        if( !target.className.includes('email') ||  emailIdInput.value && emailDomainInput.value && (!isEmailDomain(emailDomainInput.value) || !isId(emailIdInput.value)) ) {
        infoGuide.style.visibility = 'visible';
        infoGuide.style.color = 'red';
        infoGuide.innerHTML = '다시 입력해주세요.'
    }}

}