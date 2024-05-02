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
        <div>
            <section id="Skills">
                <h1 h1 className='title'>SKILLS</h1>
                <h3 className='skillsTitle'>USING NOW:</h3>
                <div>
                    <div div className='titleS1'>
                        <img src={HTML5} alt="HTML5" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>HTML5</p>
                    </div>
                    < div className='titleS2'>
                        <a className="skill1"></a>
                        <img src={css3} alt="css3" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>CSS3</p>
                        < div className='titleS3'>
                            <img src={Javascript} alt="Javascript" style={{ width: '65px', height: '65px' }}></img>
                            <p className='logoName'>JAVASCRIPT</p>

                            < div className='titleS4'>
                                <img src={reac} alt="React" style={{ width: '80px', height: '80px' }} ></img>
                                <p className='logoName'>REACT</p><br />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div div className='titleS5'>
                        <img src={mongodb} alt="mongodb" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>MONGODB</p>
                    </div>
                    < div className='titleS6'>
                        <a className="skill1"></a>
                        <img src={nodejs} alt="nodejs" style={{ width: '80px', height: '80px' }} ></img>
                        <p className='logoName'>NODEJS</p>
                        < div className='titleS7'>
                            <img src={git} alt="Jagitt" style={{ width: '70px', height: '70px' }}></img>
                            <p className='logoName'>GIT</p>

                            < div className='titleS8'>
                                <img src={figma} alt="figma" style={{ width: '80px', height: '80px' }} ></img>
                                <p className='logoName'>FIGMA</p><br />
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className='skillsTitle1'>LEARNING:</h3>
                <div>
                    <div className='learninglogo1'>
                        {/* <div className='logos1'> */}
                        <img src={SASS} alt="SASS" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>SASS</p>

                        <div className='learninglogo2'>
                            <img src={mysql} alt="mysql" style={{ width: '70px', height: '70px' }} ></img>
                            <p className='logoName'>MYSQL</p>

                            <div className='learninglogo3'>
                                <img src={bootstrap} alt="bootstrap" style={{ width: '60px', height: '60px' }}></img>
                                <p className='logoName'>BOOTSTRAP</p>

                                <div className='learninglogo4'>
                                    <img src={TYPESCRIPT} alt="TYPESCRIPT" style={{ width: '80px', height: '80px' }} ></img>
                                    <p className='logoName'>TYPESCRIPT</p><br />
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <h3 className='skillsTitle2'>OTHER SKILLS:</h3>
                <div>
                    {/* < div className='logos4'>
                        <img src={ANGIELSKI} alt="ANGIELSKI" style={{ width: '70px', height: '70px' }} ></img>
                        <p className='logoName'>ANGIELSKI</p> */}

                    {/* < div className='logos5'>
                            <a className="logo1"></a>
                            <img src={HISZPANSKI} alt="HISZPANSKI" style={{ width: '80px', height: '80px' }} ></img>
                            <p className='logoName'>HISZPANSKI</p> */}

                    < div className='logos6'>
                        <img src={CLang} alt="CLang" style={{ width: '70px', height: '70px' }}></img>
                        <p className='logoName'>C++</p>

                        < div className='logos7'>
                            <img src={Clanguage} alt="TYPESCRIPT" style={{ width: '60px', height: '60px' }} ></img>
                            <p className='logoName'>C</p><br />
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>

            </section>
        </div>


    )
}

export default Skills;
