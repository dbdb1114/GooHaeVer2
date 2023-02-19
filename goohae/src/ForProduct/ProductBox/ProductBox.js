import { useState } from "react"
import { Link } from "react-router-dom";
import "./ProductBox.css";


// getData : Product에 대한 데이터를 받음
export default function ProductBox({ getData }) {
    const [clickF, setClickF] = useState(true); // favorite 클릭 시 이미지 전환을 위한 비동기 Boolean값

    // favorite 클릭 시 이벤트
    function clickFavorite(e) {
        if (clickF) {
            e.target.style.background = "url(./images/icon/Favorit-fillicon.png) center/cover";
        } else {
            e.target.style.background = "url(./images/icon/Favorit-lineicon.png) center/cover";
        }
        setClickF(!clickF);
    }

    // 클릭 시 스크롤Y o으로
    function toScrollTop() {
        window.scrollTo({ top: 0 });
    }


    // ProductBox 생성
    let outputProductBox = [];

    getData.forEach((v, i) => {
        outputProductBox.push(
            <article className="productBox" key={`proBox${i}`}>
                <Link to="/productDetail" className="AforProduct" onClick={toScrollTop}/>

                <img className="productImg" src={v[0]} alt="img" />

                <div className="productInfo">
                    <p className="productName">{v[1]}</p>

                    <p className="productPrice">
                        <span>{v[2].toLocaleString()}원</span>
                        <span>{v[3].toLocaleString()}원</span>
                        <span>{v[4]}%</span>
                    </p>
                </div>

                <div className="forFavorite" onClick={clickFavorite}></div>
            </article>
        );
    })

    return (
        <>
            {outputProductBox}
        </>
    );
}