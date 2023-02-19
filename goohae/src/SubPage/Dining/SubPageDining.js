import SubHeader from "../SubHeader/SubHeader";
import SubPageProducts from "../SubPageProducts";


// getIdx : 헤더에서 클릭한 카테고리의 Idx값 가져오기(각 카테고리별로 처음부터 0)
// navEvt : subHeader의 카테고리 메뉴 클릭 시 페이지 전환 이벤트 함수(subHeader로 전달하기 위함)
function SubPageDining({ getIdx, navEvt }) {
    // 하위 subHeader로 던져줄 데이터
    const categoryChild = ["식탁", "의자"],
        bgImg = {
            background: "url(./images/sub/Dining/DiningTitle.png) center/cover"
        };

    const outData = [
        // 식탁 데이터
        {
            Best: [
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20]
            ]
        },
        // 의자 데이터
        {
            Best: [
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/dining/table.jpg", "식탁", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/dining/chair.jpg", "의자", 200000, 250000, 20]
            ]
        }
    ];


    return (
        <>
            <SubHeader nowPosition="주방" categoryChild={categoryChild}
                bgImg={bgImg} categoryIdx={getIdx} clickEvt={navEvt} />

            <SubPageProducts getData={outData[getIdx]} />
        </>
    )
}

SubPageDining.defaultProps = {
    getIdx: 0
}

export default SubPageDining;