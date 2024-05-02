import React, { useRef } from 'react';
import './contact.css';

import endlines from './../../assets/separatorBlack 2.png';
// import emailjs from '@emailjs/browser';
const Contact = () => {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_xk1e5ju', 'template_yr9mcbg', form.current, {
  //       publicKey: 's52il_5K7yLXU2m-LVBi0',
  //     })
  //     .then(
  //       () => {
  //         console.log('result.text');
  //         e.target.reset();
  //         alert("Email sent!");
  //       },
  //       (error) => {
  //         console.log('error.text');
  //       },
  //     );
  // };

  return (
    <section id='details'>
      <h1 div className='contactTitle'>CONTACT</h1>
      <div className='contactform'>

        <div className='contactDesc'>
          <span className='para'>Please feel to leave me a message with any question,inquires, or feedback you may have.  We look <br /><br /><p /></span>
          <span className='onelinefrompara'>forward to hearing from you!</span>
          <div>
          <img src={endlines} alt='line' className='end' />
          </div>
        </div>
        {/* <div className="end"></div> */}
        <div>
          <div>
            <form className='fielddata'  >
              <textarea input type="text" className='name1' placeholder="ENTER YOUR NAME*" /><br />
              < textarea input type="email" className='name2' placeholder="ENTER YOUR EMAIL*"  /><br />
              < textarea input type="phone" className='name3' placeholder="ENTER YOUR PHONE NUMBER*"  /><br />
              <textarea input type="address" className='name4' placeholder="ENTER YOUR ADDRESS*"  /><br />
              <t className="name5" type="message" rows="5" placeholder='YOUR MESSAGE*'></t><br />
              <button type="submit" value="send" className='submitbtn'>SUBMIT</button>
              <div className='links'>
              {/* name='your_name' 
              name='your_email'
              name='your_phone'
              name='your_address' */}
              {/* ref={form} onSubmit={sendEmail} */}
              </div>

            </form>
          </div>
        </div>
      </div>
      
    </section>

  )
}

export default Contact;
