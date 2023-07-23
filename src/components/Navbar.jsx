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
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

import logo from "../assets/logo.png";

const Navbar = () => {
  //useState for mobile view
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid className="nav-content">
        <div className="logo-container">
          <MDBNavbarBrand href="/">
            <img
              src={logo}
              width="300px"
              height="auto"
              className="logo"
              alt=""
            />
          </MDBNavbarBrand>
        </div>

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
            {/* <MDBNavbarItem>
              <MDBNavbarLink href="#schedule" className="nav-links">
                Schedule
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            {/* <MDBNavbarItem>
              <MDBNavbarLink href="#speakers" className="nav-links">
                Speaker
              </MDBNavbarLink>
            </MDBNavbarItem> */}

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
