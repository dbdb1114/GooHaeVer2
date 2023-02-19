import "./DetailImgBox.css";
import { useState, useRef } from "react";


// getImgData : 상품에 대한 이미지 데이터를 받음
export default function DetailImgBox({ getImgData }) {
    const [ImgIdx, setImgIdx] = useState(0),            // 선택한 이미지를 보여주기 위한 State변수
        [WideOnoff, setWideOnoff] = useState(false),    // 마우스 이벤트를 위한 State변수
        [WideImgPos, setWideImgPos] = useState({        // 마우스 무브 시 확대 이미지 위치를 위한 변수
            top: "",
            left: ""
        });

    // 태그 참조할 useRef 변수
    const moveBox = useRef(),
        moveBoxContainer = useRef(),
        wideImg = useRef();

    // 선택한 subImg에 적용할 스타일
    const SelectStyle = {
        border: "2px solid #505DD0"
    };

    // 이미지 돋보기 관련 =========================
    // 메인 이미지 mousemove시 적용 스타일
    const WideOn = {
        visibility: "visible"
    }, WideOff = {
        visibility: "hidden"
    };

    // 이미지 확대 박스 스타일
    const toWideImgStyle = {
        visibility: "visible",
        background: `url(${getImgData[ImgIdx]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "200% 200%",
        backgroundPosition: `${WideImgPos.left}px ${WideImgPos.top}px`
    };

    // 메인 이미지 mouseleave시 적용 함수
    function leaveEvt() {
        setWideOnoff(false);
    }
    // 메인 이미지 mousemove시 적용 함수
    function moveEvt(e) {
        setWideOnoff(true);

        // 전체 문서상에서 메인 이미지의 위치 좌표를 위한 객체 참조
        const imgRect = moveBoxContainer.current.getBoundingClientRect(),
            moveBoxRect = moveBox.current.getBoundingClientRect(),
            moveBoxX = e.clientX - (moveBoxRect.width / 2) - imgRect.x,        // mousemove시 마우스 X좌표
            moveBoxY = e.clientY - (moveBoxRect.height / 2) - imgRect.y;        // mousemove시 마우스 Y좌표

        const checkX = moveBoxX >= 0 && moveBoxX <= imgRect.width - moveBoxRect.width;    // X좌표 체크 조건
        const checkY = moveBoxY >= 0 && moveBoxY <= imgRect.height - moveBoxRect.height;   // Y좌표 체크 조건

        // X좌표 동작 ===
        if (checkX) {
            moveBox.current.style.left = `${moveBoxX}px`;
        } else {
            if (moveBoxX < 0) {
                moveBox.current.style.left = "0";
            } else if (moveBoxX > imgRect.width - moveBoxRect.width) {
                moveBox.current.style.left = `${imgRect.width - moveBoxRect.width}px`;
            }
        }
        // Y좌표 동작 ===
        if (checkY) {
            moveBox.current.style.top = `${moveBoxY}px`;
        } else {
            if (moveBoxY < 0) {
                moveBox.current.style.top = "0";
            } else if (moveBoxY > imgRect.height - moveBoxRect.height) {
                moveBox.current.style.top = `${imgRect.height - moveBoxRect.height}px`;
            }
        }

        // 확대 이미지 동작
        if (checkX && checkY) {
            setWideImgPos({
                top: moveBoxY * -2,
                left: moveBoxX * -2
            });
        } else {
            if (checkX && moveBoxY < 0) {
                setWideImgPos({
                    top: 0,
                    left: moveBoxX * -2
                });
            } else if (checkX) {
                setWideImgPos({
                    top: -imgRect.height,
                    left: moveBoxX * -2
                });
            } else if (checkY && moveBoxX < 0) {
                setWideImgPos({
                    top: moveBoxY * -2,
                    left: 0
                });
            } else if (checkY) {
                setWideImgPos({
                    top: moveBoxY * -2,
                    left: -imgRect.width
                });
            } else if (moveBoxX < 0 && moveBoxY > imgRect.height - moveBoxRect.height) {
                setWideImgPos({
                    top: -imgRect.height,
                    left: 0
                });
            } else if (moveBoxY < 0 && moveBoxX > imgRect.width - moveBoxRect.width) {
                setWideImgPos({
                    top: 0,
                    left: -imgRect.width
                });
            } else if (moveBoxX > imgRect.width - moveBoxRect.width &&
                moveBoxY > imgRect.height - moveBoxRect.height) {
                setWideImgPos({
                    top: -imgRect.height,
                    left: -imgRect.width
                });
            } else if (moveBoxX < 0 && moveBoxY < 0) {
                setWideImgPos({
                    top: 0,
                    left: 0
                });
            }
        }
    }

    // 사진 선택시 이벤트 함수 =====
    function clickImg(e) {
        setImgIdx(+e.target.id);
    }

    return (
        <>
            <div className="ImgBoxContainer">
                <div className="mainImgContainer"
                    onMouseLeave={leaveEvt}
                    onMouseMove={moveEvt} ref={moveBoxContainer}>

                    <img src={getImgData[ImgIdx]} alt="img" />

                    <span className="mouseMoveBox"
                        style={WideOnoff ? WideOn : WideOff} ref={moveBox}></span>

                </div>


                <div className="forWideImg" style={WideOnoff ? toWideImgStyle : WideOff}
                    ref={wideImg}></div>


                <div className="subImgContainer">

                    {getImgData.map((v, i) => {
                        if (i === ImgIdx) {
                            return (
                                <img key={`subImg${i}`} src={v} alt="img"
                                    id={i} style={SelectStyle} onClick={clickImg} />
                            );
                        } else {
                            return (
                                <img key={`subImg${i}`} src={v} alt="img"
                                    id={i} onClick={clickImg} />
                            );
                        }
                    })}

                </div>
            </div>
        </>
    );
}