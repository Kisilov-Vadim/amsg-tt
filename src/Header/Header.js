import React, {useState} from 'react';
import './Header.scss'; 
import { Link } from "react-scroll";

const Header = ({handleChange}) => {
  const [active, setActive] = useState(false); 

 return (
  <div className="header">
    <div className='wrapper'>
      <nav className='header__nav'>
        <a href="#"><img src="./img/logo.svg" alt='logo' /></a>
        <div className={`header__nav-links ${active ? 'show' : null}`}>
          <Link 
            to="fitures" 
            className='header__nav-link'
            activeClass="active"
            spy={true}
            smooth={true}
            duration= {700}
            onClick={() => setActive(false)}
          >
            Features
          </Link>
          <Link 
            to="works" 
            className='header__nav-link'
            activeClass="active"
            spy={true}
            smooth={true}
            duration= {700}
            onClick={() => setActive(false)}
          >
            Works</Link>
          <Link 
            to="team" 
            className='header__nav-link'
            activeClass="active"
            spy={true}
            smooth={true}
            duration= {700}
            offset={50}
            onClick={() => setActive(false)}
          >
            Our Team
          </Link>
          <Link 
            to="testimonials" 
            className='header__nav-link'
            activeClass="active"
            spy={true}
            smooth={true}
            duration= {700}
            offset={-100}
            onClick={() => setActive(false)}
          >
            Testimonials
          </Link>
          <Link 
            to="download" 
            className='header__nav-link'
            activeClass="active"
            spy={true}
            smooth={true}
            duration= {700}
            onClick={() => setActive(false)}
          >
            Download
          </Link>
        </div>
        <div className="header__burger" onClick={() => setActive(!active)}><img src="./img/burger.svg" alt="menu" /></div>
      </nav>
      <div className="header__info">
        <h1 className="header__info-title">Your Favorite One Page Multi Purpose Template</h1>
        <p className="header__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque nisl consectetur et.</p>
        <button className="header__info-button" onClick={handleChange}>Find Out More</button>
      </div>
    </div>   
  </div>  
  )
}

export default Header;
