import React, { useState, useEffect } from "react";
import { db } from "../service 2/EmployeeDataService";
import FirebaseList from "./FirebaseList";
import { BsFillGridFill, BsListUl } from "react-icons/bs";

// Meterial UI components
import {
  TextField,
  FormControl,
  Button,
  Container,
  Typography,
} from "@material-ui/core";

const EmployeeListUI = () => {
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
    <Container>
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Typography component="h1" variant="h5">
              Add Employee
            </Typography>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              autoComplete="firstname"
              value={firstName}
              required
              onChange={(e) =>
                setFirstName(
                  e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1)
                )
              }
              label="Firstname"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              autoComplete="firstname"
              value={lastName}
              required
              onChange={(e) =>
                setLastName(
                  e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1)
                )
              }
              label="Lastname"
            />

            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              autoComplete="firstname"
              value={mobile}
              required
              onChange={(e) => setMobile(e.target.value)}
              label="Mobile Number"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              autoComplete="firstname"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            {/* <button type="submit">Submit</button> */}
            <Button
              type="submit"
              size="medium"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Container>

      <Container component="div" maxWidth="xs">
        <Button size="large">
          <BsFillGridFill />
        </Button>
        <Button size="large">
          <BsListUl />
        </Button>
      </Container>
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
    </Container>
  );
};

export default EmployeeListUI;
