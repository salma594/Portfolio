import React, {useContext} from 'react'
import './Contact.css'
import { themeContext } from "../../Context";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ygymsc7', 'template_kmf0mim', e.target, 'xkLFVlmUl7wQA3jS0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className="contact-form" id='contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode?'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1"
            style={{ background: "#ABF1FF94"}}
            ></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user"  placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Send" className="button"/>
            <div
            className='blur c-blur1'
            style={{ background: "var(--purple)"}}
            ></div>
            </form>
        </div>
    </div>

  )
}

export default Contact