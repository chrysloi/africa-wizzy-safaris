import React from "react";
import { destination } from "../../../utils/data";

export const TopDestination = () => {
  return (
    <>
      <div className="destination-area destination-style-two pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-10 " style={{}}>
              <div className="section-head-alpha text-center mx-auto">
                <h2>Top Destination</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          {destination.length > 0 && (
            <div className="row d-flex justify-content-center g-4">
              <div className="col-lg-6 col-md-12 col-sm-10 fadeffect">
                <DestinationItem
                  image={"/images/destination/RW_KIGALI.jpg"}
                  title={"Kigali City"}
                  place="18 Place"
                  height={268}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-10 fadeffect">
                <DestinationItem
                  image={"/images/destination/Nyungwe-National-Park.jpg"}
                  title={"Southern Province"}
                  place="20 Place"
                  height={268}
                />
              </div>
              {/* <div className="col-lg-3 col-md-12 col-sm-10 fadeffect">
                <DestinationItem
                  place="35 Place"
                  // height={268}
                  imgStyle={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
                <DestinationItem
                  image={"/images/destination/top-ds3.png"}
                  title={destination[2].title}
                  place="15 Place"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
                <DestinationItem
                  image={"/images/destination/top-ds4.png"}
                  title={destination[3] && destination[3].title}
                  place="25 Place"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
                <DestinationItem
                  image={"/images/destination/top-ds5.png"}
                  title={destination[4] && destination[4].title}
                  place="10 Place"
                />
              </div> */}
              <div className="col-lg-6 col-md-12 col-sm-10 fadeffect">
                <DestinationItem
                  image={"/images/destination/Lake-Ruhondo-In-Rwanda.jpg"}
                  title={"Northern Province"}
                  place="8 Place"
                  height={268}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-10 fadeffect">
                <DestinationItem
                  image={"/images/destination/akagera.jpg"}
                  title={"Eastern Province"}
                  place="15 Place"
                  height={268}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const DestinationItem: React.FC<any> = (props) => {
  return (
    <>
      <div className="destination-item" style={{ height: 268 }}>
        <div className="destination-img" style={{}}>
          <img
            src={`${props.image}`}
            alt={props.title}
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              height: "100%",
            }}
          />
        </div>
        <div className="destination-overlay">
          <div className="content">
            <h5 style={{ cursor: "pointer" }}>{props.title}</h5>
            <a href=""></a>
            <h6 style={{ cursor: "pointer" }}>{props.place}</h6>
            <a href=""></a>
          </div>
        </div>
      </div>
    </>
  );
};
