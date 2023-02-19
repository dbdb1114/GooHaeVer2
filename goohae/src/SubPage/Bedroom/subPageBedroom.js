import SubHeader from "../SubHeader/SubHeader";
import SubPageProducts from "../SubPageProducts";


// getIdx : 헤더에서 클릭한 카테고리의 Idx값 가져오기(각 카테고리별로 처음부터 0)
// navEvt : subHeader의 카테고리 메뉴 클릭 시 페이지 전환 이벤트 함수(subHeader로 전달하기 위함)
function SubPageBedroom({ getIdx, navEvt }) {
    // 하위 subHeader로 던져줄 데이터
    const categoryChild = ["침대", "매트리스", "협탁"],
        bgImg = {
            background: "url(./images/sub/Bedroom/BedroomTitle.png) center/cover"
        };

    const outData = [
        // 침대 데이터
        {
            Best: [
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대2", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20]
            ]
        },
        // 매트리스 데이터
        {
            Best: [
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대2", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20]
            ]
        },
        // 협탁 데이터
        {
            Best: [
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대", 200000, 250000, 20],
                ["./images/sub/bedroom/mattress.jpg", "매트리스", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/bed.jpg", "빈티지 윌넛 일체형 침대2", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20],
                ["./images/sub/bedroom/sideTable.jpg", "협탁", 200000, 250000, 20]
            ]
        }
    ];


    return (
        <>
            <SubHeader nowPosition="침실" categoryChild={categoryChild}
                bgImg={bgImg} categoryIdx={getIdx} clickEvt={navEvt} />

            <SubPageProducts getData={outData[getIdx]} />
        </>
    )
}

SubPageBedroom.defaultProps = {
    getIdx: 0
}

export default SubPageBedroom;