import React, { useState } from 'react'
import './aboutme.css';
import design from './../../assets/design.png';
import development from './../../assets/development.png';
import maintenanceicon from './../../assets/maintenanceicon.png';
import { Link } from 'react-scroll';
import endline from './../../assets/separatorBlack 2.png';
const Aboutme = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    // <div>
    <section id="aboutme">

      <h1> <span className='aboutTitle'>ABOUT ME</span></h1>

      <div className='Desc'>
        <span className='aboutmeDesc' />Manaswi Patil is a dedicated tech enthusiast with a BSC IT and MSC IT background from University Of Mumbai.Experienced in <br />
        programming database management and AI,with a passion for innovation.Commited for lifelong learning and collaborative <br />
        problem solving.outside of tech,enjoys nature,photography,and writing.Ready to make positive impact in the industry.<p />
      </div>
      {expanded && (
        <div div className='aboutparts'>
          <div div className='aboutpart'>
            <div className='aboutpartsText1'>
              <img src={design} alt='design' className='design1' />

              <h3 className='tools'>DESIGN</h3>
              <div className='content'>
                <p>I can design the site based on your needs and suggestions.I can<br />
                  also design the site from scratch and consult you during job.</p><div>
                </div>
              </div>
            </div>

            <div className='aboutparts'>
              <div className='aboutpart'>
                <div className='aboutpartsText2'>
                  <img src={development} alt='development' className='development' />

                  <h3 className='toolss'>DEVELOPMENT</h3>
                  <div className='content1'>
                    <p>I can design the site based on your needs and suggestions.I can<br />
                      also design the site from scratch and consult you during job.</p>
                  </div>
                </div>
              </div>
              <div className='aboutparts'>
                <div className='aboutpart'>
                  <div className='aboutpartsText3'>
                    <img src={maintenanceicon} alt='maintenance' className='maintenance' />

                    <h3 className='toolsss'>MAINTENANCE</h3>
                    <div className='content2'>
                      <p>I can design the site based on your needs and suggestions.I can<br />
                        also design the site from scratch and consult you during job.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
      <div className='endline' >
        <Link><button className='expandContents' onClick={toggleExpanded}> {expanded ? 'Explore Less' : 'Explore More'} </button></Link>

      </div>
      <div className='endline'>
        <img src={endline} alt='line' />
      </div>
    </section>


  )
}

export default Aboutme;