const OptionBox1 = () =>{
    return(
        <div className="optionBox option1">
                <form>
                    <ul>
                        <li className="title">
                            <label>제목</label>
                            <input type="text" name="title" />
                        </li>
                        <li>
                            <label>제품 코드(선택)</label>
                            <input type="text" name="code" />
                        </li>
                        <li>
                            <label>색상(선택)</label>
                            <div className="colorBox">
                                <input type="text" name="color" />
                                <span>문의하실 제품의 코드/색상을 알고 계신다면 여기에 적어주세요. 원활한 상담에 도움이 됩니다.</span>
                            </div>
                        </li>
                        <li>
                            <label>상세 내용</label>
                            <textarea defaultValue={"문의내용을 자세히 적어주시면 더욱 신속하고 정확한 답변드릴 수 있습니다.\n\n- 이 페이지는 제품 및 서비스에 대한 문의답변 공간입니다. 서비스 신청은 구해조 서비스센터 홈페이지에서 진행해주세요.\n- 개인정보보호를 위해 내용 입력란에 주민등록번호, 휴대폰번호와 같은 개인정보를 입력하지 마시기 바랍니다.\n                                "} />
                        </li>
                        <li>
                            <label>파일 첨부</label>
                            <div className="fileBox">
                                <input type="file" name="file" id="fileUpload" />
                                <label htmlFor="fileUpload">파일첨부하기</label>
                            </div>
                        </li>
                    </ul>
                    <button>신청하기</button>
                </form>
            </div>
    );
}

export default OptionBox1;