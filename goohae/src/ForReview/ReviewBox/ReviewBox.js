import "./ReviewBox.css";

// getData : 리뷰데이터가 저장된 배열을 받음
// PopUpOnoff : 리뷰 클릭 시 팝업이 보이고 안보이고를 결정할 이벤트 함수 받음
export default function ReviewBox({ getData, PopUpOnoff }) {
    let outputReviewBox = [];
    getData.forEach((v, i) => {
        outputReviewBox.push(
            <article className="reviewBox" key={`reBox.${i}`}>
                <a href="#!" className="AforReviewBox"
                    id={`onPopUp.${i}`} onClick={(e) => PopUpOnoff(e)}>:</a>

                <img className="reviewImg" src={v[0]} alt="img" />

                <div className="reviewInfo">
                    <p className="reviewProduct">{v[1]}</p>

                    <div className="reviewIdScore">
                        <span className="reviewWriter">{v[2]}</span>
                        <span className="reviewScore">{v[4]}</span>
                    </div>

                    <p className="reviewTitle">{v[3]}</p>
                </div>
            </article>
        );
    })

    return (
        <>
            {outputReviewBox}
        </>
    );
}