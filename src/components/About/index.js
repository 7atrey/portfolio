import { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { Projects } from './Projects';
import { faArrowLeft, faArrowRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';


const About = () => {
 
  const [letterClass, setLetterClass] = useState('text-animate')
  const [slideclass, setSlideclass] = useState('slider_0');
  const [count,setCount] = useState(1);
  //console.log(count,'heyyyy')
  const slideLeft = () => {
    if(count>0){
      setCount(count-1)
      var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft - 620;
      
      // setSlideclass(`slider_0`);
      console.log(count);
    }
  }
  const slideRight = () => {
    if(count<6){
        setCount(count+1)
        // console.log(count,'up');
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 620;
       
        // setSlideclass(`slider_0`);
        console.log(count);
    }
  }

  // useEffect(()=>{
  //   return slideclass(); 
  // }, [slideclass()])

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a 3rd year Btech student at Indian Institute of Technology, Roorkee. </p>
            <p>I'm an aspiring and an ambitious front-end developer with interest in 
            Robotics and Blockchain as well. I'm skilled in HTMl, CSS, JavaScript, 
            ReactJS, C++ and Python, naming a few. 
          </p>
        </div>

        <div className="projects">
        
          <div className='projects1'>
            <h1><AnimatedLetters
                  letterClass={letterClass}
                  strArray={['M', 'y', ' ', 'P','r','o','j','e','c','t','s']}
                  idx={15}
                /></h1>
                </div>
                <button className="arrowleft" style={{backgroundColor: "#000", borderWidth: "0px", color: "blue"}}  onClick={slideLeft}>
                  <FontAwesomeIcon className='ficon' icon={faAnglesLeft} color="#F06529"/>
                </button>
                {/* <div class="circle">
                  <div class="noise animated"></div>
                </div> */}
                <div id='slider' className={slideclass}>
                {
                  Projects.map((e)=>{
                    return (<div className='content'>
                      <div className='name'>{e.name}</div>
                      <div className='desc'> {e.desc}</div>
                    </div>)
                  })
                }
                </div>
                <button className="arrowright" style={{backgroundColor: "#000", borderWidth: "0px"}} onClick={slideRight}>
                  <FontAwesomeIcon  className='ficon' icon={faAnglesRight} color="#F06529" />
                </button>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About;