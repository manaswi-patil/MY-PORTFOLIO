import { useState } from 'react';
import React from 'react'
import './intro.css';
import bg from '../../assets/ownimg-removebg.png';
import { Link } from 'react-scroll';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Intro = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {

    setExpanded(!expanded);

  };
  return (
    <div id="#">

      <div className="introContent">
        <span className='introContent' style={{ fontFamily: 'Railway', fontSize: '30px', fontweight: '700', textalign: 'center', lineheight: '46.96px', color: '#333' }}>Hi,I am</span>
        <br />
        <h1><span className='introName' style={{fontFamily: 'Railway', fontSize: '55px', fontweight: '700', lineheight: '93.92px', textalign: 'center', color: '#333'
        }}>Manaswi Patil</span></h1>
        <br />
        <h3><span className='introText' style={{
          fontfamily: 'Raleway',
          fontsize: '25px',
          fontweight: '800',
          lineheight: '29.35px',
          textalign: 'center',
       


        }}>Full Stack Developer-MERN Stack</span></h3>
        <br />

        <div className='icons'>
          <a className='icons' href='mailto:manaswipatilmanu5@gmail.com' target='_blank' rel="noreferrer"><AlternateEmailIcon /></a>
          <a href='https://www.linkedin.com/in/manaswi-patil-89289a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className='icons'><LinkedInIcon /></a>
          <a className='icons' href='https://github.com/manaswi-patil' targrt='_blank'><GitHubIcon /></a>
        </div>
        <div className='lastcontent'>
          {/* <h3 className='education'>Education</h3> */}

          <div> <p className='introPara'><h3>Education</h3><br />The Bachelor of science in information technology(BScIT) program provides a comprehensive understanding of fundamental principles in the fiels of information technology.<br />Key Courses:</p><br /></div>
          {/* <h4  className='keyCourses'>Key Courses:</h4>  */}
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
        </div>
      </div>
    </div>

  )
}

export default Intro;
