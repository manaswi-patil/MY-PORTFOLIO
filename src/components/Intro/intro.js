import { useState } from 'react';
import React from 'react'
import './intro.css';
import Navbar from "./../../components/Navbar/navbar";
// import bg from '../../assets/ownimg-removebg.png';
import { Link } from 'react-scroll';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../../assets/ownlogonew.png';
import bg from '../../assets/ownimg2.png';
import Aboutme from "./../../components/AboutMe/aboutme";
import Skills from "./../../components/Skills/skills";
import Portfolio from "./../../components/Portfolio/portfolio";
import Contact from '../Contact/contact';
const Intro = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {

    setExpanded(!expanded);

  };
  return (
    <>
      <div className="introContent" id="introdata">
        <div className='wrapper'>
          <div className='container1'>
            <img src={logo} alt="" className='ownlogonew' style={{ width: '50px', height: '50px' }} />
            <span className='introhi' style={{ fontFamily: 'Raleway', fontSize: '40px' }}>Hi,I am</span>
            <span className='introName' style={{ fontFamily: 'Raleway', fontSize: '80px' }}>Manaswi Patil</span>
            <span className='introText' style={{ fontFamily: 'Raleway', fontSize: '25px' }} >Full Stack Developer-MERN Stack</span>
            <div className='symbol'>
              <a className='icons' href='mailto:manaswipatilmanu5@gmail.com' target='_blank' rel="noreferrer"><AlternateEmailIcon /></a>
              <a href='https://www.linkedin.com/in/manaswi-patil-89289a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className='icons'><LinkedInIcon /></a>
              <a className='icons' href='https://github.com/manaswi-patil' targrt='_blank'><GitHubIcon /></a>
            </div>

          </div>
          <div className='container2'>
            <Navbar />
            <img src={bg} alt="Profile" className="bg" />
          </div>
        </div>

        <div className='container3'>
          <div className='lastcontent'>
            <h3 className='education'>Education</h3>

            <div> <p className='introPara'>The Bachelor of science in information technology(BScIT) program provides a comprehensive understanding of hello everyone  fundamental principles in the fiels of information technology.<br />Key Courses:</p></div>
            <div className='list'>
              <li>Computer Programmimg</li>
              <li>Database Management System</li>
              <li>Network Administration</li>
              <li>Information Security</li>
              <li>Software Engineer</li>
            </div>
            {expanded && (

              <div className='moreList'>
                <div> <p className='introPare'>The Master of Science in Information Technology(MScIT) program is tailored for students who seek advanced expertise in leverging technology to address complex organizational needs. Building upon foundational knowledge<br />
                  acquired at the undergraduate level, Mac IT students delve deeper into specialized areas such as data analytics, cloud computing , artificial intelligence, and project Management.<br />Key courses:</p>
                </div>
                <li>Advanced Data Analytics</li>
                <li>Cloud Computing Technologies</li>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>IT Project Management</li>
                <li>Cyber Security Strategies</li>
                <li>Emerging Technologies and Trends</li>
              </div>
            )
            }
            <div >
              <Link><button className='expandContent1' onClick={toggleExpanded}>
                {expanded ? 'Read Less' : 'Read More'}

              </button></Link>
            </div>
          </div>
        </div>
        {/* <span className='introContents' style={{ fontFamily: 'Railway', fontSize: '30px', color: '#333' }}>Hi,I am</span> */}
        {/* <span className='introName' style={{ fontFamily: 'Railway', fontSize: '50px' }}>Manaswi Patil</span> */}
        {/* <span className='introText' style={{  fontSize: '20px' }} >Full Stack Developer-MERN Stack</span> */}

        {/* <div className='symbol'>
          <a className='icons' href='mailto:manaswipatilmanu5@gmail.com' target='_blank' rel="noreferrer"><AlternateEmailIcon /></a>
          <a href='https://www.linkedin.com/in/manaswi-patil-89289a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className='icons'><LinkedInIcon /></a>
          <a className='icons' href='https://github.com/manaswi-patil' targrt='_blank'><GitHubIcon /></a>
        </div> */}

        {/* 
        <div className='lastcontent'>
           <h3 className='education'>Education</h3> 

          <div> <p className='introPara'><h3>Education</h3><br />The Bachelor of science in information technology(BScIT) program provides a comprehensive understanding of fhello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyonehello everyoneundamental principles in the fiels of information technology.<br />Key Courses:</p><br /></div>
          <h4  className='keyCourses'>Key Courses:</h4> 
          <ul className='list'>
            <li>Computer Programmimg</li>
            <li>Database Management System</li>
            <li>Network Administration</li>
            <li>Information Security</li>
            <li>Software Engineer</li>
          </ul> 
          {expanded && ( 

            <div className='moreList'>
              <div> <p className='introPare'>The Master of Science in Information Technology(MScIT) program is tailored for students who seek advanced expertise in leverging technology to address complex organizational needs. Building upon foundational knowledge<br />
                acquired at the undergraduate level, Mac IT students delve deeper into specialized areas such as data analytics, cloud computing , artificial intelligence, and project Management.<br />Key courses:</p>
              </div>
              <li>Advanced Data Analytics</li>
              <li>Cloud Computing Technologies</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>IT Project Management</li>
              <li>Cyber Security Strategies</li>
              <li>Emerging Technologies and Trends</li>
            </div> 
           ) 
           } 
          <div className='expandContent'>
            <Link><button onClick={toggleExpanded}>
              {expanded ? 'Read Less' : 'Read More'}

            </button></Link>
          </div>
        </div>
      </div> 
      <div> 
        <div>
          <img src={bg} alt="Profile" className="bg" />
        </div>  */}












      </div>

      <Aboutme />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Intro;
