import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import meter0 from "../assets/video/portfolio.mp4";
import meter1 from "../assets/video/baggu.mp4";
import meter2 from "../assets/video/todayhome.mp4";
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
                <a href="">바로가기</a><a href='https://github.com/hosangpark/front_hosang' target="_blank">소스코드</a>
              </div>
              <div className="item">
                <video muted autoPlay loop>
                  <source src={meter1}/>
                </video>
                <h5>BAGGU 리뉴얼(React)</h5>
                <a href="https://hosangpark.github.io/project_baggu/" target="_blank">바로가기</a>
                <a href='https://github.com/hosangpark/project_baggu' target="_blank">소스코드</a>
              </div>
              <div className="item">
                <video muted autoPlay loop>
                  <source src={meter2}/>
                </video>
                <h5>오늘의집 리뉴얼(모바일-반응형)</h5>
                <a href="#!" onClick={() => window.open('https://hosangpark.github.io/project_todayhome/uiux.html', '_blank','width=500, height=700')}>바로가기</a>
                <a href='https://github.com/hosangpark/project_todayhome' target="_blank">소스코드</a>
              </div>
              <div className="item">
                <video muted autoPlay loop>
                  <source src={meter3}/>
                </video>
                <h5>영화예매 사이트(반응형)</h5>
                <a href='https://hosangpark.github.io/project_movie/React_index.html' target="_blank">바로가기</a>
                <a href='https://github.com/hosangpark/project_movie' target="_blank">소스코드</a>
              </div>
          </Carousel>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
