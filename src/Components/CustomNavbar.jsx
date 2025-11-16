import React, { useState } from 'react';
import pic from '../Components/Images/flipkart_icon.png'
import { checkLogin, clearLocalStorage, getCurrentUser } from "./Auth";
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function CustomNavbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();               // Clear user state + localStorage
    navigate('/login');     // Redirect manually
  };

   const phone = '7977949169';
   const message = encodeURIComponent('Hello team, I need support');
   const waLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <div>
      <Navbar color='light' expand="md" className='px-5 shadow-sm'>
        <NavbarBrand href="/" className="me-auto">
          <img src={pic} style={{ height: 50, width: 50 }}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {/* <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/store">Store</NavLink>
            </NavItem> */}
          <Nav className="me-auto" navbar>
            {getCurrentUser()?.role === 'ADMIN' && (
              <NavItem>
                <NavLink href="/store">Store</NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink href="/aboutUs">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Contact Us</DropdownToggle>
              <DropdownMenu right>
                {/* <DropdownItem href='joingWhatsApp'>Join Our WhatsApp Group</DropdownItem> */}
                <DropdownItem
                  tag="a"
                   href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our WhatsApp Group
                </DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav>
            {checkLogin() ? (
              <>
                <NavItem>

                  <NavLink href="/user/dashboard">{user?.userName}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/login"
                    onClick={(e) => {
                      logout();             // ✅ perform logout
                      navigate('/login');   // ✅ programmatic redirect (React Router)
                    }}
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">SignUp</NavLink>
                </NavItem>
              </>
            )}
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  )
}

export default CustomNavbar;

