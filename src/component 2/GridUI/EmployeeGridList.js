import { db } from "../../service 2/EmployeeDataService";

const EmployeeGridList = ({ item }) => {
  const handleDelete = () => {
    db.child(item.id).remove();
    // console.log(item.id);
    alert(`${`${item.firstName} ${item.lastName}'s data was deleted...`}`);
  };

  const handleEdit = () => {
    const firstName = prompt("Firstname : ", item.firstName);
    const lastName = prompt("Lastname : ", item.lastName);
    const mobile = prompt("Mobile Number: ", item.mobile);
    const email = prompt("Email : ", item.email);
    const handleConfirm = window.confirm("Confirm or Deny");
    if (handleConfirm === true) {
      db.child(item.id).update({
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
      });
    }
  };
  return (
    <div className="grid-card">
      <div className="logo">
        <p>{item.firstName.charAt(0) + " " + item.lastName.charAt(0)}</p>
      </div>
      <h4>{item.firstName + " " + item.lastName}</h4>
      {/* <p>{item.mobile}</p> */}
      <p>{item.email}</p>
      <div className="bottom-grid">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default EmployeeGridList;
