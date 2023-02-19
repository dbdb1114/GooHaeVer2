'use srtict';


// -------------수량 변동에 따른 상품가격

const resultElement = document.getElementById('result');
const plusImg = document.querySelector(".plusImg"),
    equalImg = document.querySelector(".equalImg"),
    [selectedProductOrderBtn, allProductOrderBtn] = document.querySelectorAll('.orderButtonBox>a');
let checkbox = document.querySelectorAll('.checkbox');
let productPrice = document.querySelectorAll('.productPrice');
productPrice[0].textContent = `${checkbox[0].value}원`;

function count(type) {
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;

    // productPrice.textContent = `${parseInt(checkbox.value)}원`
    // 더하기/빼기
    if (type === 'plus') {
        number = parseInt(number) + 1;
        // productPrice+=parseInt(checkbox[0].value);
    } else if (type === 'minus') {
        if (number <= 1) {
            number = 1
        } else {
            number = parseInt(number) - 1;
            // productPrice-=parseInt(checkbox[0].value);
        }
    }
    // 결과 출력
    resultElement.innerText = number;
    // productPrice[0].value=parseInt(checkbox[0].value) * number;
    productPrice[0].textContent = `${(parseInt(checkbox[0].value) * number)}원`;

    totals.innerHTML =`<strong>총 상품가격: ${parseInt(checkbox[0].value) * number}원</strong>`;
    plusImg.innerHTML =`<strong>배송비 : 3000원</strong>`;
    equalImg.innerHTML =`<strong>총 상품가격: ${(parseInt(checkbox[0].value) * number) +3000 }원</strong>`
    // Calculator();
}

// 제품명 호버------------------------------------------------
let cartName = document.querySelector('.cartName'),
     cartNameP = document.querySelector('.cartNameP');

cartName.addEventListener('mouseenter', function () {
    cartNameP.classList.add("hover");
});

cartName.addEventListener('mouseleave', function () {
    cartNameP.classList.remove("hover");
});

// 총상품가격------------------------------------------------------
let totals = document.querySelector(".totals");

function Calculator() {
    // count();
    console.log(equalImg)
    let tot = 0;

    for (let i = 0 ; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            // tot += parseInt(checkbox[i].value);
            tot += parseInt(productPrice[i].textContent);
        }else {

        }
    }

    totals.innerHTML = `<strong>총 상품가격: ${tot}원</strong>`;
    plusImg.innerHTML = '<strong>배송비 3000 원</strong>';
    equalImg.innerHTML = `<strong> 총 주문금액 ${tot + 3000} 원 </strong>`;

    if(checkbox[0].checked == false){
        totalPriceInner.style.visibility='hidden'
        selectedProductOrderBtn.classList.add('btnDisabled');
        allProductOrderBtn.classList.add('btnDisabled');
    } else {
        totalPriceInner.style.visibility='visible'
        selectedProductOrderBtn.classList.remove('btnDisabled');
        allProductOrderBtn.classList.remove('btnDisabled');
    }
}

function selectAll(selectAll) {
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = selectAll;
    }
}




// 삭제버튼------------------------------------------

let del = document.querySelector('.del'),
    totalPriceInner=document.querySelector('.totalPriceInner');

del.addEventListener('mouseup', function () {
    del.parentElement.parentElement.remove();
    totalPriceInner.style.visibility='hidden' 
});