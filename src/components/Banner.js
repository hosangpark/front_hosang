import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/myphoto.jpg";
import { ArrowRightCircle , ArrowLeftCircle} from 'react-bootstrap-icons';
import { IoMdPerson } from 'react-icons/io';
import { FaBirthdayCake, FaMapMarkerAlt} from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "웹 개발자", "웹디자이너" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  let card = document.querySelector('.intro_card')
  const card_reverse = () => {
    card.classList.toggle('reverseon')
  }

  return (
    <section className="banner" id="home">

      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div className="intro_cardbox">
            <span className="tagline">Welcome to my Portfolio</span>
              <div className="intro_card">
                <div className="card_front">
                  <h1>
                    끊임없이 발전하는<br></br>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                    <span className="wrap">{text}</span></span><br></br>{`박호상입니다`}</h1>
                  <button className="about_button" onClick={card_reverse}>About me <ArrowRightCircle size={25}/></button>
                </div>
                <div className="card_back">
                  <div className="about_card">
                    <li><IoMdPerson size={40}/><span><p>이름</p><p>박호상</p></span></li>
                    <li><FaBirthdayCake size={40}/><span><p>생년월일</p><p>94.07.15</p></span></li>
                    <li><FaMapMarkerAlt size={40}/><span><p>주소지</p><p>부산광역시 사하구</p></span></li>
                    <li><IoMdCall size={40}/><span><p>연락처</p><p>010-2927-0185</p></span></li>
                    {/* <li><GrMail size={40}/><span><p>메일</p><p>ekzmapaqjf@gmail.com</p></span></li>
                    <li><BsFillPencilFill size={40}/><span><p>학력</p><p>동명대(심리학과)</p></span></li> */}
                  </div>
                  <button className="intro_button" onClick={card_reverse}><ArrowLeftCircle size={25}/> Intro</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
