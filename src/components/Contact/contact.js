import React, { useRef } from 'react';
import './contact.css';
import { Link } from 'react-scroll';
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
    <section id='contact'>
      <div className='alldata'>
        <h1><span div className='contactTitle'>CONTACT</span></h1>
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
            <div className='fielddata'>
              <form   >
                <input type="text" className='name' placeholder="ENTER YOUR NAME" required/><br />
                < input type="email" className='name' placeholder="ENTER YOUR EMAIL" required /><br />
                <  input type="phone" className='name' placeholder="ENTER YOUR PHONE NUMBER" required /><br />
                < input type="address" className='name' placeholder="ENTER YOUR ADDRESS"  required/><br />
                <textarea className="name" type="message" rows="5" placeholder='YOUR MESSAGE' required></textarea><br />
                <button className='submitbtn' type="submit" value="send" >SUBMIT</button>
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
      </div>
    </section>


  )
}

export default Contact;
