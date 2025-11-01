import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart, } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import './Header.css';

const Header = ({search, searchInput}) => {
  return (
    <header className="header">
        <div className='main-head-con'>
            <p>Lorem ipsum dolar</p>
            <p>Lorem ipsum dolar</p>
            <p>Lorem ipsum dolar</p>
        </div>
        <div className="logo">
            <img src = "https://tse1.mm.bing.net/th/id/OIP.4dHjECubDKOUm6F8mZ6JfAHaD4?pid=Api&P=0&h=180" alt = "" width="150" />
          <h1>LOGO</h1>
          <div className="header-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search" value = {searchInput} onChange={(e) => search(e.target.value)} />
            </div>
            <IoMdHeartEmpty/>
            <MdOutlineShoppingCart/>
            <IoMdPerson />
            <select>
            <option value="eng">ENG</option>
            <option value="hin">HINDI</option>
            <option value="tel">TELUGU</option>
            <option value="kan">KANNADA</option>
          </select>
          
          
        </div>
        </div>
      <div className="header-content">        
        <nav className="nav-menu">
          <ul>
            <li><a href="#shop">SHOP</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#stories">STORIES</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
      <hr className="divider"/>
      <div className='header-bottom'>
        <h1 className='headdd'>DISCOVER OUR PRODUCTS</h1>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.<br/> scelerisque.. Dolor integer scelerisque nibh amet  mi ut elemetum dolor.</p>
      </div>
    </header>
  );
};

export default Header;