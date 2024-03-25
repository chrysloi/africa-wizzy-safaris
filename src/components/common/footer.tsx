import { Link } from "react-router-dom";
// import { SRLWrapper } from "simple-react-lightbox";

export const Footer: React.FC<any> = () => {
  // smooth scrol
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer-area" style={{ marginTop: "20px" }}>
        <div className="footer-main-wrapper">
          <div className="footer-vactor">
            <img
              src={process.env.PUBLIC_URL + "/images/banner/footer-bg.png"}
              alt="FooterIMG"
            />
          </div>
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4">
                <div className="footer-about text-lg-start text-center">
                  <p>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Suspendissendt molestie
                    turpis nec lacinia vehicula.
                  </p>
                  <div className="footer-social-wrap">
                    <h5>Follow Us On:</h5>
                    <ul className="footer-social-links justify-content-lg-start justify-content-center">
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.whatsapp.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                          // to={"#"}
                        >
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Quick Link</h3>
                  <ul className="footer-links">
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/about`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/package`}
                      >
                        Tour Package
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/destination`}
                      >
                        Destination
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/guide`}
                      >
                        Tour Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/package-details`}
                      >
                        Booking Process
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/blog`}
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                {/* <div className="footer-widget">
                  <h4 className="footer-widget-title">Tour Type</h4>
                  <ul className="footer-links">
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/package`}
                      >
                        Wild &amp; Adventure Tours
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/package`}
                      >
                        Group Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/package`}
                      >
                        Seasonal Tours
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/package`}
                      >
                        Relaxation Tours
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/package`}
                      >
                        Family Friendly Tours
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              <>
                <div className="col-lg-4 col-md-8">
                  {/* <SRLWrapper> */}
                  <div className="footer-widget">
                    <h4 className="footer-widget-title text-center">Gallery</h4>
                    <div className="footer-gallary-grid">
                      <GalleryItem
                        srcFull={
                          process.env.PUBLIC_URL +
                          "/images/gallary/RW_KIGALI.jpg"
                        }
                        srcThumb={
                          process.env.PUBLIC_URL +
                          "/images/gallary/RW_KIGALI.jpg"
                        }
                        caption="Kigali"
                      />
                      <GalleryItem
                        srcFull={
                          process.env.PUBLIC_URL + "/images/gallary/Musanze.jpg"
                        }
                        srcThumb={
                          process.env.PUBLIC_URL + "/images/gallary/Musanze.jpg"
                        }
                        caption="Musanze"
                        height={75}
                      />
                      <GalleryItem
                        srcFull={
                          process.env.PUBLIC_URL + "/images/gallary/akagera.jpg"
                        }
                        srcThumb={
                          process.env.PUBLIC_URL + "/images/gallary/akagera.jpg"
                        }
                        caption="Akagera"
                      />
                      <GalleryItem
                        srcFull={
                          process.env.PUBLIC_URL +
                          "/images/gallary/Lake-Ruhondo-In-Rwanda.jpg"
                        }
                        srcThumb={
                          process.env.PUBLIC_URL +
                          "/images/gallary/Lake-Ruhondo-In-Rwanda.jpg"
                        }
                        caption="Lake Ruhondo"
                      />
                      <GalleryItem
                        srcFull={
                          process.env.PUBLIC_URL +
                          "/images/gallary/Nyungwe-National-Park.jpg"
                        }
                        srcThumb={
                          process.env.PUBLIC_URL +
                          "/images/gallary/Nyungwe-National-Park.jpg"
                        }
                        caption="footerIMG"
                      />
                      <GalleryItem
                        srcFull={
                          process.env.PUBLIC_URL +
                          "/images/gallary/fullsecrron06.png"
                        }
                        srcThumb={
                          process.env.PUBLIC_URL + "/images/gallary/fg-6.png"
                        }
                        caption="footerIMG"
                      />
                    </div>
                  </div>
                  {/* </SRLWrapper> */}
                </div>
              </>
            </div>
            <div className="footer-contact-wrapper">
              <h5>Contact Us:</h5>
              <ul className="footer-contact-list">
                <li>
                  <i className="bi bi-telephone-x" />{" "}
                  <a rel="noopener noreferrer" href="tel:+250786384595">
                    +250 786 384 595
                  </a>
                </li>
                <li>
                  <i className="bi bi-envelope-open" />{" "}
                  <a href="mailto:info@africawizzysafaris.rw">
                    info@africawizzysafaris.rw
                  </a>
                </li>
                {/* <li>
                  <i className="bi bi-geo-alt" />{" "}
                  <Link to={"#"}>2752 Willison Street Eagan, United State</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6 order-lg-1 order-3 ">
                <div className="copyright-link text-lg-start text-center">
                  <p>&#169; {new Date().getFullYear()} Africa Wizzy Safaris</p>
                </div>
              </div>
              <div className="col-lg-4  order-lg-2 order-1">
                <div className="footer-logo text-center">
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                    <img
                      src={process.env.PUBLIC_URL + "/Logo.svg"}
                      alt="Africa Wizzy Safaris"
                      style={{ height: "30px", borderRadius: "100%" }}
                      // className="w-20"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 order-lg-3 order-2">
                <div className="policy-links">
                  <ul className="policy-list justify-content-lg-end justify-content-center">
                    <li>
                      <Link to={"#"}>Terms &amp; Condition</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const GalleryItem: React.FC<any> = (props) => {
  return (
    <div className="footer-gallary-item">
      <a
        href={props.srcFull}
        data-fancybox="footer"
        data-caption={props.caption ? props.caption : "Caption "}
      >
        <img src={props.srcThumb} alt={props.caption} height={65} />
      </a>
    </div>
  );
};
