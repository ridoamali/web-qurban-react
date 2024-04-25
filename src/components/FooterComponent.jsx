import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold ">Logo</h3>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi provident beatae velit, aliquam quo minus nulla saepe ex maxime!</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+6285755667711</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">ridoamali1@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="promo">Promo Qurban</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syarat">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info lainnya.</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-success rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <Link to="mailto:ridoamali1@gmail.com" target="_blank">
                <i className="fa fa-envelope"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/ridha-amaly-9631b11b3" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to="https://www.facebook.com/ridopt" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="https://www.twitter.com/ridoamali" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to="https://www.youtube.com/@ridoam" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} <span className="fw-bold">by Ridha Amaly</span>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
