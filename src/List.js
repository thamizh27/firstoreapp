import React from "react";

const List = ({ data }) => {
  return (
    <div className="main">
      <div className="card">
        <div className="initial">
          <p>{data.firstName.charAt(0) + data.lastName.charAt(0)}</p>
        </div>
        <h2>{data.firstName + data.lastName}</h2>
        <p>{data.designation}</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default List;
