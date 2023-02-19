import "./Footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footContainer">
                <h1 className="footLogo"><a href="#!">goohae</a></h1>

                <div className="footTextContainer">
                    <p>이 웹페이지는 개발 학습 용도로 비상업 목적으로 제작되었습니다.</p>

                    <p>그린컴퓨터아카데미 Team. Goohae</p>

                    <ul className="teamEmail">
                        <li>
                            <a href="#!">
                                <img src="./images/icon/GitHub.png" alt="img" />
                                <span>@ github</span>
                            </a>
                        </li>

                        <li>
                            <a href="#!">
                                <img src="./images/icon/GitHub.png" alt="img" />
                                <span>@ github</span>
                            </a>
                        </li>

                        <li>
                            <a href="#!">
                                <img src="./images/icon/GitHub.png" alt="img" />
                                <span>@ github</span>
                            </a>
                        </li>

                        <li>
                            <a href="#!">
                                <img src="./images/icon/GitHub.png" alt="img" />
                                <span>@ github</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footInfo">
                    {/* <a href="#!">개인정보처리방침</a> */}
                    <Link to="/customerMain">이용약관</Link>
                </div>
            </div>
        </footer>
    );
}