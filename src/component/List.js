import { employeesRef, teamRef } from "../service/Employees";
import React, { useState } from "react";

const List = ({ data }) => {
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [designation, setDesignation] = useState(data.designation);
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState(data.email);
  const [style, setStyle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    employeesRef.doc(data.id).update({
      firstName: firstName,
      lastName: lastName,
      designation: designation,
      team: department,
      email: email,
    });
    setStyle(!style);
    alert(`${`${data.firstName} ${data.lastName}'s data was updated...`}`);
  };

  const handleDelete = () => {
    employeesRef.doc(data.id).delete();
    alert(`${`${data.firstName} ${data.lastName}'s data was deleted...`}`);
  };

  const handleEdit = () => {
    setStyle(!style);
  };

  return (
    <div className="main">
      <form
        className={style ? "update-form-show" : "update-form-close"}
        onSubmit={handleSubmit}
      >
        <h2>Update Employee</h2>
        <input
          type="text"
          value={firstName}
          onChange={(e) =>
            setFirstName(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          placeholder="Firstname"
        />
        <input
          type="text"
          value={lastName}
          required
          onChange={(e) =>
            setLastName(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          placeholder="Lastname"
        />
        <select
          className="second-main-dropdown"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="department">Department</option>
          <option value="frontend development">Frontend Development</option>
          <option value="backend development">Backend Development</option>
          <option value="android development">Android Development</option>
          <option value="ios development">IOS Development</option>
        </select>
        <input
          type="text"
          value={designation}
          required
          onChange={(e) =>
            setDesignation(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          placeholder="Designation"
        />
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="card">
        <div className="initial">
          <p>{data.firstName.charAt(0) + " " + data.lastName.charAt(0)}</p>
        </div>
        <h2>{data.firstName + " " + data.lastName}</h2>
        <p>{data.designation}</p>
        <p>{data.email}</p>
        <div className="bottom-list">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default List;
