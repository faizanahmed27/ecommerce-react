import React, { useState } from "react";
import pic from "../Components/Images/flipkart_icon.png";
import { checkLogin, getCurrentUser } from "./Auth";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

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
} from "reactstrap";

function CustomNavbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const phone = "7977949169";
  const message = encodeURIComponent("Hello team, I need support");
  const waLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <div>
      {/* Gradient top strip */}
      <div className="nav-top-strip"></div>

      <Navbar expand="md" className="main-navbar px-5">
        <NavbarBrand href="/" className="me-auto d-flex align-items-center gap-2">
          <img src={pic} className="nav-logo" alt="logo" />
          {/* <span className="brand-title">E-Commerce Admin</span> */}
        </NavbarBrand>

        <NavbarToggler onClick={toggle} className="custom-toggler" />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {getCurrentUser()?.role === "ADMIN" && (
              <NavItem>
                <NavLink href="/store" className="sidebar-link-item">
                  Store
                </NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink href="/aboutUs" className="sidebar-link-item">
                About
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="sidebar-link-item">
                Contact
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag="a" href={waLink} target="_blank" rel="noopener noreferrer">
                  Join WhatsApp Group
                </DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          {/* Right Side Auth Section */}
          <Nav className="auth-nav gap-2">
            {checkLogin() ? (
              <>
                <NavItem>
                  <Link to="/user/dashboard" className="text-decoration-none">
                    <span className="user-badge">{user?.userName || "User"}</span>
                  </Link>
                </NavItem>

                <NavItem>
                  <button
                    className="logout-button"
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                  >
                    Logout
                  </button>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/login" className="sidebar-link-item">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup" className="sidebar-link-item">
                    Sign Up
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>

      {/* ✅ Custom Styling */}
      <style>{`
        .nav-top-strip {
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #ff758c, #ff7eb3, #6a82fb);
          box-shadow: 0 0 12px rgba(106,130,251,0.6);
        }

        .main-navbar {
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border-radius: 0 0 18px 18px;
          position: relative;
          z-index: 900;
        }

        .nav-logo {
          height: 46px;
          width: 46px;
          border-radius: 10px;
          transition: 0.3s;
        }
        .nav-logo:hover {
          transform: rotate(-6deg) scale(1.08);
        }

        .brand-title {
          font-size: 18px;
          font-weight: 700;
          background: linear-gradient(135deg, #1d3557, #457b9d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sidebar-link-item {
          font-weight: 600;
          font-size: 15px;
          color: #444;
          transition: 0.2s;
          position: relative;
        }

        .sidebar-link-item::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 3px;
          left: 0;
          bottom: 4px;
          background: #457b9d;
          transition: 0.3s ease;
          border-radius: 2px;
        }

        .sidebar-link-item:hover::after {
          width: 100%;
        }

        .user-badge {
          padding: 6px 14px;
          background: #e3ebf2;
          color: #1d3557;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
        }

        .logout-button {
          padding: 7px 18px;
          background: #1d3557;
          border: none;
          border-radius: 10px;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          transition: 0.2s;
        }
        .logout-button:hover {
          background: #457b9d;
          transform: translateY(-3px);
        }

        .custom-toggler {
          border: none;
        }

        @media (max-width: 768px) {
          .main-navbar {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .brand-title {
            font-size: 16px;
          }
          .auth-nav {
            margin-top: 14px;
          }
        }
      `}</style>
    </div>
  );
}

export default CustomNavbar;
