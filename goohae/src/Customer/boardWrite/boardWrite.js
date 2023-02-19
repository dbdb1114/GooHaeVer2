import './boardWrite.css';
import { useState } from 'react';

const BoardWrite = () => {

    window.scrollTo({ top: 0 });

    //시간체크
    let date = new Intl.DateTimeFormat('kr').format(new Date());
    //로컬에 올릴 데이터 변수

    const [getBoard, setGetBoard] = useState(
        {
            title: '',
            upDayt: date,
            upName: '관리자',
            content: '',
        }
    )



    /**인풋박스 벨류값감지 함수 */
    const getBoardValue = (e) => {
        const { name, value } = e.target;
        setGetBoard({
            ...getBoard,
            [name]: value,
        })
    }

    /**작성이 완료되면 로컬에 데이터저장후 공지페이지로 넘어감 제목,내용,작성자중 하나라도 빈칸이면 경고창 띄우고 함수종료 */
    const complete = () => {
        let upDateData;

        if (!(getBoard.title && getBoard.upName && getBoard.content)) {
            alert('제목과 내용,작성자가 입력되지 않았습니다.');
            return;
        }
        upDateData = [
            ...JSON.parse(sessionStorage.getItem('noticeData')),
            getBoard,
        ]

        sessionStorage.setItem('noticeData', JSON.stringify(upDateData))
        console.log(JSON.parse(sessionStorage.getItem('noticeData')))
        window.location.href = '/notice';
    }

    return (
        <>
            <main>
                <div className="writeList">
                    <div className="titleWrite">
                        <label>
                            <input
                                name="title"
                                type="text"
                                placeholder="제목"
                                value={getBoard.title}
                                onChange={getBoardValue} />
                        </label>

                        <label>작성자 : &nbsp;
                            <input
                                name="upName"
                                type="text"
                                value={getBoard.upName}
                                onChange={getBoardValue} />
                        </label>
                    </div>

                    <div className="content">
                        <label>
                            <textarea
                                name="content"
                                cols="80"
                                rows="20"
                                value={getBoard.content}
                                placeholder='내용'
                                onChange={getBoardValue}></textarea>
                        </label>
                    </div>

                    <div className="writer">

                    </div>

                    <div className="completeBtn">
                        <button
                            className="writeComplete"
                            name='upDayt'
                            onClick={complete}
                        >작성완료</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default BoardWrite;