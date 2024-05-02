import React from 'react'
import './footer.css';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import vector from './../../assets/vectors.png';
const footer = () => {
  return (
    <section>
        <img  src={vector} alt='vector' className='footer'/> 
        <div className='footercontent'>
        <div className='ico'>

<button className='button' >BACK TO TOP</button>

</div>
<div className='moreicons'>
<a  className='moreicons' href="https://www.instagram.com/___patil_manaswi___?utm_source=qr&igsh=MTI4czZyZmU1NXE2bA==" target='_blank' ><InstagramIcon /></a>
<a   href='https://www.linkedin.com/in/manaswi-patil-89289a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className='moreicons'><LinkedInIcon /></a>
<a className='moreicons' href= 'mailto:manaswipatilmanu5@gmail.com' target='_blank' rel="noreferrer" ><MailOutlineRoundedIcon /></a>

<h4> <a className='endcontent'> @2024 Manaswi Patil All Rights Reserved.</a></h4>
</div>
</div>
    </section>
      
  )
}

export default footer
