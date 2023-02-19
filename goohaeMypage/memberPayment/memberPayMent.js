"use strict";

const main = document.querySelector("main"),
  requiredInputTagWrap = main.querySelectorAll(".MemPayOrderInfo"), // 필수정보 입력 묶음
  [
    memPayOrderName,
    firstPhoneNum,
    secondPhoneNum,
    thirdPhoneNum,
    postNum,
    basicAddress,
    detailedAddress,
  ] = main.querySelectorAll(".MemPayOrderInfo input"),
  fixedPayment = main.querySelector(".MemberPayMentFinPrice"), //최종결제금액창
  [totalAgree, paymentAgree1, paymentAgree2, paymentAgree3] =
    fixedPayment.querySelectorAll("input[type = checkbox]"),
  [
    totalAgreeCheckBox,
    paymentAgree1CheckBox,
    paymentAgree2CheckBox,
    paymentAgree3CheckBox,
  ] = fixedPayment.querySelectorAll("label > img"),
  paymentOrderBtn = fixedPayment.querySelector(".PaymentOrderBtn"),
  MemOrderPostMemoWrap = main.querySelector(".postMemoInput"), // 배송메모
  [postMemoSelect, postMemoInput] =
    MemOrderPostMemoWrap.querySelectorAll(".postMemo"),
  postMemoOption = postMemoSelect.querySelectorAll("option"),
  memPayOrderMeth = main.querySelector(".MemPayOrderPayMethBtn"),
  [cardBtn, accountBtn, mobileBtn, kakaoPayBtn] =
    memPayOrderMeth.querySelectorAll(".MemPayOrderPayMethBtn>label"),
  payBoxWrap = main.querySelector(".payBoxWrap"),
  [MemPayOrderCardPaymentBox, accountDepositeBox, mobilePayBox, kakaoPayBox] =
    payBoxWrap.querySelectorAll(".payBoxWrap>div");

cardBtn.style.border = "1px solid var(--PurpleBlue)";
cardBtn.lastElementChild.style.color = "var(--PurpleBlue";
cardBtn.children[0].style.filter =
  "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";

console.log(paymentOrderBtn);
console.log(paymentAgree1CheckBox);
console.log(paymentAgree2CheckBox);
console.log(paymentAgree3CheckBox);

let flag = false;

function isCorrect(asValue) {
  //한글 영문
  const regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
  return regExp.test(asValue);
}

totalAgree.addEventListener("change", function () {
  if (totalAgree.checked == true) {
    paymentAgree1.checked = true;
    paymentAgree2.checked = true;
    paymentAgree3.checked = true;
    totalAgreeCheckBox.setAttribute("src", "./checked.png");
    paymentAgree1CheckBox.setAttribute("src", "./checked.png");
    paymentAgree2CheckBox.setAttribute("src", "./checked.png");
    paymentAgree3CheckBox.setAttribute("src", "./checked.png");
  } else {
    paymentAgree1.checked = false;
    paymentAgree2.checked = false;
    paymentAgree3.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree1CheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree2CheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree3CheckBox.setAttribute("src", "./unChecked.png");
  }
});

paymentAgree1.addEventListener("change", function (e) {
  if (e.target.checked == false) {
    totalAgree.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree1CheckBox.setAttribute("src", "./unChecked.png");
  } else {
    paymentAgree1.checked = true;
    paymentAgree1CheckBox.setAttribute("src", "./checked.png");
  }
});

paymentAgree2.addEventListener("change", function (e) {
  if (e.target.checked == false) {
    totalAgree.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree2CheckBox.setAttribute("src", "./unChecked.png");
  } else {
    paymentAgree2.checked = true;
    paymentAgree2CheckBox.setAttribute("src", "./checked.png");
  }
});

paymentAgree3.addEventListener("change", function (e) {
  if (e.target.checked == false) {
    totalAgree.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree3CheckBox.setAttribute("src", "./unChecked.png");
  } else {
    paymentAgree3.checked = true;
    paymentAgree3CheckBox.setAttribute("src", "./checked.png");
  }
});

fixedPayment.addEventListener("change", function () {
  if (
    paymentAgree1.checked == true &&
    paymentAgree2.checked == true &&
    paymentAgree3.checked == true
  ) {
    totalAgree.checked = true;
    totalAgreeCheckBox.setAttribute("src", "./checked.png");
    paymentOrderBtn.classList.remove("btnDisable");
  } else {
    totalAgree.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentOrderBtn.classList.add("btnDisable");
  }
});

postMemoSelect.addEventListener("change", function () {
  postMemoInput.value = postMemoOption[postMemoSelect.value - 1].innerHTML;
});

let beforePaymentMethBox = MemPayOrderCardPaymentBox,
  beforePaymentMethBtnOj = cardBtn;

