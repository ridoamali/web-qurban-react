import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";
import Countdown from "../components/Countdown";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    // Landing Awal
    <div className="homepage">
      {/* Hero Homepage */}
      <header className="w-100 min-vh-100">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5 overflow-hidden">
            {/* TES COUNTDOWN */}
            <div className="hitungmundur pt-5 animate__animated animate__fadeInUp animate__delay-0.5s">
              <Countdown />
            </div>
            <Col lg="6">
              <h1 className="my-4 animate__animated animate__fadeInUp animate__delay-1s">
                Mari Tunaikan
                <br /> <span>Qurban</span> <br /> Untuk Keluarga
              </h1>
              <p className="my-4 animate__animated animate__fadeInUp animate__delay-1s">Hari raya Idhul Adha sudah semakin dekat, manfaatkan momen ini untuk melaksanakan Qurban sebagai bekal Akhirat.</p>
              <button className="btn btn-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/promo")}>
                Promo Spesial
              </button>
              <button className="btn btn-outline-primary btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/testimonial")}>
                Testimoni
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      {/* Kelas terbaru section */}
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Pilih Hewan Qurbanmu</h1>
              <p className="text-center">Tebarkan kebaikan qurbanmu hingga pelosok negeri.</p>
            </Col>
          </Row>
          {/* Section kelas terbaru */}
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <img src={kelas.image} alt="pilih hewan qurbanmu" className="w-100 mb-5 rounded-top" />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-4 px-3">{kelas.title}</h5>
                  <p className="mb-1 px-3 text-secondary">{kelas.detil}</p>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-dark fw-bold">{kelas.price}</p>
                    <button className="btn btn-success rounded-1">{kelas.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-success rounded-5 btn-lg" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/promo")}>
                Lihat Semua Promo <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Section Testimonial */}
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          {/* swiper */}
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* Section FAQ */}
      <FaqComponent />
      {/* Section FAQ */}
    </div>
  );
};

export default HomePage;
