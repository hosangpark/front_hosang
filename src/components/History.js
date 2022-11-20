import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import myphoto2 from "../assets/img/myphoto2.png";
import { FaUserGraduate } from 'react-icons/fa';
import { TiSpanner } from 'react-icons/ti';
import { IoMdBoat } from 'react-icons/io';
import { GiSpanner } from 'react-icons/gi';
import { HiOfficeBuilding , HiDesktopComputer } from 'react-icons/hi';

export const History = () => {
  return (
    <section className="history" id="history">
      <Container>
        <Row>
          <h2>History</h2>
          <Col md={5} xl={4}>
            <img className="history_img" src={myphoto2}></img>
          </Col>
          <Col xs={12} md={7} xl={8}>
            <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div className="history_wrap">
                      <div className="history_date">2013.03</div>
                      <div className="history_icon"><FaUserGraduate/></div>
                      <div className="history_text">
                        <p>동명대학교 입학</p><p>심리학과</p>
                      </div>
                    </div>
                    <div className="history_wrap">
                      <div className="history_date">2015.02 ~ 2016.11</div>
                      <div className="history_icon"><TiSpanner/></div>
                      <div className="history_text">
                        <p>군 입대 ~ 만기전역</p><p>9사단 백마부대 인사행정</p>
                      </div>
                    </div>
                    <div className="history_wrap">
                      <div className="history_date">2018.11 </div>
                      <div className="history_icon"><FaUserGraduate/></div>
                      <div className="history_text">
                        <p>동명대학교 중퇴</p><p>심리학과</p>
                      </div>
                    </div>
                  </div>}
              </TrackVisibility>
            <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div className="history_wrap">
                      <div className="history_date">2019.04 ~ 2019.11 </div>
                      <div className="history_icon"><IoMdBoat/></div>
                      <div className="history_text">
                        <p>정일글로벌(주)</p><p>항만하역 관리감독</p>
                      </div>
                    </div>
                    <div className="history_wrap">
                      <div className="history_date">2020.03 ~ 2020.12 </div>
                      <div className="history_icon"><GiSpanner/></div>
                      <div className="history_text">
                        <p>GK Engineering</p><p>마스크설비 제작 및 관리감독</p>
                      </div>
                    </div>
                    <div className="history_wrap">
                      <div className="history_date">2021.02 ~ 2020.11 </div>
                      <div className="history_icon"><HiOfficeBuilding/></div>
                      <div className="history_text">
                        <p>LG Uplus 부산본점</p><p>고객지원관리부 일반응대관리</p>
                      </div>
                    </div>
                    <div className="history_wrap">
                      <div className="history_date">2022.03 ~ 2020.09 </div>
                      <div className="history_icon"><HiDesktopComputer/></div>
                      <div className="history_text">
                        <p>부산 그린컴퓨터 아카데미</p><p>프론트엔드 - React 과정 수료</p>
                      </div>
                    </div>
                  </div>}
              </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
