import React, { useState, useEffect } from 'react'
import './portfolio.css';

// import portfolio1 from './../../assets/portfolio-1.png';
// import portfolio2 from './../../assets/portfolio-2.png';
import portfolio3 from './../../assets/portfolio-3.png';
import portfolio7 from './../../assets/portfolio-4.png';
import portfolio8 from './../../assets/portfolio-4.png';
// import portfolio8 from './../../assets/blackimg.jpg';
import portfolio2 from './../../assets/portfolio-6.png';
// import portfolio9 from './../../assets/blackimg.jpg';
import portfolio6 from './../../assets/image 12.png';
import portfolio4 from './../../assets/Project.png';
// import portfolio11 from './../../assets/blackimg.jpg';
import cmdline from './../../assets/portfoliopdf/CMDProject1.pdf';
import pycharm from './../../assets/portfoliopdf/PYCHARM Project2.pdf';
import vscode from './../../assets/portfoliopdf/VS CODE Project3.pdf';
import Chrome from './../../assets/portfoliopdf/Chrome Inspect_Project4.pdf';
import Html from './../../assets/portfoliopdf/HTML Basics_PROJECT5.pdf';
import Javascript from './../../assets/portfoliopdf/JavaScript Basics_Project6.pdf';
import Css from './../../assets/portfoliopdf/CSS BASICS_project7.pdf';
import Python from './../../assets/portfoliopdf/Python_project8.pdf';
import Django from './../../assets/portfoliopdf/DJANGO_PROJECT9.pdf';
import Flask from './../../assets/portfoliopdf/FLASK Project10.pdf';
import MongoDB from './../../assets/portfoliopdf/MONGODB PROJECT11.pdf';
import Nodejs from './../../assets/portfoliopdf/Node.js_Project12.pdf';
import Reactjs from './../../assets/portfoliopdf/REACT.JS_PROJECT13.pdf';


import cmd from './../../assets/pdfimg/cmd.jpg';
import PYCHARM from './../../assets/pdfimg/PyCharm.png';
import VSCODE from './../../assets/pdfimg/vscode.jpg';
import chrome from './../../assets/pdfimg/Chrome.png';
import html from './../../assets/pdfimg/html.png';
import javascript from './../../assets/pdfimg/JavaScript.png';
import css from './../../assets/pdfimg/CSS.jpg';
import python from './../../assets/pdfimg/python.jpg';
import django from './../../assets/pdfimg/Django.png';
import flask from './../../assets/pdfimg/flask.png';
import mongoDB from './../../assets/pdfimg/mongodb.png';
import nodejs from './../../assets/pdfimg/nodejs.png';
import reactjs from './../../assets/pdfimg/reactjs.jpg';
// import { Category } from '@mui/icons-material';
import { Link } from 'react-scroll';


