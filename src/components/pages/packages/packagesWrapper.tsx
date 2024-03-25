import React from "react";
// import Pagination from "../../common/Pagination";
import { PackageCard } from "./packageCard";
import { Pagination } from "../../common";
import { latestPackages } from "../../../utils/data";
import axios from "axios";
import { baseUrl } from "../../../utils/config";
import { PackageCardBeta } from "../home/packageArea";

export const PackageGridWrapper = () => {
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
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {packages.map((pack: any) => (
              <div className="col-lg-4 col-md-6">
                <PackageCardBeta
                  image={pack.coverImage}
                  time="1 Day &amp; 2 night"
                  title={pack.title}
                  price={pack.cost}
                />
                {/* <PackageCard
                  image={pack.image}
                  date={pack.date}
                  title={pack.title}
                  price={pack.price}
                /> */}
              </div>
            ))}
          </div>
          {/* <Pagination /> */}
        </div>
      </div>
    </>
  );
};
