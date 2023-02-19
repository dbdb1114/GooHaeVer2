import BoxList from "../customerCommonComponant/BoxList";
import TableList from './../customerCommonComponant/tableList';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './FAQ.css'


const FAQ = () => {


    const [listData, setListData] = useState(
        JSON.parse(sessionStorage.getItem('FaqData'))
    );

    window.scrollTo({ top: 0 });

    let date = new Intl.DateTimeFormat('kr').format(new Date());

    const categoryBox = [
        <Link to="/notice">공지사항</Link>,
        <Link to="/FAQ">FAQ</Link>,
        <Link to="/inquiry">상담문의</Link>
    ]

    const FaqData = [
        {
            type: '상품',
            title: '의자 등판이 오염되었어요 집에서 세탁해도 되나요?',
            upDayt: date,
            upName: '상품관리팀',
            content: "안녕하세요? 구해조 상품관리팀입니다.의자 오염의 경우 집에서 세탁이 불가하며 전문 세탁업체에 의뢰하는것이 좋습니다."
        },

        {
            type: '주문/결제',
            title: '구해조 매장은 어디에 있나요?',
            upDayt: date,
            upName: '주문/결제 관리팀',
            content: "구해조 매장은 성남시 그린컴퓨터 아카데미 5층에 위치하고 있습니다."
        },

        {
            type: '회원정보',
            title: '아이디와 비밀번호를 분실하였습니다.',
            upDayt: date,
            upName: '사이트관리자',
            content: "우측상단 [로그인]을 클릭하시면 아이디/비밀번호 찾기를 하실수 있습니다."
        },

        {
            type: '상품',
            title: '제품관련 문의는 어디로 하면될까요?',
            upDayt: date,
            upName: '상품관리팀',
            content: "고객센터 1:1문의를 통해 제품문의를 하실수 있습니다."
        },

        {
            type: '사이트이용',
            title: '아이디와 비밀번호를 변경하고 싶습니다.',
            upDayt: date,
            upName: '사이트관리자',
            content: "아이디는 가입시 등록한 고유한 아이디로 변경이 불가하십니다.비밀번호는 로그인후 마이페이지에서 변경이 가능하십니다."
        },

        {
            type: '회원정보',
            title: '회원 탈퇴는 어떻게 하나요?',
            upDayt: date,
            upName: '사이트관리자',
            content: "로그인 이후 마이페이지에서 가능하십니다."
        },

        {
            type: '상품',
            title: '제품에서 냄새가 나요.',
            upDayt: date,
            upName: '상품관리팀',
        },
    ]

    const filterBoxTitle = [
        '전체',
        '상품',
        '주문/결제',
        '사이트이용',
        '회원정보'
    ];

    console.log(filterBoxTitle);

    sessionStorage.setItem('FaqData', JSON.stringify(FaqData))



    const [btnStyle, setBtnStyle] = useState("전체")


    const getType = (e) => {
        setBtnStyle(e.target.textContent)

        if (e.target.textContent === '전체') {
            setListData(FaqData);
            return;
        }
        const filterData = FaqData.filter(filtering => filtering.type === e.target.textContent);
        setListData(filterData);
    }




    return (
        <>
            <main>
                <h1>FAQ</h1>
                <BoxList
                    ulClassName='categoryBox'
                    listContent1={categoryBox[0]}
                    listContent2={categoryBox[1]}
                    listContent3={categoryBox[2]} />

                <ul className='filteringBox'>
                    {filterBoxTitle.map((v, i) => {
                        const filterStyle = btnStyle === v ? {
                            backgroundColor: 'black',
                            color: 'white',
                        } : {}
                        return (
                            <li
                                className={`filter`}
                                key={`filter${i}`}
                                style={filterStyle}
                                onClick={getType}>{v}</li>
                        );
                    })}
                </ul>
                <TableList
                    tableClassName='FaqTable'
                    listData={listData} />
            </main>
        </>
    );
}

export default FAQ;