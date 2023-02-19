import './notice.css';
import BoardList from "../customerCommonComponant/boardList";
import BoxList from './../customerCommonComponant/BoxList';
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';


const Notice = () => {

    window.scrollTo({ top: 0 });


    //보드리스트안에 LINK를 집어넣기위해 만든 배열
    const categoryBox = [
        <Link to="/notice">공지사항</Link>,
        <Link to="/FAQ">FAQ</Link>,
        <Link to="/inquiry">상담문의</Link>
    ]

    //클릭시 스토리지에 있는 데이터를 구별해줄 키값 저장하는 변수
    let checkKeyI;

    //게시글 클릭하면 해당 데이터 인덱스 번호를 저장하고 읽기페이지에서 스토리지에 있는 데이터를 인덱싱해줌
    const checkKey = (e) => {
        checkKeyI = e.target.dataset.value;
        sessionStorage.setItem('dataKey', JSON.stringify(checkKeyI));

        window.location.href = '/ReadPage'
    }

    const noticeData = [

        {
            title: '구해조 개인정보처리방침 개정 사전 안내',
            upDayt: '2022. 08. 22.',
            upName: '관리자',
            content: '안녕하세요 고객님 구해조입니다. 고객님의 개인정보 처리에 대한 사이트 방침이 달라졌음을 안내해드립니다.'
        },

        {
            title: '구해조 서비스센터 홈페이지 오픈',
            upDayt: '2022. 08. 10.',
            upName: '관리자',
            content: '구해조 서비스센터 홈페이지가 오픈되었습니다. 자세한 내용은 문의를 통해 확인 부탁드립니다.'
        },

        {

            title: '구해조 소식을 구독하는 방법 A to Z',
            upDayt: '2022. 05. 10.',
            upName: '관리자',
            content: '자세한 내용은 블로그 참조!'
        },

        {
            title: '구해조 시스템 점검 안내',
            upDayt: '2022. 04. 12.',
            upName: '관리자',
            content: '안녕하세요 고객님 구해조입니다. 시스템 점검 작업을 위해 일정시간동안 공식몰의 이용이 중지됩니다. 2022년 11월 23일 ~ 2022년 11월 24일. 이용에 불편을 드려 대단히 죄송합니다.'
        },

        {

            title: '구해조 8월 무이자 할부 안내',
            upDayt: '2022. 08. 22.',
            upName: '관리자',
            content: '기간 : 2022.08.31 ~ 2022.09.01 감사합니다.'
        },

        {
            title: '[공지]일부 상품 가격 변경 및 서비스 일시중지 안내',
            upDayt: '2022. 08. 22.',
            upName: '관리자',
            content: '자세한 사항은 홈페이지 참조'
        },
    ]


    //로컬스토리지가 비었을때(빌드해서 배포할때는 브라우저 로컬스토리지가 비어있으므로 바로 스토리지를 가져오면 undefinded라서 컴파일 오류뜸)
    //기본데이터를 로컬스토리지에 저장함
    if (!JSON.parse(sessionStorage.getItem('noticeData')) || !JSON.parse(sessionStorage.getItem('FaqData'))) {
        sessionStorage.setItem('noticeData', JSON.stringify(noticeData));
    }

    return (
        <>
            <main>
                <h1>공지사항</h1>
                <BoxList
                    ulClassName={'categoryBox'}
                    listContent1={categoryBox[0]}
                    listContent2={categoryBox[1]}
                    listContent3={categoryBox[2]} />

                <BoardList
                    checkKey={checkKey} />

                <button><Link to='/boardWrite'>공지쓰기</Link></button>
            </main>



        </>
    );
}

export default Notice; 