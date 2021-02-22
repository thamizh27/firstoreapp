import React, { useState, useEffect } from "react";
import List from "./List";
import { employeesRef, teamRef } from "../service/Employees";
import Dropdown from "./Dropdown";

const User = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState(null);
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);
  const [teams, setTeams] = useState([]);
  // const [front, setFront] = useState([]);

  const departmentRef = "/teams/";

  useEffect(() => {
    const unsubscribe = employeesRef
      // .where("team", "==", "backend development")
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // var id = doc.id;
          // console.log(id);
          data.id = doc.id;
          items.push(data);
        });
        setList(items);
        console.log(items);
      });

    teamRef.onSnapshot((query) => {
      let arr = [];
      query.forEach((doc) => {
        const datas = doc.data();
        datas.id = doc.id;
        arr.push(datas);
      });
      setTeams(arr);
      // console.log(arr);
    });

    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    employeesRef.add({
      firstName: firstName,
      lastName: lastName,
      team: department,
      designation: designation,
      email: email,
      teams: `${departmentRef}${department}`,
    });

    console.log(department);

    // teamRef.add({
    //   title: department,
    // });

    alert(`${`${firstName} ${lastName}'s data was Added...`}`);

    setFirstName("");
    setLastName("");
    setDesignation("");
    setEmail("");
  };

  return (
    <div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <h2>Add Employee</h2>
          <input
            type="text"
            value={firstName}
            required
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
          {/* <select
            className="main-dropdown"
            name="teams"
            value={department}
            onChange={(e) => console.log(e.target.id)}
          >
            <option value="department">Department</option>
            <option value="frontend development">Frontend Development</option>
            <option value="backend development">Backend Development</option>
            <option value="android development">Android Development</option>
            <option value="ios development">IOS Development</option>
          </select> */}
          <Dropdown
            teams={teams}
            dropdownId={(depId) => setDepartment(depId)}
          />
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
      </div>
      <Dropdown teams={teams} />
      {list.map((item) => (
        <List data={item} key={item.id} />
      ))}
    </div>
  );
};

export default User;
