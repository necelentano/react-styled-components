import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
  SidebarRouterLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggleMobileMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleMobileMenu}>
      <Icon onClick={toggleMobileMenu}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleMobileMenu}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleMobileMenu}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleMobileMenu}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleMobileMenu}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarRouterLink to="/signin">Sign In</SidebarRouterLink>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
