import SubHeader from "../SubHeader/SubHeader";
import SubPageProducts from "../SubPageProducts";


// getIdx : 헤더에서 클릭한 카테고리의 Idx값 가져오기(각 카테고리별로 처음부터 0)
// navEvt : subHeader의 카테고리 메뉴 클릭 시 페이지 전환 이벤트 함수(subHeader로 전달하기 위함)
function SubPageLiving({ getIdx, navEvt }) {
    // 하위 subHeader로 던져줄 데이터
    const categoryChild = ["소파", "테이블", "의자", "TV콘솔"],
        bgImg = {
            background: "url(./images/sub/living/livingTitle.png) center/cover"
        };

    const outData = [
        // 소파 데이터
        {
            Best: [
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20]
            ]
        },
        // 의자 데이터
        {
            Best: [
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20]
            ]
        },
        // 테이블 데이터
        {
            Best: [
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20]
            ]
        },
        // tv콘솔 데이터
        {
            Best: [
                ["./images/sub/living/sofa.jpg", "소파", 200000, 250000, 20],
                ["./images/sub/living/chair.jpg", "의자", 200000, 250000, 20],
                ["./images/sub/living/table.jpg", "테이블", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20]
            ],
            Product1: [
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20]
            ],
            Product2: [
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20],
                ["./images/sub/living/tv.jpg", "tv콘솔", 200000, 250000, 20]
            ]
        }
    ];


    return (
        <>
            <SubHeader nowPosition="거실" categoryChild={categoryChild}
                bgImg={bgImg} categoryIdx={getIdx} clickEvt={navEvt} />

            <SubPageProducts getData={outData[getIdx]} />
        </>
    )
}

SubPageLiving.defaultProps = {
    getIdx: 0
}

export default SubPageLiving;