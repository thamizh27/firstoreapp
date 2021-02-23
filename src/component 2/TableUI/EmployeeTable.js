import React from "react";
import FirebaseList from "./EmployeeTableList";

const EmployeeTable = ({ employeeList }) => {
  return (
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
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            mobile={item.mobile}
          />
        ))}
      </table>
    </div>
  );
};

export default EmployeeTable;
