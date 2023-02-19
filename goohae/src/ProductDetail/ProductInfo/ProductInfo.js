import "./ProductInfo.css";

// getInfoData : 상품 배너 이미지와 상품 정보 이미지 데이터를 받음
export default function ProductInfo({ getInfoData }) {
    return (
        <>
            <section className="ProductBanner">
                <img src={getInfoData[0]} alt="productBanner" />
            </section>

            <section className="ProductInfo">
                <img src={getInfoData[1]} alt="productInfoImg" />
            </section>
        </>
    );
}