memPayOrderMeth.addEventListener("click", function (e) {
  const eventOj = e.target.closest("label"); // 잘 나옴,
  if (beforePaymentMethBtnOj != eventOj) {
    if (eventOj.className == "cardPayBtn") {
      MemPayOrderCardPaymentBox.classList.remove("displayNone");
      MemPayOrderCardPaymentBox.classList.add("displayFlex");
      beforePaymentMethBox.classList.remove("displayFlex");
      beforePaymentMethBox.classList.add("displayNone");
      beforePaymentMethBtnOj.children[0].style.filter =
        "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
      eventOj.children[0].style.filter =
        "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
      eventOj.style.border = "1px solid var(--PurpleBlue)";
      eventOj.lastElementChild.style.color = "var(--PurpleBlue)";
      beforePaymentMethBtnOj.style.border = "1px solid var(--DarkGray)";
      beforePaymentMethBtnOj.lastElementChild.style.color = "var(--DarkGray)";
      beforePaymentMethBox = MemPayOrderCardPaymentBox;
      beforePaymentMethBtnOj = eventOj;
    }
    if (eventOj.className == "accountPayBtn") {
      accountDepositeBox.classList.remove("displayNone");
      accountDepositeBox.classList.add("displayFlex");
      beforePaymentMethBox.classList.remove("displayFlex");
      beforePaymentMethBox.classList.add("displayNone");
      beforePaymentMethBtnOj.children[0].style.filter =
        "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
      eventOj.children[0].style.filter =
        "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
      eventOj.style.border = "1px solid var(--PurpleBlue)";
      eventOj.lastElementChild.style.color = "var(--PurpleBlue)";
      beforePaymentMethBtnOj.style.border = "1px solid var(--DarkGray)";
      beforePaymentMethBtnOj.lastElementChild.style.color = "var(--DarkGray)";
      beforePaymentMethBox = accountDepositeBox;
      beforePaymentMethBtnOj = eventOj;
    }
    if (eventOj.className == "mobilePayBtn") {
      mobilePayBox.classList.remove("displayNone");
      mobilePayBox.classList.add("displayFlex");
      beforePaymentMethBox.classList.remove("displayFlex");
      beforePaymentMethBox.classList.add("displayNone");
      beforePaymentMethBtnOj.children[0].style.filter =
        "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
      eventOj.children[0].style.filter =
        "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
      eventOj.style.border = "1px solid var(--PurpleBlue)";
      eventOj.lastElementChild.style.color = "var(--PurpleBlue)";
      beforePaymentMethBtnOj.style.border = "1px solid var(--DarkGray)";
      beforePaymentMethBtnOj.lastElementChild.style.color = "var(--DarkGray)";
      beforePaymentMethBox = mobilePayBox;
      beforePaymentMethBtnOj = eventOj;
    }
    if (eventOj.className == "kakaoPayBtn") {
      kakaoPayBox.classList.remove("displayNone");
      kakaoPayBox.classList.add("displayFlex");
      beforePaymentMethBox.classList.remove("displayFlex");
      beforePaymentMethBox.classList.add("displayNone");
      beforePaymentMethBtnOj.children[0].style.filter =
        "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
      eventOj.children[0].style.filter =
        "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
      eventOj.style.border = "1px solid var(--PurpleBlue)";
      eventOj.lastElementChild.style.color = "var(--PurpleBlue)";
      beforePaymentMethBtnOj.style.border = "1px solid var(--DarkGray)";
      beforePaymentMethBtnOj.lastElementChild.style.color = "var(--DarkGray)";
      beforePaymentMethBox = kakaoPayBox;
      beforePaymentMethBtnOj = eventOj;
    }
  }
});

const cardPaymentSelect = payBoxWrap.querySelector(".cardPaymentSelect"),
  cardPaymentHalbuOption = payBoxWrap.querySelector(".halbuMonth");

cardPaymentSelect.addEventListener("change", function (e) {
  cardPaymentHalbuOption.disabled = false;
});

const cashBillWrap = payBoxWrap.querySelector(".cashBillInputWrap"),
  cashBillTypeWrap = cashBillWrap.querySelector(".cashBillTypeWrap"),
  [cashBillTypeIncome, cashBillTypeProve, cashBillTypeNo] =
    cashBillWrap.querySelectorAll(".cashBillTypeWrap>span"),
  cashBillTypeIncomeNum = cashBillWrap.querySelector(".cashBillTypeIncomeNum"),
  cashBillTypeProveNumWrap = cashBillWrap.querySelector(
    ".cashBillTypeProveNumwrap"
  );

let beforeBillTypeBtn = cashBillTypeIncome;

