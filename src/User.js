import React, { useState, useEffect } from "react";
import List from "./List";
import { employeesRef } from "./Employees";

const User = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    employeesRef.get().then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        items.push(data);
      });
      console.log(items);
      setList(items);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    employeesRef.add({
      firstName: firstName,
      lastName: lastName,
      designation: designation,
      email: email,
    });

    setFirstName("");
    setLastName("");
    setDesignation("");
    setEmail("");
  };

  return (
    <div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <h2>Firestore Form</h2>
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
          <button type="submit">Add Employee</button>
        </form>
      </div>
      {list.map((item) => {
        return <List data={item} key={item.email} />;
      })}
    </div>
  );
};

export default User;
