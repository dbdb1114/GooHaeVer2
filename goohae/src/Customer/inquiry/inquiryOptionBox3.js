const OptionBox3 = () =>{
    return(
        <div className="optionBox option3">
                <form>
                    <ul>
                        <li className="title">
                            <label>제목</label>
                            <input type="text" name="title" />
                        </li>
                        <li>
                            <label>구매 경로</label>
                            <ul className="radioBox">
                                <li>
                                    <div className="checkBoxcover">
                                        <input type="radio" id="delivery2_1" className="radio" name="purchase2" />
                                        <label htmlFor="delivery2_1" />
                                    </div>
                                    <label htmlFor="delivery2_1">구해조 공식몰 (www.goohae.com)</label>
                                </li>
                                <li>
                                    <div className="checkBoxcover">
                                        <input type="radio" id="delivery2_2" className="radio" name="purchase2" />
                                        <label htmlFor="delivery2_2" />
                                    </div>
                                    <label htmlFor="delivery2_2">구해조 공식 네이버 브랜드 스토어
                                        (https://brand.naver.com/goohae)</label>
                                </li>
                                <li>
                                    <div className="checkBoxcover">
                                        <input type="radio" id="delivery2_3" className="radio" name="purchase2" />
                                        <label htmlFor="delivery2_3" />
                                    </div>
                                    <label htmlFor="delivery2_3">구매 사이트 직접 입력</label>
                                </li>
                            </ul>
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

export default OptionBox3;