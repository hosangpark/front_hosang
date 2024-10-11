import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import Carousel from 'react-multi-carousel';
import GetGO from "../assets/img/getgo.jpg";
import FairLink from "../assets/img/Fairlink.jpg";
import 'animate.css';

export const Projects2 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <h2>Projects</h2>
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              <div className="item2">
                <img src={GetGO} />
                <h5>GetGo (인도네시아 중고생활마켓거래앱)</h5>
                <a href="https://play.google.com/store/apps/details?id=com.daehands.getgo&hl=ko&gl=KR">바로가기</a>
                <a href='https://github.com/hosangpark/getgo' target="_blank">소스코드</a>
              </div>
              <div className="item2">
                <img src={FairLink}/>
                <h5>FairLink (중장비 배차 플랫폼)</h5>
                <a href="https://play.google.com/store/apps/details?id=com.fairlink&hl=ko&gl=KR" target="_blank">바로가기</a>
                <a href='https://github.com/hosangpark/fairLink' target="_blank">소스코드</a>
              </div>

          </Carousel>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
