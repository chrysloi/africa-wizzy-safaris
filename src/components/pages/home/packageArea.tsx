import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../utils/config";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const PackageArea = () => {
  const [packages, setPackages] = React.useState<any>([]);
  const getPackages = async () => {
    await axios
      .get(`${baseUrl}/package`)
      .then(({ data }) => {
        setPackages(data.packages);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    getPackages();
  }, []);

  return (
    <>
      <div className="package-area package-style-two pt-110 chain">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-8 col-sm-10">
              <div className="section-head-alpha">
                <h2>Best Selling Tours</h2>
                <p>
                  Our tours are designed for everyone who loves to travel. Or
                  expert take you to places where you expierience Rwanda country
                  of a thousand hills and its beauty.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10">
              <div className="package-btn text-lg-end">
                <Link
                  to="/package"
                  className="button-fill-primary all-package-btn"
                >
                  View All Tour
                </Link>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            {packages.slice(0, 6).map((item: any) => (
              <div className="col-lg-4 col-md-6 col-sm-10  fadeffect">
                <PackageCardBeta
                  image={item.coverImage}
                  time="1 Day &amp; 2 night"
                  title={item.title}
                  price={item.cost}
                />
              </div>
            ))}
          </div>
          <div className="package-page-btn text-center mt-60">
            <Link to="/package" className="button-fill-round">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const PackageCardBeta: React.FC<any> = (props) => {
  return (
    <>
      <div className="package-card-beta" style={{ height: 480 }}>
        <div className="package-thumb" style={{ height: "65%" }}>
          <img
            src={props.image}
            alt="package-details img"
            style={{
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
        <div
          className="package-card-body"
          style={{ height: "35%", paddingTop: 10 }}
        >
          <h3 className="p-card-title">
            <Link to={""}>{props.title}</Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link to={""}>
                Book Now <i className="bx bxs-right-arrow-alt" />
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                {props.price} <span>Per Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
