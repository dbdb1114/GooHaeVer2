import DetailImgBox from "./DetailImgBox/DetailImgBox";
import ProductOption from "./ProductOption/ProductOption";
import ProductInfo from "./ProductInfo/ProductInfo";
import ReviewContainer from "../ForReview/ReviewContainer/ReviewContainer";
import ReviewBox from "../ForReview/ReviewBox/ReviewBox";
import ReviewPopUp from "../ForReview/ReviewPopUp/ReviewPopUp";
import { useState } from "react";
import "./ProductDetail.css";

export default function ProductDetail() {
    const [OutputProductImg, setOutputProductImg] = useState(0), // 상품 색상 옵션 변경 state변수
        [OnoffPopUp, setOnoffPopUp] = useState(-1),              // 팝업이 보이고 안보이고를 결정할 State변수
        // 해당 상품 색상 옵션 별 이미지 데이터
        ProductImgData = [
            [
                "./images/detail/main.jpg",
                "./images/detail/sub1.jpg",
                "./images/detail/sub2.jpg",
                "./images/detail/sub3.jpg",
            ],
            [
                "./images/detail/blackMain.jpg",
                "./images/detail/blackSub1.jpg",
                "./images/detail/blackSub2.jpg",
                "./images/detail/blackSub3.jpg"
            ]
        ],
        ProductBasicData = ["Sample Table입니당", 150000],
        ProductOptionData = ["burlywood", "black"],
        ProductInfoData = ["./images/detail/productBannerImg.jpg", "./images/detail/productInfo.jpg"],
        ProductReviewData = [
            ["./images/detail/main.jpg", "Sample Table입니당", "회원명", "제목", "★★★★★", "리뷰 내용 좋아여"],
            ["./images/detail/blackMain.jpg", "Sample Table입니당", "회원명", "제목", "★★★★★", "리뷰 내용 좋아여"],
            ["./images/detail/sub3.jpg", "Sample Table입니당", "회원명", "제목", "★★★★★", "리뷰 내용 좋아여"],
            ["./images/detail/blackSub2.jpg", "Sample Table입니당", "회원명", "제목", "★★★★★", "리뷰 내용 좋아여"],
            ["./images/detail/blackSub3.jpg", "Sample Table입니당", "회원명", "제목", "★★★★★", "리뷰 내용 좋아여"]
        ];

    // 옵션 색상 클릭 시 이벤트 함수
    function clickOption(idNum) {
        setOutputProductImg(idNum);
    }

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

    return (
        <>
            <div className="DetailContainer">
                <DetailImgBox getImgData={ProductImgData[OutputProductImg]} />

                <ProductOption ProductBasicData={ProductBasicData}
                    ProductOptionData={ProductOptionData} clickEvt={clickOption} OutputProductImg={OutputProductImg} />
            </div>

            <ProductInfo getInfoData={ProductInfoData} />

            <div className="ProductReviewContainer">
                <h3>Review</h3>

                <ReviewContainer>
                    <ReviewBox getData={ProductReviewData} PopUpOnoff={PopUpOnoff} />
                </ReviewContainer>
            </div>

            <ReviewPopUp getData={ProductReviewData}
                OnoffPopUp={OnoffPopUp} PopUpOnoff={PopUpOnoff} changePopUp={changePopUp} />
        </>
    );
}