import React from 'react';
import './Footer.scss';

const Footer = (props) => (
  <>
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer__location">
          <span className="footer__location-title">Location</span>
          <p className="footer__location-info">3481 Melrose Place
            Beverly Hills, CA 90210</p>
        </div>
        <div className="footer__share">
          <span className="footer__share-title">Share with Love</span>
          <div className="footer__share-social">
            <img src="./img/footer/facebook.png" alt="facebook" />
            <img src="./img/footer/twitter.png" alt="twitter" />
            <img src="./img/footer/linkedin.png" alt="linkedin" />
          </div>
        </div>
        <div className="footer__about">
          <span className="footer__about-title">About ActiveBox</span>
          <p className="footer__about-info">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
      </div>
    </div>
    <div className='copyright'>
      <div className="copyright__body">Copyright © 2015 ActiveBox. All Rights Reserved Made with &#10084; <span>by Kamal Chaneman</span></div>
    </div>
  </>
);

export default Footer;
