import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "home":
      return { activeMenu: "home" };
    case "page":
      return { activeMenu: "page" };
    case "package":
      return { activeMenu: "package" };
    case "blog":
      return { activeMenu: "blog" };
    case "destination":
      return { activeMenu: "destination" };
    default:
      return { activeMenu: " " };
  }
};

export const Header: React.FC<any> = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [catagoryActive, setCatagoryActive] = useState(false);
  const [userDropdown, setuserDropdown] = useState(false);
  const [mobileSideberMenu, setMobileSideberMenu] = useState(false);

  useEffect(() => {
    // Add scroll event when the component is loaded
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 200 && header
      ? header.classList.add("sticky")
      : header && header.classList.remove("sticky");
  };

  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSearhBar = () => {
    if (!searchActive) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  };
  const handleCatagorybtn = () => {
    if (!catagoryActive) {
      setCatagoryActive(true);
    } else {
      setCatagoryActive(false);
    }
  };
  const handleUserDropDown = () => {
    if (!userDropdown) {
      setuserDropdown(true);
    } else {
      setuserDropdown(false);
    }
  };
  const handleMobileSiderbar = () => {
    if (!mobileSideberMenu) {
      setMobileSideberMenu(true);
    } else {
      setMobileSideberMenu(false);
    }
  };
  return (
    <>
      <div className={searchActive ? "mobile-search slide" : "mobile-search"}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div className="search-cross-btn" onClick={handleSearhBar}>
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={
          catagoryActive
            ? "category-sidebar-wrapper category-active"
            : "category-sidebar-wrapper"
        }
      >
        <div className="category-sidebar">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h4>Category</h4>
            <div className="category-toggle" onClick={handleCatagorybtn}>
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-2 gy-5 mt-3">
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate1.svg"}
                    alt=""
                  />
                </div>
                <h5>Adventure</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate2.svg"}
                    alt=""
                  />
                </div>
                <h5>Group Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate3.svg"}
                    alt=""
                  />
                </div>
                <h5>Couple Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate4.svg"}
                    alt=""
                  />
                </div>
                <h5>Single Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate5.svg"}
                    alt=""
                  />
                </div>
                <h5>Honeymoon</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate6.svg"}
                    alt=""
                  />
                </div>
                <h5>Sea Beach</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate7.svg"}
                    alt=""
                  />
                </div>
                <h5>Mountain Tour</h5>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <header>
        <div className="header-area header-style-three position-absolute w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <a href="index.html">
                    <img
                      src={process.env.PUBLIC_URL + "/Logo.svg"}
                      alt="logo"
                      style={{ borderRadius: "100%", height: "50px" }}
                    />
                  </a>
                  <div className="mobile-menu d-flex ">
                    <div className="d-flex align-items-center">
                      <div className="nav-right-icons d-xl-none d-flex align-items-center ">
                        <div
                          className="user-dropdown"
                          onClick={handleUserDropDown}
                        >
                          <i className="bx bx-user-circle" />
                          <ul
                            className={
                              userDropdown
                                ? "user-drop-list account-drop-active"
                                : "user-drop-list"
                            }
                          >
                            <li>
                              <Link to="#">My Account</Link>
                            </li>
                            <li>
                              <Link to="#">Login</Link>
                            </li>
                            <li>
                              <Link to="#">Registration</Link>
                            </li>
                            <li>
                              <Link to="#">Setting</Link>
                            </li>
                          </ul>
                        </div>
                        {/* <div
                          className="category-toggle"
                          onClick={handleCatagorybtn}
                        >
                          <i className="bx bx-category" />
                        </div> */}
                      </div>
                      <Link
                        to={"#"}
                        className={
                          mobileSideberMenu
                            ? "hamburger d-block d-xl-none h-active"
                            : "hamburger d-block d-xl-none"
                        }
                        onClick={handleMobileSiderbar}
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-8 col-sm-6 col-xs-6">
                <nav
                  className={
                    mobileSideberMenu ? "main-nav slidenav" : "main-nav"
                  }
                >
                  <div className="inner-logo d-xl-none text-center">
                    <Link to={"#"}>
                      <img src={process.env.PUBLIC_URL + "/Logo.svg"} alt="" />
                    </Link>
                  </div>
                  <ul
                    className={
                      mobileSideberMenu ? "" : "d-flex justify-content-center"
                    }
                  >
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/`}
                        onClick={scrollTop}
                      >
                        Home
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/about`}
                        onClick={scrollTop}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} onClick={scrollTop}>
                        Destination
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/package`}
                        onClick={scrollTop}
                      >
                        Package
                      </Link>
                    </li>
                    {/* <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "blog" })}
                    >
                      <Link to={"#"}>Blogs</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "blog"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/package`}
                            onClick={scrollTop}
                          >
                            Blog Grid
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-sidebar`}
                            onClick={scrollTop}
                          >
                            Blog Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-standard`}
                            onClick={scrollTop}
                          >
                            Blog Standard{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                            onClick={scrollTop}
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "page" })}
                    >
                      <Link to={"#"}>Pages</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "page"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/guide`}
                            onClick={scrollTop}
                          >
                            Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/gallary`}
                            onClick={scrollTop}
                          >
                            Gallary
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/faq`}
                            onClick={scrollTop}
                          >
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/404`}
                            onClick={scrollTop}
                          >
                            404
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/contact`}
                        onClick={scrollTop}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div className="inner-contact-options d-xl-none">
                    <div className="contact-box-inner">
                      <i className="bi bi-telephone-fill" />{" "}
                      <a href="tel:+250786384595">+250 786 384 595</a>
                    </div>
                    <div className="contact-box-inner">
                      <i className="bi bi-envelope-fill" />{" "}
                      <a href="mailto:info@africawizzysafaris.rw">
                        info@africawizzysafaris.rw
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xxl-3 col-xl-2 col-lg-1">
                <div className="nav-right d-xl-flex d-none">
                  <div className="nav-right-hotline d-xxl-flex d-none">
                    <div className="hotline-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/header-phone.svg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="hotline-info">
                      <span>Hot Line Number</span>
                      <h6>
                        <a href="tel:+250786384595">+250 786 384 595</a>
                      </h6>
                    </div>
                  </div>
                  <div className="nav-right-icons gap-3">
                    <div
                      className="header-search search-btn"
                      onClick={handleSearhBar}
                    >
                      <i className="bx bx-search-alt" />
                    </div>
                    {/* <div
                      className="category-toggle"
                      onClick={handleCatagorybtn}
                    >
                      <i className="bx bx-category" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
