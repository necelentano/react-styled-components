import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleMobileMenu }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [scrollNav]);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/">dolla</NavLogo>
            <MobileIcon onClick={toggleMobileMenu}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink to="about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="discover">Discover</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="signup">Sign Up</NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
