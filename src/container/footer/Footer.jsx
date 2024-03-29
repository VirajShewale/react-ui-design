import React from 'react'
import './footer.css'
import gpt3logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the Future before others </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt="logo" />
          <p>New York k12 182 DK USA, All rights Reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Private Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>New York k12 182 DK USA</p>
          <p>085-111234</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p> &copy 2023 GPT-3. All rights reserved. </p>
      </div>
    </div>
  )
}

export default Footer