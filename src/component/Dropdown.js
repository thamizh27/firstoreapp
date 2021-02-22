import React, { useState } from "react";

const Dropdown = ({ teams, dropdownId }) => {
  const [select, setSelect] = useState("");

  const handleSelect = (e) => {
    // console.log(e.target.value);
    setSelect(e.target.value);
    dropdownId(select);
    // console.log(select);
  };

  return (
    <div className="dropdown">
      <select onChange={handleSelect}>
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
