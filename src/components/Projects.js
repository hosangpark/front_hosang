import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import meter0 from "../assets/video/portfolio.webm";
import meter1 from "../assets/video/baggu.webm";
import meter2 from "../assets/video/todayhome.webm";
import meter3 from "../assets/video/movie.webm";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Carousel from 'react-multi-carousel';
import 'animate.css';

export const Projects = () => {
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
              <div className="item">
                <video muted autoPlay loop>
                  <source src={meter0}/>
                </video>
                <h5>Portfolio (React-반응형)</h5>
                <a href="">바로가기</a><a href='https://github.com/hosangpark/front_hosang'>소스코드</a>
              </div>
              <div className="item">
                <video muted autoPlay loop>
                  <source src={meter1}/>
                </video>
                <h5>BAGGU 리뉴얼(React)</h5>
                <a href="https://hosangpark.github.io/project_baggu/">바로가기</a><a href='https://github.com/hosangpark/project_baggu'>소스코드</a>
              </div>
              <div className="item">
                <video muted autoPlay loop>
                  <source src={meter2}/>
                </video>
                <h5>오늘의집 리뉴얼(모바일-반응형)</h5>
                <a href='https://hosangpark.github.io/project_todayhome/uiux.html'>바로가기</a><a href='https://github.com/hosangpark/baggu'>소스코드</a>
              </div>
              <div className="item">
                <video muted autoPlay loop>
                  <source src={meter3}/>
                </video>
                <h5>영화예매 사이트(반응형)</h5>
                <a href='https://hosangpark.github.io/project_movie/React_index.html'>바로가기</a><a href='https://github.com/hosangpark/baggu'>소스코드</a>
              </div>
          </Carousel>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
