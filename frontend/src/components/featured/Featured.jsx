import React from 'react'
import { Feature, FeatureItem, FeatureTitle, Img } from './featured'
 
const Featured = () => {
  return (
     <Feature>
        <FeatureItem>
            <Img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" />
            <FeatureTitle>
                <h1>Kelvin</h1>
                <h2>50 achivements</h2>
            </FeatureTitle>
        </FeatureItem>
     </Feature>
  )
}

export default Featured