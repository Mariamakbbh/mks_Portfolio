import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

export const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    }else {
        setButton(true);
    }
};

useEffect(() => {
    showButton();
}, [])

window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'> 
            <Link to={"/"} className='navbar-logo' onClick={closeMobileMenu}>
                <i className="fa-duotone fa-m"></i>
                .
                <i className="fa-brands fa-kickstarter-k"></i>
                .
                <i className="fa-duotone fa-s"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to={"/mks_Portfolio"} className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/aboutme"} className='nav-links' onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/getintouch"} className='nav-links' onClick={closeMobileMenu}>
                        Get in Touch
                    </Link>
                </li>

                <li>
                    <Link to='/projects' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Projects</Button>}
        </div>
    </nav>
    </>
  )
}
