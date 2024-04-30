import React from "react";
import axios from "axios";
import { baseUrl } from "../../../utils/config";
import { PackageCardBeta } from "../home/packageArea";

export const PackageGridWrapper = () => {
  const [packages, setPackages] = React.useState<any>([]);

  React.useEffect(() => {
    (async () => {
      await axios
        .get(`${baseUrl}/package`)
        .then(({ data }) => {
          setPackages(data.packages);
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  }, []);

  return (
    <>
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {packages.map((pack: any, idx: number) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <PackageCardBeta
                  image={pack.coverImage}
                  time="1 Day &amp; 2 night"
                  title={pack.title}
                  price={pack.cost}
                />
              </div>
            ))}
          </div>
          {/* <Pagination /> */}
        </div>
      </div>
    </>
  );
};
