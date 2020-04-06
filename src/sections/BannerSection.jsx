import React, { Suspense } from 'react';
const Banner = React.lazy(() => import("../common/Banner"));
    
const BannerSection = ({data}) => {
     
    const LeftOrRight =(x) => x & 1 ? "left" : "right";
    
    const Banners = data.slice(0,3).map((banner, index) => {
      return (
            <Banner
              id={banner.id}
              title={banner.name}
              content={banner.content}
              button={banner.buttonName}
              image={banner.image}
              Alignement={LeftOrRight(index)}
            />
        );
    });
    
     return (
         <>
          <Suspense fallback={<div>Loading...</div>}>
             {Banners}
          </Suspense>
        </>
     )
 };
 export default BannerSection;