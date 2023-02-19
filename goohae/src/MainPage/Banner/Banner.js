import "./Banner.css";
import { useRef } from 'react';

export default function Banner() {
    const bannerImg = useRef([]),       // 배너 이미지 참조
        bannerBtn = useRef([]);         // 배너 버튼 참조

    // banner button 클릭 시 이벤트 동작
    function nationBanner(e) {
        const count = +e.target.dataset.count;

        bannerImg.current[count > 0 ? 0 : 1].style.left = `${(count > 0 ? -1 : 1) * 100}%`;
        bannerImg.current[count].style.left = "0%";
        bannerBtn.current[count > 0 ? 0 : 1].style.visibility = "visible";
        bannerBtn.current[count].style.visibility = "hidden";
    }

    return (
        <section className="bannerContainer">
            <ul className="bannerInner">
                <li className="bannerImgBox" ref={(e) => bannerImg.current[0] = e}>
                    <img src="./images/banner/banner1.jpg" alt="banner" />
                </li>

                <li className="bannerImgBox" ref={(e) => bannerImg.current[1] = e}>
                    <img src="./images/banner/banner2.jpg" alt="banner" />
                </li>
            </ul>

            <button data-count="0" className="bannerLeftBtn"
                onClick={nationBanner} ref={(e) => bannerBtn.current[0] = e}>
            </button>

            <button data-count="1" className="bannerRightBtn"
                onClick={nationBanner} ref={(e) => bannerBtn.current[1] = e}>
            </button>
        </section>
    );
}