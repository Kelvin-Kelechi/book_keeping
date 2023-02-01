import React from 'react'
import { Fp, FpCity, FpImg, FpItem, FpName, FpPrice, FpRating } from './featuredProperties.style'

const FeaturedProPerties = () => {
  const { data, error, loading } = useFetch("/hotels/countByType"); 
  return ( 
    <>
      <Fp>
        <FpItem>
          <FpImg src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" />
          <FpName>Aparthotel Stare Miasto</FpName>
          <FpCity>Madrid</FpCity>
          <FpPrice>Starting from $120</FpPrice>
          <FpRating>
            <button>8.9</button>
            <span>Excellent</span>
          </FpRating>
        </FpItem>
        <FpItem>
          <FpImg src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" />
          <FpName>Aparthotel Stare Miasto</FpName>
          <FpCity>Madrid</FpCity>
          <FpPrice>Starting from $120</FpPrice>
          <FpRating>
            <button>8.9</button>
            <span>Excellent</span>
          </FpRating>
        </FpItem>
        <FpItem>
          <FpImg src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" />
          <FpName>Aparthotel Stare Miasto</FpName>
          <FpCity>Madrid</FpCity>
          <FpPrice>Starting from $120</FpPrice>
          <FpRating>
            <button>8.9</button>
            <span>Excellent</span>
          </FpRating>
        </FpItem>
        <FpItem>
          <FpImg src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" />
          <FpName>Aparthotel Stare Miasto</FpName>
          <FpCity>Madrid</FpCity>
          <FpPrice>Starting from $120</FpPrice>
          <FpRating>
            <button>8.9</button>
            <span>Excellent</span>
          </FpRating>
        </FpItem>
      </Fp>
    </>
  );
}

export default FeaturedProPerties