import React, { useState, useEffect } from "react";
import { db } from "../service 2/EmployeeDataService";
import FirebaseList from "./FirebaseList";

const EmployeeList = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // let db = EmployeeDataService.getAll();
    setLoading(true);
    db.on("value", (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        childData.id = childKey;
        data.push(childData);
      });
      setEmployeeList(data);
      setLoading(false);
      console.log(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const random = Math.floor(Math.random() * 10000 + 1);

    db.child(`item${random}`).set({
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      email: email,
    });

    alert(`${`${firstName} ${lastName}'s data was Added...`}`);

    setFirstName("");
    setLastName("");
    setMobile("");
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

          <input
            type="text"
            maxLength="10"
            value={mobile}
            required
            onChange={(e) =>
              setMobile(
                e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
              )
            }
            placeholder="Mobile Number"
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
      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {employeeList.map((item) => (
              <FirebaseList
                key={item.id}
                item={item}
                firstName={firstName}
                lastName={lastName}
                email={email}
                mobile={mobile}
              />
            ))}
          </table>
        </div>
      )}

      {/* {employeeList.map((item) => (
        <div>{item.id}</div>
      ))} */}
    </div>
  );
};

export default EmployeeList;
