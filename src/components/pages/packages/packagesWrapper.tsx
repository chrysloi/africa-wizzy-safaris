import React from "react";
// import Pagination from "../../common/Pagination";
import { PackageCard } from "./packageCard";
import { Pagination } from "../../common";
import { latestPackages } from "../../../utils/data";

export const PackageGridWrapper = () => {
  return (
    <>
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {latestPackages.map((pack) => (
              <div className="col-lg-4 col-md-6">
                <PackageCard
                  image={pack.image}
                  date={pack.date}
                  title={pack.title}
                  price={pack.price}
                />
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};
