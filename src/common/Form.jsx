import React from "react";

const Form = () => {
  return (
    <div className="FormWrapper">
      <form action="" method="post">
        <input className="input-50" type="text" name="name" placeholder="name"/>
        <input className="input-50 end" type="text" name="last-name" placeholder="name" />
        <input className="input-100" type="email" name="email" placeholder="email"/>
        <textarea className="input-100 textArea" name="message" placeholder="message" />
        <input className="FormButton" type="submit" value="SEND >"/>
      </form>
    </div>
  );
};
export default Form;
