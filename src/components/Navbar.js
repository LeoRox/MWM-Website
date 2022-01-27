import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Button } from './Button';
import DropdownAbout from './DropdownAbout';
import DropdownSupport from './DropdownSupport';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);
    const [dropdownabout, setDropdown] = useState(false);
    const [dropdownsupport, setDropdown2] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(true);
        } else {
          setDropdown(true);
        }
      };

      const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(true);
        } else {
          setDropdown2(true);
        }
      };


    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
        setDropdown(false);
        } else {
        setDropdown(false);
        }
    };

    const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
        setDropdown2(false);
        } else {
        setDropdown2(false);
        }
    };
    

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
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
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    COMWM 
                    <img src={require('./images/drmwm_logo_new.png')} alt='drmwm_logo'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        >
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                        {dropdownabout && <DropdownAbout/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/migrantministry' className='nav-links' onClick={closeMobileMenu}>
                            Migrant Ministry
                        </Link>
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnter2}
                    onMouseLeave={onMouseLeave2}
                    >
                        <Link to='/support' className='nav-links' onClick={closeMobileMenu}>
                            Support
                        </Link>
                        {dropdownsupport && <DropdownSupport/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>DONATE</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
