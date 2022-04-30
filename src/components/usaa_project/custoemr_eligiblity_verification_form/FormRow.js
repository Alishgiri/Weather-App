import React from "react";

import "./style.css";

const FormRow = ({ title, value }) => {
  return (
    <div className="form-row-contents">
      <span className="form-row-title">{title}</span>
      <span className="form-row-value">{value}</span>
    </div>
  );
};

export default FormRow;
