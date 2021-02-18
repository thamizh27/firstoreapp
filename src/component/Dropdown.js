import React, { useState } from "react";

const Dropdown = ({ teams }) => {
  const [select, setSelect] = useState("");

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelect(e.target.value);
  };

  return (
    <div className="dropdown">
      <select name="Teams" onChange={handleSelect}>
        <option> -- Department -- </option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
