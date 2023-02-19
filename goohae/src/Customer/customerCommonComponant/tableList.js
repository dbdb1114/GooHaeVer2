
const TableList = ({ listData, tableClassName }) => {

    sessionStorage.setItem('filterData', JSON.stringify(listData));


    const click = (e) => {
        sessionStorage.setItem('dataKey', e.target.dataset.value)
        window.location.href = '/FAQRead'
    }

    return (
        <table className={tableClassName}>
            <thead className="tableList">
                <tr >
                    <th>유형</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>작성자</th>
                </tr>
            </thead>

            <tbody>
                {listData.map((v, i) => {
                    return (
                        <tr onClick={click} className='tableTr'
                            key={`Faq${i}`}
                            data-value={i}>
                            <td onClick={click}
                                className="tableTd"
                                key={`FaqNum${i}`}
                                data-value={i}>{v.type}</td>
                            <td onClick={click}
                                className="tableTd"
                                key={`FaqTitle${i}`}
                                data-value={i}>{v.title}</td>
                            <td className="tableTd" key={`FaqDay${i}`}>{v.upDayt}</td>
                            <td className="tableTd" key={`FaqName${i}`}>{v.upName}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TableList;