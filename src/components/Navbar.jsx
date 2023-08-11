import React, { useState } from "react";

//Import MD Ui kits
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import logo from "../assets/IO-logo.svg";

const Navbar = () => {
  //useState for mobile view
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar className="p-0" expand="lg" light bgColor="white">
      <MDBContainer fluid className="nav-content">
          <MDBNavbarBrand href="/">
            <img
              src={logo}
              className="logo"
              height="60"
              alt="Homepage Link Logo"
            />
          </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink href="#about" className="nav-links">
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href="#schedule" className="nav-links">
                Schedule
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink href="#speakers" className="nav-links">
                Speaker
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="#partners" className="nav-links">
                Partners
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#team" className="nav-links">
                Team
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#faqs" className="nav-links">
                FAQs
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
