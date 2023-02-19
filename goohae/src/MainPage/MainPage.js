import Banner from "./Banner/Banner";
import ProductBox from "../ForProduct/ProductBox/ProductBox";
import ProductContainer from '../ForProduct/ProductContainer/ProductContainer';
import ReviewContainer from '../ForReview/ReviewContainer/ReviewContainer';
import ReviewBox from "../ForReview/ReviewBox/ReviewBox";
import ReviewPopUp from "../ForReview/ReviewPopUp/ReviewPopUp";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function MainPage() {
    const [OnoffPopUp, setOnoffPopUp] = useState(-1);       // 팝업이 보이고 안보이고를 결정할 State변수

    // 리뷰 팝업 on/off 함수
    function PopUpOnoff(e) {
        e.preventDefault();
        if (e.target.tagName === "A") {
            setOnoffPopUp(+e.target.id.split(".")[1]);
        } else {
            const evt = e.target.closest("button");
            setOnoffPopUp(+evt.id.split(".")[1]);
        }
    }

    // 팝업의 버튼 클릭시 이벤트 함수
    function changePopUp(e) {
        const evt = +e.target.id.split(".")[1];
        if (evt > 0) {
            setOnoffPopUp(OnoffPopUp + 1);
        } else {
            setOnoffPopUp(OnoffPopUp - 1);
        }
    }

    function toScrollTop() {
        window.scrollTo({ top: 0 });
    }

    // ===================== newProduct =====================
    const newProductData = [
        ["./images/main/bed.png", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", 200000, 250000, 20],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", 200000, 250000, 20],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", 200000, 250000, 20]
    ];
    // 0 : 사진위치, 1 : 제품이름, 2 : 제품 가격, 3 : 제품 원래 가격, 4 : 제품 할인율

    // ==================== bestProduct =====================
    const bestProductData1 = [
        ["./images/main/bed.png", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", 200000, 250000, 20],
        ["./images/main/bed.png", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", 200000, 250000, 20]
    ];

    const bestProductData2 = [
        ["./images/main/bed.png", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", 200000, 250000, 20],
        ["./images/main/bed.png", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", 200000, 250000, 20]
    ];

    // ===================== mainReview =====================
    const mainReview = [
        ["./images/main/bed.png", "빈티지 윌넛 일체형 침대", "회원명", "제목", "★★★★★", "리뷰 내용 좋아여"],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", "회원명", "제목", "★★★★☆", "리뷰 내용 좋아여"],
        ["./images/main/bed.png", "빈티지 윌넛 일체형 침대", "회원명", "제목", "★★★★★", "리뷰 내용 좋아여"],
        ["./images/main/sofa.jpg", "패브릭 다크 그레이 소파", "회원명", "제목", "★★★☆☆", "리뷰 내용 좋아여"],
        ["./images/main/bed.png", "빈티지 윌넛 일체형 침대", "회원명", "제목", "★★★★★", "리뷰 내용 좋아여"]
    ];
    // 0 : 리뷰할 제품 사진위치, 1 : 제품이름, 2 : 회원명, 3 : 제목, 4 : 별점. 5 : 내용




    return (
        <>
            {/* Banner ========== */}
            <Banner />

            {/* newProduct =========== */}
            <section className="newProductContainer">
                <h2>New Product</h2>

                <ProductContainer>
                    <ProductBox getData={newProductData} />
                </ProductContainer>
            </section>

            {/* bestProduct =========== */}
            <section className="bestProductContainer">
                <h2>Best Product</h2>

                <ProductContainer>
                    <ProductBox getData={bestProductData1} />
                </ProductContainer>

                <ProductContainer>
                    <ProductBox getData={bestProductData2} />
                </ProductContainer>
            </section>

            {/* mainCategory ========= */}
            <section className="mainCategory">
                <div className="LivingCategory"><Link to="/subPageLiving" onClick={toScrollTop}><span>Living</span></Link></div>
                <div className="BedCategory"><Link to="/subPageBedroom" onClick={toScrollTop}><span>Bed Room</span></Link></div>
                <div className="DiningCategory"><Link to="/subPageDining" onClick={toScrollTop}><span>Dining</span></Link></div>
                <div className="DressCategory"><Link to="/subPageDressroom" onClick={toScrollTop}><span>Dress Room</span></Link></div>
            </section>

            {/* review =========== */}
            <section className="mainReview">
                <h3>Review</h3>

                <ReviewContainer>
                    <ReviewBox getData={mainReview} PopUpOnoff={PopUpOnoff} />
                </ReviewContainer>
            </section>

            <ReviewPopUp getData={mainReview}
                OnoffPopUp={OnoffPopUp} PopUpOnoff={PopUpOnoff} changePopUp={changePopUp} />
        </>
    );
}

export default MainPage;