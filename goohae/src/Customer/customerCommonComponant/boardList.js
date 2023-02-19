import { useState } from 'react';
import { Link } from 'react-router-dom';
const BoardList = ({ checkKey }) => {

    //스토리지가 업데이트될때마다 리스트가 재랜더링 되어야하므로 state값으로 로컬스토리지 데이터를 저장
    const [listData, setListData] = useState(JSON.parse(sessionStorage.getItem('noticeData')));


    return (
        <>
            <table>
                <thead>
                    <tr key="noticeThead">
                        <th>NO</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>작성자</th>
                    </tr>
                </thead>

                <tbody>
                    {listData.map((v, i) => {
                        return (
                            <tr
                                key={`notice${i}`}
                            >
                                <td key={`noticeNum${i}`}>{i + 1}</td>
                                <td key={`noticeTitle${i}`}
                                    onClick={checkKey}
                                    data-value={i}>{v.title}</td>
                                <td key={`noticeDay${i}`}>{v.upDayt}</td>
                                <td key={`noticeName${i}`}>{v.upName}</td>
                            </tr>
                        );
                    }
                    )}
                </tbody>

            </table>
            
        </>

    );
}

export default BoardList;