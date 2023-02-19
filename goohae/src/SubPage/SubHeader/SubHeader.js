import "./SubHeader.css";


// nowPosition : 현재 카테고리(거실, 침실, 주방, 드레스룸 중 1)
// categoryChild : 카테고리의 하위 메뉴들
// bgImg : subHeader의 카테고리 배경 이미지 주소
// categoryIdx : 카테고리 하위의 메뉴 Idx값
// clickEvt : 카테고리 하위의 메뉴 클릭 시 화면 전환을 위한 이벤트 함수
export default function SubHeader({ nowPosition, categoryChild, bgImg, categoryIdx, clickEvt }) {
    const selectStyle = {
        color: "#505DD0",
        fontWeight: "bold"
    }

    // 해당 카테고리의 하위 메뉴들을 배열로 전달 받음
    let category = [];
    categoryChild.forEach((v, i) => {
        if (i === categoryIdx) {
            category.push(<li id={`subHeaderNav.${i}`} key={`category${i}`}
                style={selectStyle} onClick={clickEvt}>{v}</li>);
        } else {
            category.push(<li id={`subHeaderNav.${i}`} key={`category${i}`}
                onClick={clickEvt}>{v}</li>);
        }
    })

    return (
        <section className="SubHeaderContainer">
            <div className="SubHeaderInfo">
                <span>홈</span>
                <span>&#62;</span>
                <span>{nowPosition}</span>
            </div>

            <div className="SubHeaderTitle" style={bgImg}>
                {nowPosition}
            </div>

            <ul className="SubHeaderNav">
                {category}
            </ul>
        </section>
    );
}