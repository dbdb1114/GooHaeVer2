'use strict';

let checkbox = document.querySelectorAll('.checkbox');
function allselect(allselect) {
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = allselect;
    }
}


let wlpdName = document.querySelector('.wlpdName'),
    p = document.querySelectorAll('.nmP');

let del = document.querySelector('.del');

del.addEventListener('mouseup', function () {
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checkbox[i].parentElement.parentElement.remove();
        }
    }
})


let span = document.querySelectorAll('span');
console.log(span);


let addFillIn = document.querySelector('.addFillIn');
	console.log(location.href);
// 현재 페이지에 로드1
addFillIn.addEventListener('click', () => {
    open('./addAddress.html');
 
});