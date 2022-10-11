import React from 'react';
import './Footer.css';

function Footer () {
    var currYear = new Date().getFullYear();
  return (
    
    <section className="footer">
      <section className="footer-social-media">
        <img src="./pic.png" alt="Barika pic" /> CryptoMatrix developed by Barika Khalidi
        <a href="https://www.linkedin.com/in/barika-khalidi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Software Engineer Haydn
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            001barika@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            © Copyright {currYear} | All Rights Reserved | Privacy
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            99999999999
          </section>
          <section className="footer-info__contact">
            My Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
    </section>
  )

}

export default Footer;