import React from 'react'
import './skills.css';

import HTML5 from './../../assets/using now/HTML5.png';
import css3 from './../../assets/using now/css3.png';
import Javascript from './../../assets/using now/Javascript.png';
import reac from './../../assets/using now/React.png';
import mongodb from './../../assets/using now/mongodb.png';
import nodejs from './../../assets/using now/nodejs.png';
import git from './../../assets/using now/git.png';
import figma from './../../assets/using now/figma.png';
import SASS from './../../assets/learning/SASS.png';
import mysql from './../../assets/learning/mysql.png';
import bootstrap from './../../assets/learning/bootstrap.png';
import TYPESCRIPT from './../../assets/learning/TYPESCRIPT.png';
// import ANGIELSKI from './../../assets/other skills/ANGIELSKI.png';
// import HISZPANSKI from './../../assets/other skills/HISZPANSKI.png';
import CLang from './../../assets/other skills/CLang.png';
import Clanguage from './../../assets/other skills/Clanguage.png';
const Skills = () => {
    return (
        <div id='skills'>
                    <h1> <span className='titles'>SKILLS</span></h1>
            
                    <h3 className='skillsTitle'>USING NOW:</h3>
                    <div className='logoname1'>
                        <img src={HTML5} alt="HTML5" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>HTML5</p>
                        <img src={css3} alt="css3" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName' >CSS3</p>
                        <img src={Javascript} alt="Javascript" style={{ width: '65px', height: '65px' }}></img>
                        <p className='logoName'>JAVASCRIPT</p>
                        <img src={reac} alt="React" style={{ width: '80px', height: '80px' }} ></img>
                        <p className='logoName'>REACT</p>  </div>
                    <div className='logoname2'>
                        <img src={mongodb} alt="mongodb" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>MONGODB</p>

                        <img src={nodejs} alt="nodejs" style={{ width: '80px', height: '80px' }} ></img>
                        <p className='logoName'>NODEJS</p>

                        <img src={git} alt="Jagitt" style={{ width: '70px', height: '70px' }}></img>
                        <p className='logoName'>GIT</p>


                        <img src={figma} alt="figma" style={{ width: '80px', height: '80px' }} ></img>
                        <p className='logoName'>FIGMA</p>
                    </div>

                    <h3 className='skillsTitle1'>LEARNING:</h3>
                    <div className='logoname3'>
                        <img src={SASS} alt="SASS" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>SASS</p>


                        <img src={mysql} alt="mysql" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>MYSQL</p>


                        <img src={bootstrap} alt="bootstrap" style={{ width: '60px', height: '60px' }}></img>
                        <p className='logoName'>BOOTSTRAP</p>


                        <img src={TYPESCRIPT} alt="TYPESCRIPT" style={{ width: '80px', height: '80px' }} ></img>
                        <p className='logoName'>TYPESCRIPT</p>
                    </div>
                    <h3 className='skillsTitle2'>OTHER SKILLS:</h3>
                    <div className='logoname4'>

                        <img src={CLang} alt="CLang" style={{ width: '70px', height: '70px' }}></img>
                        <p className='logoName'>C++</p>

                        <img src={Clanguage} alt="TYPESCRIPT" style={{ width: '60px', height: '60px' }} ></img>
                        <p className='logoName'>C</p>
                    </div>

                
            </div>

       
    )
}

export default Skills;
