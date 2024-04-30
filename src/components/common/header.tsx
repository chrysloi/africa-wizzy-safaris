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
              <label>What are you looking for?</label>
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
      <header>
        <div className="header-area header-style-three position-absolute w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <Link to={`/`} onClick={scrollTop}>
                    <img
                      src={"/Logo.svg"}
                      alt="logo"
                      style={{ borderRadius: "100%", height: "50px" }}
                    />
                  </Link>
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
                      <img src={"/Logo.svg"} alt="" />
                    </Link>
                  </div>
                  <ul
                    className={
                      mobileSideberMenu ? "" : "d-flex justify-content-center"
                    }
                  >
                    <li>
                      <Link to={`/`} onClick={scrollTop}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to={`/package`} onClick={scrollTop}>
                        Package
                      </Link>
                    </li>
                    <li>
                      <Link to={`/contact`} onClick={scrollTop}>
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
                        info@africawizzysafaris.com
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xxl-3 col-xl-2 col-lg-1">
                <div className="nav-right d-xl-flex d-none">
                  <div className="nav-right-hotline d-xxl-flex d-none">
                    <div className="hotline-icon">
                      <img src={"/images/icons/header-phone.svg"} alt="" />
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
