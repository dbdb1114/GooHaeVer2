'use strict';

let addAddressWrap = document.querySelector('.addAddressWrap'),
	form = document.querySelector('form'),
	ul=document.querySelector('ul'),
	input = document.querySelectorAll('input'),
	span = document.querySelectorAll('span'),
	addCancel = document.querySelector('.addCancel'),
	button = document.querySelector('button');

function ad() {
	if (input[0].value == "") {
		span[0].classList.remove('hidden');
		return false;
	} else {
		span[0].classList.add('hidden');
		return true;
	}
}

function adNm() {
	if (input[1].value == "") {
		span[1].classList.remove('hidden');
		return false;
	} else {
		span[1].classList.add('hidden');
		return true;
	}
}

function adIp() {
	if (input[2].value == "" || input[3].value == "" || input[4].value == "") {
		span[2].classList.remove('hidden');
		return false;
	} else {
		span[2].classList.add('hidden');
		return true;
	}
}

function adPhone() {
	if (input[8].value == "" || input[9].value == "") {
		span[7].classList.remove('hidden');
		return false;
	} else {
		span[7].classList.add('hidden');
		return true;
	}
}


document.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		ad();
		adNm();
		adIp();
		adPhone();
		if (ad() && adNm() && adIp() && adPhone()) {
			form.submit();
			addAddressWrap.classList.add('hidden');
		}
	}
});

button.addEventListener('click', function (e) {
	e.preventDefault();
	ad();
	adNm();
	adIp();
	adPhone();
	if (ad() && adNm() && adIp() && adPhone()) {
		form.submit();
		window.closed();
	}
});

