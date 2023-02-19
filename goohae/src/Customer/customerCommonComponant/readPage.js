import { useState } from 'react';
import './readPage.css';
import { Link } from 'react-router-dom';

const ReadPage = () => {

    const [noticeData, setNoticeData] = useState(JSON.parse(sessionStorage.getItem('noticeData'))[JSON.parse(sessionStorage.getItem('dataKey'))]);

    let contentArray = noticeData.content.split('.');


    /**게시글 삭제함수 */
    const delet = () => {
        if (window.confirm("삭제하시겠습니까?") === false) {
            return
        }
        let realData = JSON.parse(sessionStorage.getItem('noticeData'));
        let dataKey = JSON.parse(sessionStorage.getItem('dataKey'));
        realData.splice(dataKey, 1);
        sessionStorage.setItem('noticeData', JSON.stringify(realData));
        window.location.href = '/notice';
    }

    return (
        <>
            <main>
                <div className="contentContainer">
                    <h1 id="noticeTitle">{noticeData.title}</h1>
                    <div className="noticeContent">
                        {contentArray.map((v, i) => {
                            return <div>{contentArray[i]}</div>
                        })}
                    </div>
                    <div className="writeDate"><span>작성일 : </span>{noticeData.upDayt}</div>
                </div>
                <div className="buttonContainer">
                    <div className="backToList"><Link to="/notice">목록으로</Link></div>
                    <div className="delete" onClick={delet}>삭제하기</div>
                </div>
            </main>
        </>
    );
}

export default ReadPage;