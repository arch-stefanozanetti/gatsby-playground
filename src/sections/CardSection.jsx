import React, { Suspense } from "react";
const Card = React.lazy(() => import("../common/Card"));


const CardSection = ({ data }) => {

  const Cards = data.map((card, index) => {
    return (
          <Card title={card.title} content={card.content} image={card.image} />
    );
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="CardSection">
          {Cards}
        </div>
      </Suspense>
    </>
  );
};
export default CardSection;