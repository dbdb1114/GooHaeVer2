import { useState } from 'react';
const InquiryData = ({ selectNum }) => {



    let Data = [
        <>
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
            </div>,

            <div className="optionBox option2">
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
                                        <input type="radio" id="delivery_1" className="radio" name="purchase" />
                                        <label htmlFor="delivery_1" />
                                    </div>
                                    <label htmlFor="delivery_1">구해조 공식몰 (www.goohae.com)</label>
                                </li>
                                <li>
                                    <div className="checkBoxcover">
                                        <input type="radio" id="delivery_2" className="radio" name="purchase" />
                                        <label htmlFor="delivery_2" />
                                    </div>
                                    <label htmlFor="delivery_2">구해조 공식 네이버 브랜드 스토어
                                        (https://brand.naver.com/goohae)</label>
                                </li>
                                <li>
                                    <div className="checkBoxcover">
                                        <input type="radio" id="delivery_3" className="radio" name="purchase" />
                                        <label htmlFor="all" />
                                    </div>
                                    <label htmlFor="delivery_3">구매 사이트 직접 입력</label>
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
            </div>,

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
            </div>,

            <div className="optionBox option4">
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
                                        <input type="radio" id="delivery1_1" className="radio" name="purchase3" />
                                        <label htmlFor="delivery1_1" />
                                    </div>
                                    <label htmlFor="delivery1_1">구해조 공식몰 (www.goohae.com)</label>
                                </li>
                                <li>
                                    <div className="checkBoxcover">
                                        <input type="radio" id="delivery1_2" className="radio" name="purchase3" />
                                        <label htmlFor="delivery1_2" />
                                    </div>
                                    <label htmlFor="delivery1_2">구해조 공식 네이버 브랜드 스토어
                                        (https://brand.naver.com/goohae)</label>
                                </li>
                                <li>
                                    <div className="checkBoxcover">
                                        <input type="radio" id="delivery1_3" className="radio" name="purchase3" />
                                        <label htmlFor="delivery1_3" />
                                    </div>
                                    <label htmlFor="delivery1_3">구매 사이트 직접 입력</label>
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
                        <li className="textBox">
                            <p>
                                <strong>&lt;교환 및 반품 안내&gt;</strong><br /><br />
                                <strong>제품 특성상 설치(조립)가 완료된 이후, 또는 밀봉된 비닐포장 개봉 후에는 제품 가치가 하락하여 재판매가 불가능하기 때문에 교환 / 반품
                                    기간(제품 인도후 7일) 이라도 교환/반품이 불가합니다.</strong><br /><br />
                                교환 및 반품 가능한 경우)<br /><br />
                                - 배송된 제품이 주문 내용과 상이한 경우<br />
                                - 제품에 오염이나 손상이 있는 경우<br />
                                - 제품 자체의 이상 및 결함이 있는 경우<br /><br />
                                교환 및 반품이 불가능한 경우)<br /><br />
                                - 제품을 설치(조립)한 경우<br />
                                - 매트리스 등의 밀봉 비닐 포장을 개봉한 경우<br />
                                - 고객님의 사용 및 부주의로 인하여 제품 가치가 감소한 경우<br /><br />
                                <strong>구해조 공식몰 아울렛 제품은 변심으로 인한 교환, 반품이 불가합니다.</strong>
                            </p>
                        </li>
                    </ul>
                    <button>신청하기</button>
                </form>
            </div>,

            <div className="optionBox option5">
                <form>
                    <ul>
                        <li className="title">
                            <label>제목</label>
                            <input type="text" name="title" />
                        </li>
                        <li>
                            <label>상세 내용</label>
                            <textarea defaultValue={"문의내용을 자세히 적어주시면 더욱 신속하고 정확한 답변드릴 수 있습니다.\n    \n- 이 페이지는 제품 및 서비스에 대한 문의답변 공간입니다. 서비스 신청은 구해조 서비스센터 홈페이지에서 진행해주세요.\n- 개인정보보호를 위해 내용 입력란에 주민등록번호, 휴대폰번호와 같은 개인정보를 입력하지 마시기 바랍니다.\n                                "} />
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
            </div>,

            <div className="optionBox option6">
                <form>
                    <ul>
                        <li className="title">
                            <label>제목</label>
                            <input type="text" name="title" />
                        </li>
                        <li>
                            <label>상세 내용</label>
                            <textarea defaultValue={"문의내용을 자세히 적어주시면 더욱 신속하고 정확한 답변드릴 수 있습니다.\n    \n- 이 페이지는 제품 및 서비스에 대한 문의답변 공간입니다. 서비스 신청은 구해조 서비스센터 홈페이지에서 진행해주세요.\n- 개인정보보호를 위해 내용 입력란에 주민등록번호, 휴대폰번호와 같은 개인정보를 입력하지 마시기 바랍니다.\n                                "} />
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
        </>
    ]
    const [quiryComPo , setQuiryComPo] = useState(Data[selectNum])
    return quiryComPo;
}

export default InquiryData;