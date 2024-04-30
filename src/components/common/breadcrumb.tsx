import { Link } from "react-router-dom";
import React from "react";

export const Breadcrumb: React.FC<any> = (props: any) => {
  return (
    <>
      <div className="breadcrumb breadcrumb-style-one">
        <div
          style={{
            backdropFilter: "blur(1.8px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: "150px 0",
            width: "100%",
          }}
        >
          <div className="col-lg-12 text-center">
            <h2 className="breadcrumb-title">{props.name}</h2>
            <ul className="d-flex justify-content-center breadcrumb-items">
              <li className="breadcrumb-item">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="breadcrumb-item active">{props.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
