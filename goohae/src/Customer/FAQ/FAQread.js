import { useState } from 'react';
import { Link } from 'react-router-dom'
import './FAQread.css';


const FAQRead = () => {
    window.scrollTo({ top: 0 });

    const [noticeData, setNoticeData] = useState(JSON.parse(sessionStorage.getItem('filterData'))[JSON.parse(sessionStorage.getItem('dataKey'))]);

    let contentArray = noticeData.content.split('.');
    return (
        <main>
            <div className="FAQContainer">
                <h1 id="FAQTitle">{noticeData.title}</h1>
                <div className="FAQContent">
                    {contentArray.map((v, i) => {
                        return <div>{contentArray[i]}</div>
                    })}
                </div>
                <div className="writeDate"><span>작성일 : </span>{noticeData.upDayt}</div>
            </div>
            <div className="backToListBtn">
                <div className="backToList"><Link to="/FAQ">목록으로</Link></div>
            </div>
        </main>
    );
}

export default FAQRead;