const Portfolio = () => {

  // const [projects, setProjects] = useState([]);
  // const[projects, setProjects, FilteredProjects, setFilteredProjects] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All ');

  // Project data
  const projectlist = [
    { id: 1, category: 'Others', pdf: cmdline, img: cmd, name: 'CMD' },
    { id: 2, category: 'Others', pdf: pycharm, img: PYCHARM, name: 'PYCHARM' },
    { id: 3, category: 'Others', pdf: vscode, img: VSCODE, name: 'VS CODE' },
    { id: 4, category: 'Others', pdf: Chrome, img: chrome, name: 'CHROME INSPECT' },

    { id: 5, Category: 'Frontend', pdf: Html, img: html, name: 'HTML BASICS' },
    { id: 6, category: 'Frontend', pdf: Css, img: css, name: 'CSS BASICS' },
    { id: 7, category: 'Frontend', pdf: Python, img: python, name: 'PYTHON BASICS' },
    { id: 8, category: 'Frontend', pdf: Reactjs, img: reactjs, name: 'REACT.JS' },

    { id: 9, category: 'Backend', pdf: Flask, img: flask, name: 'FLASK' },
    { id: 10, category: 'Backend', pdf: Javascript, img: javascript, name: 'JAVASCRIPT BASICS' },
    { id: 11, category: 'Backend', pdf: MongoDB, img: mongoDB, name: 'MONGODB' },
    { id: 12, category: 'Backend', pdf: Nodejs, img: nodejs, name: 'NODE.JS' },
    { id: 13, category: 'Backend', pdf: Django, img: django, name: 'DJANGO' },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectlist
    : projectlist.filter(project => project.category === selectedCategory);

  // old
  //  const handleFilterClick = (category) => {}
  //    if (category === 'All') {
  //       setSelectedCategory(projectsdata);
  //    } else {
  //      const filtered = projectsdata.filter(project=> project.category === category);
  //     FilteredProjects(filtered);
  //    }
  //  }
  return (
    <section id='portfolio'>
      < div className='bigcontainer'>
        <img src={portfolio6} alt="" className='workdImg' />
        <div className='workstitle' style={{
          fontfamily: 'Montserrat', fontsize: '30px', fontweight: '700', lineheight: '38.37px', letterspacing: ' 0.4354em',
          textalign: 'center'
        }} > PORTFOLIO</div>

        <div className="filtermenu" >
          <button onClick={() => setSelectedCategory('All')}><span className={`categories ${selectedCategory === 'All ' && 'active'}`} ><b>All</b></span></button>
          <button onClick={() => setSelectedCategory('Frontend')}><span className={`categories ${selectedCategory === 'Frontend' && 'active'}`}><b>Frontend</b></span></button>
          <button onClick={() => setSelectedCategory('Backend')}><span className={`categories ${selectedCategory === 'Backend' && 'active'}`}><b>Backend</b></span></button>
          <button onClick={() => setSelectedCategory('Others')}><span className={`categories ${selectedCategory === 'Others' && 'active'}`}><b>Others</b></span></button>
        </div>

        <div className="portfolio">
          {/* <div className="card1">
            <div class="card-content">
              <img src={cmd} style={{ width: '70px', height: '70px' }} />
              <b>COMMANDLINE</b>
              <a href={cmdline} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card1">
            <div class="card-content">
              <img src={PYCHARM} style={{ width: '70px', height: '70px' }} />

              <h3>PYCHARM</h3>
              <a href={pycharm} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card1">
            <div class="card-content">
              <img src={VSCODE} style={{ width: '70px', height: '70px' }} />

              <h3>VSCODE</h3>
              <a href={vscode} target="_blank">View PDF</a>
            </div>
          </div>

          <div className="card1">
            <div class="card-content">
              <img src={chrome} style={{ width: '80px', height: '70px' }} />

              <h3>CHROME</h3>
              <a href={Chrome} target="_blank">View PDF</a>
            </div>
          </div>
          <br />

          <div className="card2">
            <div class="card-content">
              <img src={html} style={{ width: '70px', height: '70px' }} />

              <h3>HTML5</h3>
              <a href={Html} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card2">
            <div class="card-content">
              <img src={javascript} style={{ width: '70px', height: '70px' }} />

              <h3>JAVASCRIPT</h3>
              <a href={Javascript} target="_blank">View PDF</a>
            </div>
          </div>

          <div className="card2">
            <div class="card-content">
              <img src={css} style={{ width: '70px', height: '70px' }} />

              <h3>CSS</h3>
              <a href={Css} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card2">
            <div class="card-content">
              <img src={python} style={{ width: '70px', height: '70px' }} />

              <h3>PYTHON</h3>
              <a href={Python} target="_blank">View PDF</a>
            </div>
          </div>
          <br />
          <br />
          <div className="card3">
            <div class="card-content">
              <img src={django} style={{ width: '70px', height: '70px' }} />

              <h3>DJANGO</h3>
              <a href={Django} target="_blank">View PDF</a>
            </div>
          </div>

          <div className="card3">
            <div class="card-content">
              <img src={flask} style={{ width: '70px', height: '70px' }} />

              <h3>FLASK</h3>
              <a href={Flask} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card3">
            <div class="card-content">
              <img src={mongoDB} style={{ width: '70px', height: '70px' }} />

              <h3>MONGODB</h3>
              <a href={MongoDB} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card3">
            <div class="card-content">
              <img src={nodejs} style={{ width: '70px', height: '70px' }} />

              <h3>NODEJS</h3>
              <a href={Nodejs} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card3">
            <div class="card-content">
              <img src={reactjs} style={{ width: '70px', height: '70px' }} />

              <h3>REACTJS</h3>
              <a href={Reactjs} target="_blank">View PDF</a>
            </div>
          </div> */}

          <div className="projectbox">
            {filteredProjects.map(project => (
              <div className="project-item" key={project.id}>
                <a href={project.pdf} target="_blank" rel="noopener noreferrer">

                  <img src={project.img} alt={project.name} style={{
                    width: '250px',
                    height: '30vh',
                    display: 'flex',
                    justifycontent: 'space-between',
                    aligncontent: 'center', boxSizing: 'border-box',
                    border: '2px solid gray',
                    marginTop: '5px'
                  }} />{project.name}</a>

                 {/* <a href={project.pdf} target="_blank" />View PDF</div>  */}
              // </div>
            ))}
            
          </div>
          {/* </div>  */}

          {/* {['All', 'Frontend', 'Backend', 'Others'].map((category) => (
    <a key={category} className='filter-item'>
      <button  onClick={() =>handleFilterClick(category)}
      className={category ===selectedCategory ? 'active' : ''}> {category }</button>
    </a>
  ))} */}
          {/* </div> */}

          {/* <div className="card1">
            <img src={cmd} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project1</h3>
              <a href={cmdline} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card1">
            <img src={PYCHARM} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project2</h3>
              <a href={pycharm} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card1">
            <img src={VSCODE} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project3</h3>
              <a href={vscode} target="_blank">View PDF</a>
            </div>
          </div>

          <div className="card1">
            <img src={chrome} style={{ width: '80px', height: '70px' }} />
            <div class="card-content">
              <h3>Project4</h3>
              <a href={Chrome} target="_blank">View PDF</a>
            </div>
          </div>
          <br />
          <div className="card2">
            <img src={html} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project5</h3>
              <a href={Html} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card2">
            <img src={javascript} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project6</h3>
              <a href={Javascript} target="_blank">View PDF</a>
            </div>
          </div>

          <div className="card2">
            <img src={css} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project7</h3>
              <a href={Css} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card2">
            <img src={python} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project8</h3>
              <a href={Python} target="_blank">View PDF</a>
            </div>
          </div>
          <br />
          <div className="card3">
            <img src={django} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project9</h3>
              <a href={Django} target="_blank">View PDF</a>
            </div>
          </div>

          <div className="card3">
            <img src={flask} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project10</h3>
              <a href={Flask} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card3">
            <img src={mongoDB} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project11</h3>
              <a href={MongoDB} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card3">
            <img src={nodejs} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project12</h3>
              <a href={Nodejs} target="_blank">View PDF</a>
            </div>
          </div>
          <div className="card3">
            <img src={reactjs} style={{ width: '70px', height: '70px' }} />
            <div class="card-content">
              <h3>Project13</h3>
              <a href={Reactjs} target="_blank">View PDF</a>
            </div>
          </div> */}
          {/* </div> */}



          {/* Portfolio Draft



 const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Define your projects data. Each project can have a category property.
  const projectsData = [
    { id: 1,
      category: 'Others', 
      pdfUrl: "", 
      imgUrl:""
    },
    { id: 2, category: 'Others', pdfUrl:"", imgUrl:""},
    { id: 3, category: 'Others', pdfUrl:"" ,imgUrl:""},
    { id: 4, category: 'Others', pdfUrl:"", imgUrl:""},
    { id: 5, category: 'Frontend', pdfUrl:"" ,imgUrl:""},
    { id: 6, category: 'Frontend', pdfUrl:"", imgUrl:""},
    { id: 7, category: 'Frontend', pdfUrl:"", imgUrl:""},
    { id: 8, category: 'Backend', pdfUrl:"", imgUrl:""},
    { id: 9, category: 'Frontend', pdfUrl:"", imgUrl:""},
    { id: 10, category: 'Backend', pdfUrl: "", imgUrl:"" },
    { id: 11, category: 'Backend', pdfUrl: "", imgUrl:""},
    { id: 12, category: 'Backend', pdfUrl: "", imgUrl:""},
    { id: 13, category: 'Database', pdfUrl: "", imgUrl:""},

    // Add more projects with their respective categories and PDF URLs
  ];

  const filteredProjects = selectedCategory === 'All Categories'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    
    <div className="project-gallery" id='projects'>
      <div className="project-title">
      <h2>Projects</h2>
      <p>
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor. Do Amet
        Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </p>
      </div>

      <div className="categories">
        <button onClick={() => setSelectedCategory('All Categories')}><span className={`category ${selectedCategory === 'All Categories' && 'active'}`}><b>All Categories</b></span></button>
        <button onClick={() => setSelectedCategory('Frontend')}><span className={`category ${selectedCategory === 'Frontend' && 'active'}`}><b>Frontend</b></span></button>
        <button onClick={() => setSelectedCategory('Backend')}><span className={`category ${selectedCategory === 'Backend' && 'active'}`}><b>Backend</b></span></button>
        <button onClick={() => setSelectedCategory('Database')}><span className={`category ${selectedCategory === 'Database' && 'active'}`}><b>Database</b></span></button>
        <button onClick={() => setSelectedCategory('Others')}><span className={`category ${selectedCategory === 'Ide' && 'active'}`}><b>Others</b></span></button>
      </div>

      <div className="project-grid">
        {filteredProjects.map(project => (
          <div className="project-item" key={project.id}>
          <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer"><img src={project.imgUrl} alt={project.name} />{project.name}</a>
          <a href={project.pdfUrl} target="_blank" />View PDF</a>
        </div>
        ))}
      </div>
    </div>


*/}


        </div>

        <div className='bottomcontainer'>
          <div className='imgcontainer1'>
            {/* <img src={portfolio4} alt=""  /> */}
            {/* <img src={portfolio7} alt=""  /> */}
            {/* <img src={portfolio2} alt=""  />
    <img src={portfolio8} alt=""  />
    <img src={portfolio8} alt=""   />
    <img src={portfolio3} alt=""   />
     <img src={portfolio8} alt=""   /> */}

          </div>
        </div>
      </div>

    </section>


  )
}

export default Portfolio;






//   // Define the initial projects state
{/* //   const [pdfList, setPdfList] = useState('');
//   const fetchPdfList = () => { */}
//     // Simulated fetch call to retrieve PDF list from an API or server
//     // Replace this with your actual fetch call
//     // For example:
{/* //     fetch('/api/pdfList')
//       .then(response => response.json())
//       .then(data => { */}
{/* //         setPdfList(data); // Update state with the retrieved PDF list
//       })
//       .catch(error => { */}
//      /
{/* //     fetchPdfList(); // Fetch the list of PDFs when the button is clicked */ }
{/* //   }; */ }

{/* //   return ( */ }
{/* //     /<div className='head'> */ }
{/* //       <section id="works"> */ }
{/* //         <h1 className='workstitle' style={{ */ }
{/* //           fontfamily: 'Montserrat', fontsize: '30px', fontweight: '700', lineheight: '38.37px', letterspacing: ' 0.4354em', */ }
{/* //           textalign: 'center' */ }
{/* //         }} > PORTFOLIO</h1> */ }
{/* //         <div className='worksImgs'> */ }
//           {/* <img src={portfolio1} alt="" className='workdImg'/> */}
//           {/* <img src={portfolio2} alt="" className='workdImg'/> */}
//           {/* <img src={portfolio3} alt="" className='workdImg'/> */}
{/* //           <img src={portfolio} alt="" className='workdImg' />
//           <img src={portfolio8} alt="" className='workdImg' />
//           <img src={portfolio7} alt="" className='workdImg' />
//           <img src={portfolio9} alt="" className='workdImg' />
//           <img src={portfolio6} alt="" className='workdImg' />
//           <img src={portfolio4} alt="" className='workdImg' />
//           <img src={portfolio11} alt="" className='workdImg' /> */}
//           {/* <img src={portfolio5} alt="" className='workdImg'/> */}
//         </div>
//         <h3><button className='all' onClick={handleShowAllClick}>Show All</button></h3>
//         <div>
//           {pdfList && (
//             <ul>

//               <li >
//                 <a href={pdf1} target="_blank" rel="noopener noreferrer">PDF1 </a>
//                 <a href={pdf4} target="_blank" rel="noopener noreferrer">PDF4 </a>
//                 <a href={pdf5} target="_blank" rel="noopener noreferrer">PDF5 </a>
//                 <a href={pdf9} target="_blank" rel="noopener noreferrer">PDF9 </a>
//               </li>
//               {/* ))} */}
//             </ul>
//           )}
//         </div>

//       </section>
//     </div>
//   )
// }

// export default Portfolio;
