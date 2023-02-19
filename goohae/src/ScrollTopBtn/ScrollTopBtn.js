import "./ScrollTopBtn.css";
import { useState } from "react";

export default function ScrollTopBtn() {
    const [TopBtnOnoff, setTopBtnOnoff] = useState(false);

    window.addEventListener("scroll", () => {
        let posY = Math.trunc(window.scrollY);

        if (posY > 500) {
            setTopBtnOnoff(true);
        } else {
            setTopBtnOnoff(false);
        }
    });

    const OnStyle = {
        visibility: "visible",
        opacity: "1"
    }, OffStyle = {
        visibility: "hidden",
        opacity: "0"
    };

    function test() {
        let stopTop = setInterval(() => {
            let posY = Math.trunc(window.scrollY);
            window.scroll(0, posY -= 10);

            if (posY <= 0) clearInterval(stopTop);
        }, 3);
    }

    return (
        <div className="TopBtnContainer" style={TopBtnOnoff ? OnStyle : OffStyle}>
            <img src="./images/icon/ScrollTopBtn.png" alt="TopBtn" onClick={test} />
        </div>
    );
}