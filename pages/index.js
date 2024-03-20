import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Service from "../pages/api/Service";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const teamSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    fade: true,
    cssEase: "linear",
  };

  const HeroNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "linear-gradient(135deg, #4e8dff, #2563eb)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          lineHeight: "40px",
          textAlign: "center",
          cursor: "pointer",
          color: "white",
          fontSize: "20px",
          position: "absolute",
          top: "50%",
          right: "100px",
          transform: "translateY(-50%)",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        onClick={onClick}
      >
        &rarr;
      </div>
    );
  };
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "linear-gradient(135deg, #4e8dff, #2563eb)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          lineHeight: "40px",
          textAlign: "center",
          cursor: "pointer",
          color: "white",
          fontSize: "20px",
          position: "absolute",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        onClick={onClick}
      >
        &rarr;
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          background: "linear-gradient(135deg, #4e8dff, #2563eb)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          lineHeight: "40px",
          textAlign: "center",
          cursor: "pointer",
          color: "white",
          fontSize: "20px",
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        onClick={onClick}
      >
        &larr;
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await response.json();
        setUserData(data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loader ? (
        <div id="loading">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <div className="object" id="object_one"></div>
              <div className="object" id="object_two"></div>
              <div className="object" id="object_three"></div>
              <div className="object" id="object_four"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* <!--======  OFFCANVAS-SEARCH PART START ======--> */}
          <div className="offcanvas-search-area">
            <form action="#">
              <input type="text" placeholder="search" />
              <span className="close-bar">
                <i className="fas fa-times"></i>
              </span>
            </form>
          </div>
          {/* <!--======  HEADER PART START ======--> */}
          <header id="home">
            <div className="top-header-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="top-header-content">
                          <span>{userData?.user?.about?.name}</span>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="top-header-content">
                          <span>
                            <i className="fas fa-phone"></i>
                            {userData?.user?.about?.phoneNumber}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="top-header-content">
                          <span>
                            <i className="fas fa-map-marker-alt"></i>
                            {userData?.user?.about?.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 text-right">
                    <ul className=" d-flex">
                      {userData?.user?.social_handles.map((social, index) => (
                        <li
                          key={index}
                          className="mr-2"
                          style={{
                            borderBottom: "1px solid #769cef",
                            paddingBottom: "5px",
                            display: "inline-block",
                          }}
                        >
                          <a href={social.url} title={social.platform}>
                            <img
                              className=""
                              src={social.image.url}
                              alt={social.name}
                              style={{
                                marginBottom: "5px",
                                width: "55px",
                                height: "55px",
                                padding: "15px",
                              }}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bottom-header-area"
              style={{
                position: isSticky ? "fixed" : "relative",
                top: isSticky ? "0" : "auto",
                left: isSticky ? "0" : "auto",
                right: isSticky ? "0" : "auto",
                zIndex: isSticky ? "1000" : "auto",
                backgroundColor: isSticky
                  ? "rgba(0, 0, 0, 0.5)"
                  : "transparent",
                zIndex: isSticky ? "1000" : "auto",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="logo">
                      <a href="/">
                        <img src="assets/images/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12 text-right ">
                    <button
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        borderRadius: "20px",
                        border: "none",
                        cursor: "pointer",
                        opacity: windowWidth <= 992 ? 1 : 0,
                        pointerEvents: windowWidth <= 992 ? "auto" : "none",
                        fontSize: windowWidth <= 576 ? "18px" : "24px",
                      }}
                      onClick={toggleMenu}
                    >
                      {isMenuOpen ? <>&#8801;</> : <>&#8801;</>}{" "}
                    </button>

                    {/* Mobile menu */}
                    {isMenuOpen && (
                      <div
                        style={{
                          backgroundColor: "#000000",
                          borderRadius: "8px",
                          padding: "40px",
                          marginTop: "8px",
                          textAlign: "center",
                        }}
                      >
                        <nav>
                          <ul style={{ listStyle: "none", padding: 0 }}>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#home"
                              >
                                Home
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#About"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#Services"
                              >
                                Services
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#portfolio"
                              >
                                Projects
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#team"
                              >
                                Skills
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#testimonial"
                              >
                                Testimonial
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#Blog"
                              >
                                Professional Journey
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#price"
                              >
                                Price
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                href="#Contact"
                              >
                                Contact
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    )}

                    <div className="header-search">
                      <span className="search-btn">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                    <div className="main-menu">
                      <nav>
                        <ul>
                          {/* Desktop menu items */}
                          <li>
                            <a className="active" href="#home">
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="#About">About</a>
                          </li>
                          <li>
                            <a href="#Services">Services</a>
                          </li>
                          <li>
                            <a href="#portfolio">Projects</a>
                          </li>
                          <li>
                            <a href="#team">Skills</a>
                          </li>
                          <li>
                            <a href="#testimonial">Testimonial</a>
                          </li>
                          <li>
                            <a href="#Blog">Professional Journey</a>
                          </li>
                          <li>
                            <a href="#price">Price</a>
                          </li>
                          <li>
                            <a href="#Contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Slider
            {...settings}
            nextArrow={<HeroNextArrow />}
            prevArrow={<PrevArrow />}
          >
            <div
              className="single-hero-area hero-bg-1 bg_cover"
              data-scroll-area="true"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="hero-area-content">
                      <p className="hero-para">
                        {userData?.user?.about?.title} <br />
                        {userData?.user?.about?.exp_year} Years of Experience
                      </p>
                      <h1 className="hero-heading">
                        {" "}
                        {userData?.user?.about?.quote}
                      </h1>
                      <div className="hero-area-menu">
                        <ul>
                          <li>
                            <a href="#">Design</a>
                          </li>
                          <li>
                            <a href="#">Marketing</a>
                          </li>
                          <li>
                            <a href="#">Development</a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn hero-btn">
                        get Started <i className="fa fa-arrow-right"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=iogabydg2y0"
                        className="video-btn video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-scrolli">
                <a smooth href="#s">
                  <span className="fa fa-arrow-down"></span>
                </a>
              </div>
            </div>

            <div
              className="single-hero-area hero-bg-2 bg_cover"
              data-scroll-area="true"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="hero-area-content">
                      <p className="hero-para">
                        {userData?.user?.about?.title} <br />
                        {userData?.user?.about?.exp_year} Years of Experience
                      </p>
                      <h1 className="hero-heading">
                        {" "}
                        {userData?.user?.about?.quote}
                      </h1>
                      <div className="hero-area-menu">
                        <ul>
                          <li>
                            <a href="#">Design</a>
                          </li>
                          <li>
                            <a href="#">Marketing</a>
                          </li>
                          <li>
                            <a href="#">Development</a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn hero-btn">
                        get Started <i className="fa fa-arrow-right"></i>
                      </a>
                      <a href="#" className="video-btn video-popup">
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-scrolli">
                <a smooth href="#s">
                  <span className="fa fa-arrow-down"></span>
                </a>
              </div>
            </div>

            <div
              className="single-hero-area hero-bg-3 bg_cover"
              data-scroll-area="true"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="hero-area-content">
                      <p className="hero-para">
                        {userData?.user?.about?.title} <br />
                        {userData?.user?.about?.exp_year} Years of Experience
                      </p>
                      <h1 className="hero-heading">
                        {" "}
                        {userData?.user?.about?.quote}
                      </h1>
                      <div className="hero-area-menu">
                        <ul>
                          <li>
                            <a href="#">Design</a>
                          </li>
                          <li>
                            <a href="#">Marketing</a>
                          </li>
                          <li>
                            <a href="#">Development</a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn hero-btn">
                        get Started <i className="fa fa-arrow-right"></i>
                      </a>
                      <a href="#" className="video-btn video-popup">
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-scrolli">
                <a smooth href="#s">
                  <span className="fa fa-arrow-down"></span>
                </a>
              </div>
            </div>
          </Slider>
          {/* <!--======  SERVICE-CATEGORIES PART START ======--> */}
          <Service></Service>
          {/* about us section start */}
          <section className="about-us-area" id="About">
            <div className="container">
              <div className="row">
                <div className="about-us-img">
                  <img
                    src={userData?.user?.about?.avatar?.url}
                    alt=""
                    className="about-img-1"
                  />
                </div>
                <div className="col-lg-5 offset-lg-7">
                  <div className="about-us-content">
                    <div className="section-title about-us-title">
                      <p className="section-para">
                        <span></span>About Me
                      </p>
                      <h1> {userData?.user?.about?.subTitle}</h1>
                    </div>
                    <div className="about-us-text">
                      <span>A</span>
                      <p>{userData?.user?.about?.description}</p>
                    </div>
                    <ul className="about-menu">
                      <li>
                        <a href="#">
                          <i className="fas fa-check"></i>Web Design
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-check"></i>Web Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-check"></i>Graphics Arts
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-check"></i>Product Marketing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-check"></i>User Research
                        </a>
                      </li>
                    </ul>
                    <a href="#Contact" className="btn about-btn">
                      Contact Me <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* about us section end */}
          {/* services section start */}
          <section
            className="service-area service-bg pt-140 pb-140"
            id="Services"
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center pb-80">
                  <div className="section-title service-title">
                    <span>
                      <img src="assets/images/service-text.png" alt="" />
                    </span>
                    <p className="section-para">
                      <span></span>About Me
                    </p>
                    <h1>{userData?.user?.about?.subTitle}</h1>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  {userData?.user?.services.map((service, index) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 mb-4"
                      key={index}
                    >
                      <div className="service-card">
                        <div className="service-item">
                          <img
                            src={service.image.url}
                            className="service-thumbnail"
                            alt=""
                          />
                          <div className="service-details">
                            <h3>{service.name}</h3>
                            <h4>Charge: {service.charge}</h4>
                            <p className="text-light mt-3">{service.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CSS */}
                <style jsx>{`
                  .service-card {
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    padding: 20px;
                  }

                  .service-item {
                    display: flex;
                  }

                  .service-thumbnail {
                    width: 80px;
                    height: auto;
                    margin-right: 25px;
                  }

                  .service-details {
                    flex-grow: 1;
                  }
                `}</style>
              </div>
            </div>
          </section>
          {/* services section end */}
          {/* portfolio section  start*/}
          <section className="portfolio-area pt-140 pb-140" id="portfolio">
            <div className="container">
              <div className="row pb-80">
                <div className="col-lg-5">
                  <div className="section-title portfolio-title">
                    <p className="section-para">
                      <span></span>Portfolio
                    </p>
                    <h1>
                      <span className="text-info">
                        {" "}
                        {userData?.user?.about?.some_total}
                      </span>{" "}
                      projects completed! 🚀 Excited to share a glimpse of a few
                      of them!
                    </h1>
                  </div>
                </div>
                <div className="col-lg-7 text-right">
                  <div className="portfolio-btn-area">
                    <a href="#portfolio" className="btn portfolio-btn">
                      View more <i className="fa fa-arrow-right"></i>
                    </a>
                    <a href="#Contact" className="portfolio-btn-2">
                      Let’s Talk <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid text-center">
              <div class="row justify-content-center">
                {userData?.user?.projects
                  .sort((a, b) => a.sequence - b.sequence)
                  .map((project, index, array) => (
                    <div
                      class={`col-lg-${
                        index === array.length - 1 ? "6" : index < 2 ? "6" : "3"
                      } mb-4`}
                      key={index}
                    >
                      <div class="single-portfolio-item shadow">
                        <img src={project?.image?.url} alt="" />
                        <div class="portfolio-overlay-content">
                          <h2>{project.title}</h2>
                          <p>
                            <span className="mr-2"> Technologies Used:</span>
                            {project?.techStack.map((tech, index) => (
                              <span className="text-primary" key={index}>
                                {tech}
                                {index !== project?.techStack?.length - 1 &&
                                  ", "}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          {/* portfolio section  end */}
          {/* <!--======  CTA PART START ======--> */}
          <section className="cta-area cta-bg pt-140 pb-140">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cta-title">
                    <span>
                      <img src="assets/images/cta-text.png" alt="" />
                    </span>
                    <h1>Have Any Creative Project</h1>
                    <p>
                      I denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                    </p>
                    <a href="#Contact" className="btn cta-btn">
                      meet with Me <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--======  CTA PART End ======--> */}
          {/* <!--======  Skills PART START ======--> */}
          <section className="team-area pt-140 pb-140" id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center pb-80">
                  <div className="section-title team-title">
                    <p className="section-para">
                      <span></span>Skills
                    </p>
                    <h1>Discover My Expertise and Proficiency</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Slider
                    {...teamSettings}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    className="hide-slider-button"
                  >
                    {userData?.user?.skills.map((skill, index) => (
                      <div key={index} className="single-team-area">
                        <div className="single-team-img text-center ml-3">
                          <img
                            className="w-50% img-fluid"
                            src={skill.image.url}
                            alt={skill.name}
                          />
                          <span className="team-icon-1">
                            <img src="assets/images/team/icon/1.png" alt="" />
                          </span>
                          <span className="team-icon-2">
                            <img src="assets/images/team/icon/2.png" alt="" />
                          </span>
                          <span className="team-icon-3">
                            <img src="assets/images/team/icon/3.png" alt="" />
                          </span>
                        </div>
                        <div className="single-team-content text-center">
                          <h4>{skill.name}</h4>
                          <h4>{skill.percentage}%</h4>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          {/* <!--======  Skill PART End ======--> */}
          {/* <!--======  VIDEO PART START ======--> */}
          {userData?.user?.youtube.map((video, index) => (
            <section className="video-area vdeo-bg" key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="video-icon-area">
                      {/* Use appropriate React components or libraries for the video popup */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.embedId}`}
                        className="video-icon video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-warning">{video.title}</h1>
                <p>{video.description}</p>
                <a href={video.learnMorea} className="video-read-more">
                  Learn More <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </section>
          ))}
          {/* <!--======  VIDEO PART END ======--> */}
          {/* <!--======  PROJECTS PART START ======--> */}
          <section className="project-counter-area">
            <div className="container">
              <div className="row pb-80">
                <div className="col-lg-6">
                  <div className="section-title project-title">
                    <p className="section-para">
                      <span></span>Testimonials
                    </p>
                    <h1>My Solo Expedition of Success</h1>
                  </div>
                </div>
                <div className="col-lg-6 text-right">
                  <a href="#" className="btn counter-btn">
                    get started <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="counter-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="counter-text">
                    <h1 className="count">
                      {" "}
                      {userData?.user?.about?.some_total}{" "}
                    </h1>
                    <p>Project complete</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="counter-icon">
                    <i className="fas fa-life-ring"></i>
                  </div>
                  <div className="counter-text">
                    <h1 className="count">8563</h1>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="counter-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="counter-text">
                    <h1 className="count">963</h1>
                    <p>Awards won</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--======  PROJECTS PART END ======--> */}
          {/* <!--======  TESTIMONIAL PART START ======--> */}
          <section className="testimonial-area" id="testimonial">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <img
                    className="w-full mt-100 p-3"
                    src={userData?.user?.testimonials[0]?.image?.url}
                    alt=""
                  />
                </div>
                <div className="col-lg-7">
                  <Slider
                    {...testimonialSettings}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    className="testimonial-carousel-active"
                  >
                    {userData?.user?.testimonials.map((testimonial, index) => (
                      <div className="single-testimonial-content" key={index}>
                        <span className="testimonial-quote">
                          <i className="fa fa-quote-right"></i>
                        </span>
                        <p>{testimonial.review}</p>
                        <div className="autohor-details img-fluid">
                          <img
                            src={testimonial.image.url}
                            alt=""
                            className="author-img"
                          />
                          <h5 className="author-name">
                            {testimonial.name}{" "}
                            <span>{testimonial.position}</span>
                          </h5>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          {/* <!--======  TESTIMONIAL PART END ======--> */}
          {/* <!--======  PRICING PART START ======--> */}
          <section className="pricing-area pt-140 pb-140" id="price">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <div className="section-title pricing-title pb-80">
                    <p className="section-para">
                      <span></span> pricing
                    </p>
                    <h1>Popular Pricing Plan For Creative Project</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-price-box">
                    <div className="absolute-price-num">
                      <h2>
                        01 <span>basic</span>
                      </h2>
                    </div>
                    <img
                      src="assets/images/price-icon.png"
                      alt=""
                      className="price-icon"
                    />
                    <h3>
                      <span>$45.99</span> For Monthly Project Charge
                    </h3>
                    <p>
                      <i className="fa fa-arrow-right"></i>Web Design (UX/UI)
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Software Development
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Fashion Design (Arts)
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Web Development (php)
                    </p>
                    <div className="hover-pricing-text">
                      <p>
                        <i className="fa fa-arrow-right"></i>Game Design & DV
                      </p>
                      <p>
                        <i className="fa fa-arrow-right"></i>Computer Hardware
                      </p>
                    </div>
                    <a href="#" className="btn price-btn">
                      make plan <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-price-box active">
                    <div className="absolute-price-num">
                      <h2>
                        02 <span>smart</span>
                      </h2>
                    </div>
                    <img
                      src="assets/images/price-icon.png"
                      alt=""
                      className="price-icon"
                    />
                    <h3>
                      <span>$65.99</span> For Monthly Project Charge
                    </h3>
                    <p>
                      <i className="fa fa-arrow-right"></i>Web Design (UX/UI)
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Software Development
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Fashion Design (Arts)
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Web Development (php)
                    </p>
                    <div className="hover-pricing-text">
                      <p>
                        <i className="fa fa-arrow-right"></i>Game Design & DV
                      </p>
                      <p>
                        <i className="fa fa-arrow-right"></i>Computer Hardware
                      </p>
                    </div>
                    <a href="#" className="btn price-btn">
                      make plan <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-price-box">
                    <div className="absolute-price-num">
                      <h2>
                        03 <span>Premium</span>
                      </h2>
                    </div>
                    <img
                      src="assets/images/price-icon.png"
                      alt=""
                      className="price-icon"
                    />
                    <h3>
                      <span>$103.99</span> For Monthly Project Charge
                    </h3>
                    <p>
                      <i className="fa fa-arrow-right"></i>Web Design (UX/UI)
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Software Development
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Fashion Design (Arts)
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i>Web Development (php)
                    </p>
                    <div className="hover-pricing-text">
                      <p>
                        <i className="fa fa-arrow-right"></i>Game Design & DV
                      </p>
                      <p>
                        <i className="fa fa-arrow-right"></i>Computer Hardware
                      </p>
                    </div>
                    <a href="#" className="btn price-btn">
                      make plan <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--======  PRICING PART END ======--> */}
          {/* <!--======  Professional Journey ======--> */}
          <section className="blog-area pb-140" id="Blog">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 pb-80">
                  <div className="section-title blog-title">
                    <p className="section-para">
                      <span></span>Professional Journey
                    </p>
                    <h1>Highlights of Career Milestones</h1>
                  </div>
                </div>
                <div className="col-lg-8 text-right">
                  <a smooth href="#Contact" className="btn blog-btn">
                    Contact Me <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="row">
                {userData?.user?.timeline.map((item, index) => (
                  <div
                    className={`col-lg-${
                      index === 0 || index === 5 ? "12" : "6"
                    } ${index === 1 ? "h-100" : ""} mb-4`}
                    key={index}
                  >
                    <div className="single-blog-area h-100">
                      <div className="single-blog-img mb-5"></div>
                      <div className="single-blog-content d-flex flex-column">
                        <p className="mb-3">Job Title: {item?.jobTitle}</p>
                        <p className="mb-auto">
                          Company Name: {item?.company_name}
                        </p>
                        <p className="mb-3">
                          Job Location: {item?.jobLocation}
                        </p>
                        <p className="mb-1">
                          <i className="far fa-calendar-alt">
                            Start Date: {item?.startDate}
                          </i>{" "}
                        </p>
                        <p className="mb-3">
                          <i className="far fa-calendar-alt">
                            End Date: {item?.endDate}
                          </i>{" "}
                        </p>
                        <p>Job Responsibilities:</p>
                        <ol>
                          {item.bulletPoints.map((point, index) => (
                            <li key={index} style={{ marginBottom: "10px" }}>
                              {index + 1}. {point}
                            </li>
                          ))}
                        </ol>
                        <p className="mb-0 styled-para">
                          Summary : {item.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* <!--======  Professional Journey ======--> */}
          {/* <!--======  CONTACT-WITH-FOOTER PART START ======--> */}
          <section
            className="contact-with-footer-area contact-bg pt-100"
            id="Contact"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center pb-80">
                  <div className="section-title contact-title">
                    <span>
                      <img src="assets/images/contact-text.png" alt="" />
                    </span>
                    <p className="section-para">
                      <span></span>Message Me
                    </p>
                    <h1>Don't Hesitate To Contact</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-form-area">
                    <form action="#">
                      <div className="single-contact-field">
                        <input type="text" placeholder="Your Name" />
                        <span className="far fa-user"></span>
                      </div>

                      <div className="single-contact-field">
                        <input type="email" placeholder="Your email" />
                        <span className="fas fa-envelope-open-text"></span>
                      </div>

                      <div className="single-contact-field">
                        <input type="text" placeholder="Your phone" />
                        <span className="fas fa-phone"></span>
                      </div>

                      <div className="single-contact-field textarea">
                        <textarea
                          name="#"
                          id="#"
                          cols="30"
                          rows="10"
                          placeholder="Your Message"
                        ></textarea>
                        <span className="fas fa-pencil-alt"></span>
                        <a href="#" className="btn contact-btn">
                          send message <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-address-area">
                    <span>
                      <i className="fa fa-arrow-right"></i>
                      {userData?.user?.about?.phoneNumber}
                    </span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-address-area">
                    <span>
                      <i className="fa fa-arrow-right"></i>
                      {userData?.user?.email}
                    </span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-address-area">
                    <span>
                      <i className="fa fa-arrow-right"></i>{" "}
                      {userData?.user?.about?.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <p>&copy; 2020 Livvic. All Rights Reserved</p>
                  </div>
                  <div className="col-lg-6 text-lg-end">
                    {" "}
                    {/* Align items to end (right) */}
                    <ul className="footer-as d-flex justify-content-end list-unstyled">
                      {userData?.user?.social_handles.map((social, index) => (
                        <li key={index} className="m-1">
                          <a
                            className="p-2"
                            href={social.a}
                            title={social.platform}
                          >
                            <img
                              className="social-icon"
                              src={social?.image?.url}
                              alt=""
                              style={{ width: "30px", height: "30px" }}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--======  CONTACT-WITH-FOOTER PART START ======--> */}
          {/* <!--======  SCROLL-TO-TOP PART START ======--> */}
          <div className="scroll-to-top">
            <span id="return-to-top" onClick={scrollToTop}>
              <i className="fa fa-arrow-up"></i>
            </span>
          </div>
          {/* <!--======  SCROLL-TO-TOP PART END ======--> */}
        </div>
      )}
    </div>
  );
}
