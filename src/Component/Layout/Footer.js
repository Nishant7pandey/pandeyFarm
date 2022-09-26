import React from "react";
import "./Footer.css";
import { ReactComponent as Facebook } from "../UI/logo/Facebook.svg";
import { ReactComponent as Twitter } from "../UI/logo/Twitter.svg";
import { ReactComponent as Instagram } from "../UI/logo/Instagram.svg";

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-header'>
        <h3>Plants grow People</h3>
        <h3>Plants grow People</h3>
        <h3>Plants grow People</h3>
        <h3>Plants grow People</h3>
    </div>
    <div className="footer-container">
      <div className="footer-section footer-section-left">
        
        <div className="footer-section-column">
        <h6>ABOUT US</h6>
        <p>Our Story</p>
        <p>Contact Us</p>
        <p>Locate Stores</p>
        </div>
        <div className="footer-section-column">
        <h6>CUSTOMER CARE</h6>
        <p>Track Order</p>
        <p>Shipping Policy</p>
        <p>Terms and Conditions</p>
        </div>
        <div className="footer-section-column">
        <h6>Offers & Rewards</h6>
        <p>Plant Parent Club</p>
        <p>Pandey Coupons</p>
        <p>Terms and Conditions</p>
        </div>
      </div>
      <div className="footer-section footer-section-right">
        <div className="footer-section-column">
        <h6>SIGN UP FOR OUR NEWSLETTER</h6>
        <p>For plant care tips, our featured plant of<br></br> the week, exclusive offers and discounts</p>
        <p className='footer-section-column follow-us-container'>
          FOLLOW US ON SOCIAL MEDIA
        </p>
        <div className='social-logo'>
          <Facebook width='20px'/>
          <Twitter width='20px' />
          <Instagram width='20px' />
        </div>
        </div>
      </div>
    </div>
    <div className="footer-footer">Made ❤ by Nishant Pandey</div>
    </div>
  );
};

export default Footer;
