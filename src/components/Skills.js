import meter1 from "../assets/img/HTML5.png";
import meter2 from "../assets/img/CSS.png";
import meter3 from "../assets/img/JS.png";
import meter4 from "../assets/img/Redux.png";
import meter5 from "../assets/img/React.png";
import meter6 from "../assets/img/React-native.png";
import meter7 from "../assets/img/Jquery.png";
import meter8 from "../assets/img/Bootstrap.png";
import meter9 from "../assets/img/git.png";
import meter10 from "../assets/img/github.png";
import meter11 from "../assets/img/Type.png";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

  return (
    <section className="skill" id="skills">
        <div className="container">
            <h2>Skills</h2>
            <div className="skill-box">
                <div className="skills">
                    <img src={meter1} alt="Image" />
                    <h5>HTML</h5>
                </div>
                <div className="skills">
                    <img src={meter2} alt="Image" />
                    <h5>CSS</h5>
                </div>
                <div className="skills">
                    <img src={meter3} alt="Image" />
                    <h5>JS</h5>
                </div>
                <div className="skills">
                    <img src={meter11} alt="Image" />
                    <h5>TypeScript</h5>
                </div>
            </div>
            <div className="skill-box">
                <div className="skills">
                    <img src={meter4} alt="Image" />
                    <h5>Redux</h5>
                </div>
                <div className="skills">
                    <img src={meter5} alt="Image" />
                    <h5>React</h5>
                </div>
                <div className="skills">
                    <img src={meter6} alt="Image" />
                    <h5>React-Native</h5>
                </div>
                <div className="skills">
                    <img src={meter7} alt="Image" />
                    <h5>jQuery</h5>
                </div>
                <div className="skills">
                    <img src={meter8} alt="Image" />
                    <h5>Bootstrap</h5>
                </div>
            </div>
            <div className="skill-box">
                <div className="skills">
                    <img src={meter9} alt="Image" />
                    <h5>git</h5>
                </div>
                <div className="skills">
                    <img src={meter10} alt="Image" />
                    <h5>github</h5>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
