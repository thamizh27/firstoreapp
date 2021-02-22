import { db } from "../service 2/EmployeeDataService";

const FirebaseList = ({ item }) => {
  const handleDelete = () => {
    db.child(item.id).remove();
    // console.log(item.id);
    alert(`${`${item.firstName} ${item.lastName}'s data was deleted...`}`);
  };

  const handleEdit = () => {
    const firstName = prompt("Firstname : ");
    const lastName = prompt("Lastname : ");
    const mobile = prompt("Mobile Number: ");
    const email = prompt("Email : ");
    const okay = window.confirm("Confirm or Deny");

    if (okay === true) {
      db.child(item.id).update({
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
      });
    }
  };

  return (
    <>
      <tbody>
        <tr key={item.id}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.mobile}</td>
          <td>
            <button className="action" onClick={handleEdit}>
              Edit
            </button>
          </td>
          <td>
            <button className="action" onClick={handleDelete}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default FirebaseList;
