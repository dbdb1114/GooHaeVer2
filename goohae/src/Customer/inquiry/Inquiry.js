import './inquiry.css';
import BoxList from './../customerCommonComponant/BoxList';
import OptionBox1 from './inquiryOptionBox1';
import OptionBox2 from './inquiryOptionBox2';
import OptionBox3 from './inquiryOptionBox3';
import OptionBox4 from './inquiryOptionBox4';
import OptionBox5 from './inquiryOptionBox5';
import OptionBox6 from './inquiryOptionBox6';


import { Link } from 'react-router-dom';
import { useState } from 'react';

const Inquiry = () => {
    const categoryBox = [
        <Link to="/notice">공지사항</Link>,
        <Link to="/FAQ">FAQ</Link>,
        <Link to="/inquiry">상담문의</Link>
    ]

const inquiryData = [
    <OptionBox1/>,
    <OptionBox2/>,
    <OptionBox3/>,
    <OptionBox4/>,
    <OptionBox5/>,
    <OptionBox6/>
]

const [selectNum , setselectNum] = useState();

    const selected = (e) => {
        setselectNum(+e.target.value)
    }
    

    return (
        <main>
            <h1>상담문의</h1>
            <BoxList
                ulClassName='categoryBox'
                listContent1={categoryBox[0]}
                listContent2={categoryBox[1]}
                listContent3={categoryBox[2]} />
            <div className="inquiryContainer">
                <div className="selectBox">
                    <span>문의 구분</span>
                    <select onChange={selected}>
                        <option name="1" value="0">문의를 선택해주세요</option>
                        <option name="2" value="1">제품문의</option>
                        <option name="3" value="2">배송/설치 문의</option>
                        <option name="4" value="3">주문/결제/취소 문의</option>
                        <option name="5" value="4">교환/반품 문의</option>
                        <option name="6" value="5">이벤트/프로모션</option>
                        <option name="7" value="6">통합회원/기타문의</option>
                    </select>
                </div>
                {inquiryData[selectNum - 1]}
            </div>
        </main>
    );
}

export default Inquiry;