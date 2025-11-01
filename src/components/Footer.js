import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-top'>
        <div className='left-top'>
          <h4>BE THE FIRST TO KNOW</h4>
          <br/>
          <p className='bottom-color'>Sign up for updates from metta muse.</p>
          <br/>
          <div className='input-subscribe'>
            <input type="text" placeholder="Enter your email" />
            <button className='subscribe-btn'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='right-top'>
          <h4>CONTACT US</h4>
          <br/>
          <p className='bottom-color'>+44 221 133 5360</p>
          <p className='bottom-color'>customercare@meffamuse.com</p>
          <br/>
          <h4>CURRENCY</h4>
          <br/>
          <h4><img src = "https://tse1.mm.bing.net/th/id/OIP.k8Bk-rwNnOYKkngxFYtlAAHaHa?pid=Api&P=0&h=180" alt ="" width="20"/>.USD</h4>
          <br/>
          <p className='bottom-color'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr className='line'/>
      <div className="footer-content">
        <div className="footer-section">
          <h4>metta muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#Orders & Shipping">Orders & Shipping</a></li>
            <li><a href="#Join/Login as a Seller">Join/Login as a Seller</a></li>
            <li><a href="#Payment & Refunds">Payment & Refunds</a></li>
            <li><a href="#Return & Refunds">Return & Refunds</a></li>
            <li><a href="#FAQs">FAQs</a></li>
            <li><a href="#Privacy Policy">Privacy Policy</a></li>
            <li><a href="#Terms & Conditions">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <AiOutlineInstagram className='icons'/>
          <TbBrandLinkedin className='icons'/>
          <br/>
          <br/>
          <h4>metta muse ACCEPTS</h4>
          <div className='payments-con'>
          <img src = "https://static.vecteezy.com/system/resources/previews/039/865/675/non_2x/mastercard-visa-apple-pay-google-pay-popular-payment-systems-finance-system-app-bank-card-illustration-free-vector.jpg" className='pays' alt = "" width="230"/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;