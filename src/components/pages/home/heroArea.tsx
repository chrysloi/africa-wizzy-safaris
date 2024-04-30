import React from "react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);

export const HeroArea = () => {
  const heroSlide = {
    slidesPerView: 1,
    speed: 1500,
    parallax: true,
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    roundLengths: true,
    effect: "fade",
    navigation: {
      nextEl: ".hero-next3",
      prevEl: ".hero-prev3",
    },

    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".hero-two-pagination",
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
      },
    },
  };
  return (
    <>
      <div className="hero-area hero-style-three">
        <img
          src={"/images/banner/rwanda_air_takeoff.png"}
          className="img-fluid banner-plane"
          alt="banners-img"
          style={{ height: 70 }}
        />
        <div className="hero-main-wrapper position-relative">
          <div className="hero-social">
            <ul className="social-list d-flex justify-content-center align-items-center gap-4">
              <li>
                <Link
                  to={
                    "https://instagram.com/africa_wizzy_safaris?igshid=YmM0MjE2YWMzOA=="
                  }
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.linkedin.com/in/uwimpuhwe-aline-143568270"}
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to={"https://twitter.com/africa_wizzy"} target="_blank">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <Swiper className="swiper  hero-slider-three " {...heroSlide}>
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="slider-bg-1">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-lg-8">
                        <div className="hero3-content">
                          <span className="title-top">
                            Discover a land of thousand hills with Africa Wizzy
                          </span>
                          <h1>Welcome to Rwanda</h1>
                          <Link
                            to={"#"}
                            className="button-fill-primary banner3-btn"
                          >
                            Book Your Travel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="slider-bg-3">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-lg-8">
                        <div className="hero3-content">
                          <span className="title-top">
                            Welcome to Africa Wizzy Safaris
                          </span>
                          <h1>Enjoy Staying in Rwanda</h1>
                          <Link
                            to={"#"}
                            className="button-fill-primary banner3-btn"
                          >
                            Book Your Travel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="slider-arrows text-center d-lg-flex flex-column d-none gap-5">
            <div
              className="hero-prev3"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="bi bi-arrow-left" />
            </div>
            <div
              className="hero-next3"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
