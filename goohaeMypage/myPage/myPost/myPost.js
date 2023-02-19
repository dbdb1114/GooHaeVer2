'use strict';

let postSubject = document.querySelector('.postSubject');
let postText = document.querySelector('.postText');
console.log('postSubject')

postSubject.addEventListener('click', function (e) {
    e.preventDefault();
    if(!(postText.classList.contains('nondisplay'))){
        postText.classList.add('nondisplay');
    } else {
        postText.classList.remove('nondisplay');
    }
})

