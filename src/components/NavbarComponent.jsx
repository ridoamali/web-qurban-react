// membuat efek scroll merubah warna
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import data dari file indexjs utk membuat links dan mapping
import { navLinks } from "../data/index.js";
import { NavLink } from "react-router-dom";

// membuat const dan usestate
const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  // menambahkan efek ketika discroll merubah bg color
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            QurbanYuk
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {/* mengganti navbar link bawaan menjadi router dom dan mapping */}
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center">
              <button className="btn btn-outline-primary rounded-1">Dapatkan Promo!</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
