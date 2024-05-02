import React, { useState } from 'react'
import './portfolio.css';
// import portfolio1 from './../../assets/portfolio-1.png';
// import portfolio2 from './../../assets/portfolio-2.png';
// import portfolio3 from './../../assets/portfolio-3.png';
import portfolio from './../../assets/blackimg.jpg';
import portfolio8 from './../../assets/blackimg.jpg';
import portfolio7 from './../../assets/portfolio-7.png';
import portfolio9 from './../../assets/blackimg.jpg';
import portfolio6 from './../../assets/blackimg.jpg';
import portfolio4 from './../../assets/portfolio-4.png';
import portfolio11 from './../../assets/blackimg.jpg';
import pdf1 from './../../assets/portfoliopdf/project1.pdf';
import pdf4 from './../../assets/portfoliopdf/project4.pdf';
import pdf5 from './../../assets/portfoliopdf/project5.pdf';
import pdf9 from './../../assets/portfoliopdf/project9.pdf';
// import pdf1 from './../../assets/portfoliopdf/project1.pdf';
// import portfolio5 from './../../assets/portfolio-5.png';
const Portfolio = () => {
  // Define the initial projects state
  const [pdfList, setPdfList] = useState('');
  const fetchPdfList = () => {
    // Simulated fetch call to retrieve PDF list from an API or server
    // Replace this with your actual fetch call
    // For example:
    fetch('/api/pdfList')
      .then(response => response.json())
      .then(data => {
        setPdfList(data); // Update state with the retrieved PDF list
      })
      .catch(error => {
        console.error('Error fetching PDF list:', error);
      });
  };

  const handleShowAllClick = () => {
    fetchPdfList(); // Fetch the list of PDFs when the button is clicked
  };

  return (
    <div className='head'>
      <section id="works">
        <h1 className='workstitle' style={{
          fontfamily: 'Montserrat', fontsize: '30px', fontweight: '700', lineheight: '38.37px', letterspacing: ' 0.4354em',
          textalign: 'center'
        }} > PORTFOLIO</h1>
        <div className='worksImgs'>
          {/* <img src={portfolio1} alt="" className='workdImg'/> */}
          {/* <img src={portfolio2} alt="" className='workdImg'/> */}
          {/* <img src={portfolio3} alt="" className='workdImg'/> */}
          <img src={portfolio} alt="" className='workdImg' />
          <img src={portfolio8} alt="" className='workdImg' />
          <img src={portfolio7} alt="" className='workdImg' />
          <img src={portfolio9} alt="" className='workdImg' />
          <img src={portfolio6} alt="" className='workdImg' />
          <img src={portfolio4} alt="" className='workdImg' />
          <img src={portfolio11} alt="" className='workdImg' />
          {/* <img src={portfolio5} alt="" className='workdImg'/> */}
        </div>
        <h3><button className='all' onClick={handleShowAllClick}>Show All</button></h3>
        <div>
          {pdfList && (
            <ul>

              <li >
                <a href={pdf1} target="_blank" rel="noopener noreferrer">PDF1 </a>
                <a href={pdf4} target="_blank" rel="noopener noreferrer">PDF4 </a>
                <a href={pdf5} target="_blank" rel="noopener noreferrer">PDF5 </a>
                <a href={pdf9} target="_blank" rel="noopener noreferrer">PDF9 </a>
              </li>
              {/* ))} */}
            </ul>
          )}
        </div>

      </section>
    </div>
  )
}

export default Portfolio;
