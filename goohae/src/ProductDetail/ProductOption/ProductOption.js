import "./ProductOption.css";
import { useState } from "react";


// ProductBasicData : 상품 제목, 가격에 대한 데이터를 받음
// ProductOptionData : 상품의 색상에 대한 데이터를 받음
// clickEvt : 색상 클릭 시 사진 전환을 위한 이벤트 함수를 받음(상위 컴포넌트에 있는 setState함수)
// OutputProductImg : 상품 사진을 결정할 State변수값 받음(색상 옵션 선택 시 사진을 바꾸기 위함)
export default function ProductOption({ ProductBasicData, ProductOptionData, clickEvt, OutputProductImg }) {
    const [ProductNum, setProductNum] = useState(1),        // 상품 수량에 관한 State변수
        [FavoriteImg, setFavoriteImg] = useState(false);    // Favorite버튼 클릭 이벤트를 위한 State변수

    const SelectStyle = { border: "2px solid #505DD0" };    // 선택한 상품 이미지에 넣을 border

    // 색상 옵션 클릭 시 이벤트 함수
    function changeImg(e) {
        const evt = e.target.closest("li");
        clickEvt(+evt.id);
    }

    // 수량 증감 함수
    function howManyProduct(e) {
        const evt = e.target.closest("button");
        setProductNum(ProductNum + (+evt.id));
    }

    // 수량 0으로 내리지 못하게 막기 위한 스타일 변수
    const downBtnStyle = ProductNum === 1 ? "none" : "auto";

    // Favorite버튼 클릭 시 이미지 전환을 위한 함수
    function FavoriteEvt() {
        setFavoriteImg(!FavoriteImg);
    }

    return (
        <>
            <div className="OptionContainer">
                <h2>{ProductBasicData[0]}</h2>

                <ul className="selectOptionContainer">

                    {ProductOptionData.map((v, i) => {
                        if (i === OutputProductImg) {
                            return (
                                <li key={`optionBox${i}`} id={i}>
                                    <div key={`btn${i}`} onClick={changeImg} style={SelectStyle}>
                                        <div style={{ background: v }}></div>
                                    </div>{v}
                                </li>
                            );
                        } else {
                            return (
                                <li key={`optionBox${i}`} id={i}>
                                    <div key={`btn${i}`} onClick={changeImg}>
                                        <div style={{ background: v }}></div>
                                    </div>{v}
                                </li>
                            );
                        }
                    })}

                </ul>

                <div className="howManyContainer">
                    <span>수 량&nbsp; &nbsp;:&nbsp; &nbsp;{ProductNum}</span>

                    <button className="downNum" id="-1" onClick={howManyProduct} style={{ pointerEvents: downBtnStyle }}>
                        <img src="./images/icon/left.png" alt="left" />
                    </button>

                    <button className="upNum" id="1" onClick={howManyProduct}>
                        <img src="./images/icon/right.png" alt="right" />
                    </button>
                </div>

                <p className="ProductPrice">{(ProductBasicData[1] * ProductNum).toLocaleString()}원</p>

                <div className="actionContainer">
                    <button>장 바 구 니</button>

                    <button><a href="http://192.168.0.86:5500/goohaeMypage/memberPayment/memberPayment.html">구 매 하 기</a></button>

                    <button onClick={FavoriteEvt}>
                        <img src={FavoriteImg ? "./images/icon/Favorit-fillicon.png" : "./images/icon/Favorit-lineicon.png"}
                            alt="Favorite" />
                    </button>
                </div>

                <div className="deliveryInfo">
                    <p>
                        <span>카드혜택</span>
                        <span>무이자할부</span>
                    </p>

                    <p>
                        <span>배송비</span>
                        <span>
                            설치기사 직접 배송<br />
                            20,000원 &#40;500,000원 이상 무료 배송&#41;<br />
                            주문 결제 후 가구, 조명은 영업일 기준<br />
                            수도권 5~14일, 도서산간 지역 10~20일 소요
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}