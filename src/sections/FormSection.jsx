import React from "react";
import Form from "../common/Form";

const FormSection = ({ data }) => {
  
  const address = data.slice(3, 4).map((address, index) => {
    return (
      <div className={`textWrapper right`}>
        <h2>{address.name}.</h2>
        <div className="paragraph">{address.Address_1}</div>
        <div className="paragraph">{address.Address_2}</div>
        <div className="paragraph">-</div>
        <div className="paragraph">T {address.telephone}</div>
      </div>
    );
  });

  return (
    <div className="FormSectionWrapper" id="contacts">
      {address}
      <Form />
    </div>
  );
};
export default FormSection;
