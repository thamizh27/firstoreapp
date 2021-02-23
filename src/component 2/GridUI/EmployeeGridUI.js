import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../context 2/EmployeeProvider";
import { db } from "../../service 2/EmployeeDataService";
import EmployeeGrid from "./EmployeeGrid";
import NavBar from "../NavBar";
// Meterial UI components
import {
  TextField,
  FormControl,
  Button,
  Container,
  Typography,
} from "@material-ui/core";

const EmployeeGridUI = () => {
  const [employeeList, loading] = useContext(EmployeeContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

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
      <NavBar />
      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading... Please wait...</h2>
      ) : (
        <EmployeeGrid employeeList={employeeList} />
      )}
    </Container>
  );
};

export default EmployeeGridUI;
