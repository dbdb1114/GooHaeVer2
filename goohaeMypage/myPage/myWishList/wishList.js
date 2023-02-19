'use strict'

// let wishChkAll = document.getElementsByName('wishChkAll'),
//     wishChk = document.getElementsByName('wishChk');

// console.log(wishChkAll);



let wishChk = document.getElementsByName("wishChk");
function allselect(allselect) {
    for (let i = 0; i < wishChk.length; i++) {
        wishChk[i].checked = allselect;
    }
}


let wlpdName = document.querySelector('.wlpdName'),
    p = document.querySelectorAll('.nmP');

wlpdName.addEventListener('mouseenter', function () {
    p[0].classList.add("hover");
    p[1].classList.add("hover");
});
wlpdName.addEventListener('mouseleave', function () {
    p[0].classList.remove("hover");
    p[1].classList.remove("hover");
});

let del = document.querySelector('.del');

del.addEventListener('mouseup', function () {
    for (let i = 0; i < wishChk.length; i++) {
        if (wishChk[i].checked) {
            wishChk[i].parentElement.parentElement.remove();
        }
    }
})