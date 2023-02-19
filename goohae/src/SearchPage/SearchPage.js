import SearchPageProducts from "./SearchPageProducts";
import "./SearchPage.css";

export default function SearchPage({ SearchKeyword }) {
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
            <h2 className="SearchInfo">"{SearchKeyword}" 에 대한 검색 결과</h2>

            <SearchPageProducts getData={outData[0]} />
        </>
    );
}