import "./ReviewPopUp.css";
import { useRef } from "react";

// getData : 리뷰 데이터가 저장된 배열을 받음
// OnoffPopUp : 리뷰 팝업이 보이고 안보이고를 결정할 State변수값 받음
// PopUpOnoff : exitBtn에 적용할 OnoffPopUp값 바꿀 이벤트 함수 받음
// changePopUp : 팝업이 열릴 시 리뷰박스 넘길 버튼에 대한 이벤트 함수 받음
export default function ReviewPopUp({ getData, OnoffPopUp, PopUpOnoff, changePopUp }) {
    const slideList = useRef([]);           // li 태그 참조

    // 팝업 of/off 스타일
    const onPage = {
        display: "flex"
    }, offPage = {
        display: "none"
    };

    // reviewPopUp 스타일(보이고 안보이고를 위한)
    const BoxOn = {
        zIndex: "110"
    }, BoxOff = {
        zIndex: "0"
    };

    // PopUp Btn 스타일
    const BtnStyleOn = {
        visibility: "visible"
    }, BtnStyleOff = {
        visibility: "hidden"
    };


    // 리뷰 팝업 박스 생성
    let outputReviewPopUp = [];

    getData.forEach((v, i) => {
        outputReviewPopUp.push(
            <li key={`reviewPopUp${i}`} className={`reviewPopUp PopUpBox${i}`}
                ref={(e) => slideList.current[i] = e} style={i === OnoffPopUp ? BoxOn : BoxOff}>

                <img src={v[0]} alt="Img" />

                <div className="reviewPopUpInfo">
                    <p className="reviewPopUpProduct">{v[1]}</p>

                    <div className="reviewPopUpIdScore">
                        <span className="reviewPopUpWriter">{v[2]}</span>
                        <span className="reviewPopUpScore">{v[4]}</span>
                    </div>

                    <p className="reviewPopUpTitle">{v[3]}</p>
                    <p className="reviewPopUpContent">{v[5]}</p>
                </div>
            </li>
        );
    });


    return (
        <>
            <article className="PopUpMainContainer" style={OnoffPopUp < 0 ? offPage : onPage}>
                <div className="reviewPopUpContainer">
                    <ul className="reviewPopUpInner">
                        {outputReviewPopUp}
                    </ul>

                    <button style={OnoffPopUp === 0 ? BtnStyleOff : BtnStyleOn}
                        className="PopUpBtnLeft" id="PopUpslideBtn.0" onClick={(e) => changePopUp(e)}></button>

                    <button style={OnoffPopUp === (getData.length - 1) ? BtnStyleOff : BtnStyleOn}
                        className="PopUpBtnRight" id="PopUpslideBtn.1" onClick={(e) => changePopUp(e)}></button>
                </div>

                <p className="PopUpSlideIdx">{OnoffPopUp + 1} / {getData.length}</p>

                <button className="exitBtn" id="offPopUp.-1" onClick={(e) => PopUpOnoff(e)}>
                    <img src="./images/icon/cancel.png" alt="exitBtnImg" />
                </button>
            </article>
        </>
    );
}