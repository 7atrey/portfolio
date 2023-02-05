import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import logoS from "../../assets/images/logo.png"
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'
import Logo from "./Logo";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['t', 'r', 'e', 'y',' ' ,':', ')']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v','e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, [])


    return (
        <>
        <div className="container home-page">

            {/* <h3>Hover over me</h3>  */}
            <div className="text-zone">
                  
                    <div>
                        <h1> 
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/> 
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                            <img className="logos" src={logoS} alt="developer"></img>
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                            <br/>
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                        </h1>
                        <h2>Frontend Developer / JavaScript Developer / Robotics Enthusiast</h2>
                        
                        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    </div>
                    <Logo/>
            </div>
        
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home;