cashBillTypeWrap.addEventListener("click", function (e) {
  if (e.target != beforeBillTypeBtn) {
    switch (e.target.className) {
      case "cashBillTypeIncome":
        e.target.style.border = "1px solid var(--PurpleBlue)";
        e.target.style.backgroundColor = "white";
        e.target.style.color = "var(--PurpleBlue)";
        beforeBillTypeBtn.style.backgroundColor = "var(--LightGray)";
        beforeBillTypeBtn.style.border = "1px solid var(--DarkGray)";
        beforeBillTypeBtn.style.color = "var(--DarkGray)";
        cashBillTypeProveNumWrap.classList.remove("displayBlock");
        cashBillTypeProveNumWrap.classList.add("displayNone");
        cashBillTypeIncomeNum.classList.remove("displayNone");
        cashBillTypeIncomeNum.classList.add("displayBlock");
        beforeBillTypeBtn = e.target;
        break;

      case "cashBillTypeProve":
        e.target.style.border = "1px solid var(--PurpleBlue)";
        e.target.style.backgroundColor = "white";
        e.target.style.color = "var(--PurpleBlue)";
        beforeBillTypeBtn.style.backgroundColor = "var(--LightGray)";
        beforeBillTypeBtn.style.border = "1px solid var(--DarkGray)";
        beforeBillTypeBtn.style.color = "var(--DarkGray)";
        cashBillTypeProveNumWrap.classList.remove("displayNone");
        cashBillTypeProveNumWrap.classList.add("displayBlock");
        cashBillTypeIncomeNum.classList.remove("displayBlock");
        cashBillTypeIncomeNum.classList.add("displayNone");
        beforeBillTypeBtn = e.target;
        break;

      case "cashBillTypeNo":
        e.target.style.border = "1px solid var(--PurpleBlue)";
        e.target.style.backgroundColor = "white";
        e.target.style.color = "var(--PurpleBlue)";
        beforeBillTypeBtn.style.backgroundColor = "var(--LightGray)";
        beforeBillTypeBtn.style.border = "1px solid var(--DarkGray)";
        beforeBillTypeBtn.style.color = "var(--DarkGray)";
        cashBillTypeProveNumWrap.classList.remove("displayBlock");
        cashBillTypeProveNumWrap.classList.add("displayNone");
        cashBillTypeIncomeNum.classList.remove("displayBlock");
        cashBillTypeIncomeNum.classList.add("displayNone");
        beforeBillTypeBtn = e.target;
        break;

      default:
        break;
    }
  }
});

const MemPayOrderMileageWrap = main.querySelector(".MemPayOrderMileageWrap"),
  [mileageUseInput, useAllMileage] = MemPayOrderMileageWrap.querySelectorAll(
    ".MemPayOrderMileageWrap input"
  ),
  couponUseSelect = MemPayOrderMileageWrap.querySelector(
    ".MemPayOrderMileageWrap select"
  ),
  couponUseOPtion = couponUseSelect.querySelectorAll("option"),
  myMileage = MemPayOrderMileageWrap.querySelector(
    ".MemPayOrderUserMileageWrap strong"
  );

const MemPayDiscountPrice = fixedPayment.querySelector(
    ".MemPayDiscountPriceWrap strong"
  ),
  MemPayProductPrice = fixedPayment.querySelector(
    ".MemPayProductPriceWrap strong"
  ),
  deliveryFee = fixedPayment.querySelector(
    ".MemPayDelieveryFeeWrapWrap strong"
  ),
  finPrice = fixedPayment.querySelector(".MemPayTotalPriceWrap strong");

makeFinalPrice();

couponUseSelect.addEventListener("change", function (e) {
  if (e.target.value == 0) {
    MemPayDiscountPrice.innerHTML = 0;
    return makeFinalPrice();
  }

  const coupon = `${couponUseOPtion[e.target.value].innerHTML}`;

  makeDiscountPrince(MemPayProductPrice.innerHTML, coupon);
  makeFinalPrice();
});

// ==========최종 결제금액 란==========

const allInput = requiredInputTagWrap.querySelectorAll("input");

function makeDiscountPrince(fixedPrice, coupon) {
  const calPercentIndex = +coupon.indexOf("%"),
    discountPercent = +coupon.slice(calPercentIndex - 3, calPercentIndex);

  for (let i = 0; i < fixedPrice.length / 3; i++) {
    fixedPrice = fixedPrice.replace(",", "");
  }

  MemPayDiscountPrice.innerHTML = (
    (+fixedPrice * +discountPercent) /
    100
  ).toLocaleString();
}

function makeFinalPrice() {
  finPrice.innerHTML = (
    makePriceToNum(MemPayProductPrice.innerHTML) +
    makePriceToNum(deliveryFee.innerHTML) -
    makePriceToNum(MemPayDiscountPrice.innerHTML)
  ).toLocaleString();
}

function makePriceToNum(price) {
  for (let i = 0; i < price.length / 3; i++) {
    price = price.replace(",", "");
  }
  return +price;
}
