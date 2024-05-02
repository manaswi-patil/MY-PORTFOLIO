import React from 'react'
import Navbar from "./../../components/Navbar/navbar";
import Intro from './../../components/Intro/intro';
import { Link } from 'react-scroll';
import { useState } from 'react';
import bg from '../../assets/ownimg2.png';
import "./rectangleimg.css";
import logo from '../../assets/ownlogonew.png';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import bg from '../../assets/ownimg-removebg.png';
// import Blackimg1 from '../../assets/blackimg.jpg';
// import Blackimg2 from '../../assets/blackimg.jpg';
// import Blackimg3 from '../../assets/blackimg.jpg';
const Rectangleimg = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {

    setExpanded(!expanded);

  };
  return (

    <div>Hi</div>
    // <div className='wrapper'>
    /* <div className="container1">
    <img src={logo} alt="" className='ownlogonew' style={{ width: '50px', height: '50px' }} /> 
    <div className='mydata'>
      <Intro/>
      <span className='introName' style={{ fontFamily: 'Raleway', fontSize: '50px' }}>Manaswi Patil</span>
      <span className='introText' style={{  fontSize: '20px' }} >Full Stack Developer-MERN Stack</span>
      <div className='symbol'>
        <a className='icons' href='mailto:manaswipatilmanu5@gmail.com' target='_blank' rel="noreferrer"><AlternateEmailIcon /></a>
        <a href='https://www.linkedin.com/in/manaswi-patil-89289a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className='icons'><LinkedInIcon /></a>
        <a className='icons' href='https://github.com/manaswi-patil' targrt='_blank'><GitHubIcon /></a>
      </div> 
    </div>
    </div>
    <div className="container2">
    <Navbar/> 
    <img src={bg} alt="Profile" className="bg" /> 
    </div>
    <div className="container3">
 
    <div className='lastcontent'>
         <h3 className='education'>Education</h3>  

        <div> <p className='introPara'><br />The Bachelor of science in information technology(BScIT) program provides a comprehensive understanding of fundamental principles in the fiels of information technology.Throught the course of study students delve into<br /> various aspects of IT,including computer programming,networking and software engineering.<br/>Key Courses:</p><br /></div>
        <h4  className='keyCourses'>Key Courses:</h4> 
        {/* <ul className='list'>
          <li>Computer Programmimg</li>
          <li>Database Management System</li>
         
        </ul>  */
    // {expanded && ( 

    //   <div className='moreList'>
    //     <div> <p className='introPare'><ul> <li>Network Administration</li> <li>Information Security</li>
    //   <li>Software Engineer</li></ul>The Master of Science in Information Technology(MScIT) program is tailored for students who seek advanced expertise in leverging technology to address complex organizational needs. Building upon foundational knowledge<br />
    //       acquired at the undergraduate level, Mac IT students delve deeper into specialized areas such as data analytics, cloud computing , artificial intelligence, and project Management.<br />Key courses:</p>
    //     </div>
    //     <li>Advanced Data Analytics</li>
    //     <li>Cloud Computing Technologies</li>
    //     <li>Artificial Intelligence and Machine Learning</li>
    //     <li>IT Project Management</li>
    //     <li>Cyber Security Strategies</li>
    //     <li>Emerging Technologies and Trends</li>
    //   </div> 
    //        ) 
    //        } 
    //       <div>
    //         <Link><button  className='expandContent' onClick={toggleExpanded}>
    //           {expanded ? 'Read Less' : 'Read More'}

    //         </button></Link>
    //       </div>
    //     </div>
    //   </div> 
    //   <div> 

    //   </div> */}

    // </div>
  );
}
//     <div className='voidrect'>
//       {/* <img src={bg} alt="Profile" className="bgnew" /> */}
//       {/* <img src={Blackimg1} alt="Profile" className="bgnewblack1" />
//       <img src={Blackimg2} alt="Profile" className="bgnewblack2" />
//       <img src={Blackimg3} alt="Profile" className="bgnewblack3" />
//       <img src={bg} alt="Profile" className="bg" /> */}

//       <div className='crossrectangle'>
//         <div className='bottomrect'>

//         </div>
//       </div>
//           </div>


//   )
// }

export default Rectangleimg;
