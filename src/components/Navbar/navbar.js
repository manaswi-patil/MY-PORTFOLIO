import React, {useState} from 'react'
import './navbar.css';
// import logo from '../../assets/logoown.png';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
// import MenuIcon from '@mui/icons-material/Menu';
//  import { Link } from 'react-router-dom';

const Navbar = () => {
// const[showMenu,setShowMenu]=useState(false);
  // return (

  //       <nav className='navbar-container'>
  //           <Link className='navbaritems'>About Me</Link>
  //           <Link className='navbaritems'>Skills</Link>
  //           <Link className='navbaritems'>Portfolio</Link>
  //           <Link className='navbaritems'>Contact</Link>
         
  //       </nav>
  //     );
  //   }
    
  //   export default Navbar;


















    <nav className="navbar">
        <img src={logo} alt="" className='logoown' style={{ width: '45px', height: '45px' }} />
        {/* <Link img src={logo} alt="logo"  className='ownlogo' style={{ width: '70px', height: '70px' }} > <img/></Link> */}
        <div className="desktopMenu">
          <Link  className="desktopMenuListItem" >Home</Link>
          <Link  className="desktopMenuListItem">About Me</Link>
          <Link  className="desktopMenuListItem">Skills</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
 {/* <Link to="#">Home</Link>
 <Link to="aboutme">Aboutme</Link>
 <Link to="Skills">Skills</Link>
 <Link to="works">Portfolio</Link>
 <Link to="details">Contact</Link> */}
        
   
      <button className="desktopMenuBtn" onClick={() => {
        
         document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
      }}>
        <link className="desktopMenuImg"  activeClass='active' to='details'  smooth={true} offset={700} duration={500} />CONTACT ME</button>
       
        {/* <div className='mobMenu'>
        <span className='mobMenu'onClick={()=>setShowMenu(!showMenu)}>< MenuIcon/></span>
        {/* <Link img src={logo} alt="logo"  className='ownlogo' style={{ width: '70px', height: '70px' }} > <img/></Link> */}
        {/* <div className="navMenu" style={{display:showMenu? 'none':'none'}}>
          <Link activeClass='active' to='#' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Home</Link>
          <Link activeClass='active' to='aboutme' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>About Me</Link>
          <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-160} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Skills</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
 <Link activeClass='active' to='details' spy={true} smooth={true} offset={15000} duration={100} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>contact</Link> */}
 
 </div>
 </nav>
 </div>
 


    
 )
}

export default Navbar;
