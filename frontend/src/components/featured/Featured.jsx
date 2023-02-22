import React from "react";
import useFetch from "../../hooks/useFetch";
import { Feature, FeatureItem, FeatureTitle, Img } from "./featured.style";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=lagos,abuja,anambara"
  );
  return (
    <Feature>
      {loading ? (
        "loading..please wait"
      ) : (
        <>
          <FeatureItem>
            <Img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
            />
            <FeatureTitle>
              <h1>Lagos</h1>
              <h2>{data[0]} achivements</h2>
            </FeatureTitle>
          </FeatureItem>

          <FeatureItem>
            <Img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
            />
            <FeatureTitle>
              <h1>Abuja</h1>
              <h2>{data[1]} achivements</h2>
            </FeatureTitle>
          </FeatureItem>
          <FeatureItem>
            <Img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
            />
            <FeatureTitle>
              <h1>Anamabara</h1>
              <h2>{data[2]} achivements</h2>
            </FeatureTitle>
          </FeatureItem>
        </>
      )}
    </Feature>
  );
};

export default Featured;
