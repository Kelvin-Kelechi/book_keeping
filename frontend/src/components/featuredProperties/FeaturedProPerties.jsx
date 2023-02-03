import React from "react";
import {
  Fp,
  FpCity,
  FpImg,
  FpItem,
  FpName,
  FpPrice,
  FpRating,
} from "./featuredProperties.style";
import useFetch from "../../hooks/useFetch";
const FeaturedProPerties = () => {
  const { data, error, loading } = useFetch("hotels?featured=true&limit=4");
  return (
    <>
      <Fp>
        {loading ? (
          "loading... please wait"
        ) : (
          <>
            {data.map((item) => (
              <FpItem>
                <FpImg src={item.photo[0]} />
                <FpName>{item.name}</FpName>
                <FpCity>{item.city}</FpCity>
                <FpPrice>Starting from ${item.cheapestPrice}</FpPrice>
                {item.rating && (
                  <FpRating>
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </FpRating>
                )}
              </FpItem>
            ))}
          </>
        )}
      </Fp>
    </>
  );
};

export default FeaturedProPerties;
