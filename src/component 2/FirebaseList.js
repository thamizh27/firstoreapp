import { db } from "../service 2/EmployeeDataService";
import { FaPen, FaTrash } from "react-icons/fa";

const FirebaseList = ({ item }) => {
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
    <>
      <tbody>
        <tr key={item.id}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.mobile}</td>
          <td>
            <div className="action" onClick={handleEdit}>
              <FaPen />
            </div>
          </td>
          <td>
            <div className="action" onClick={handleDelete}>
              <FaTrash />
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default FirebaseList;
