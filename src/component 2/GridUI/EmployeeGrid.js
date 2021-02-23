import EmployeeGridList from "./EmployeeGridList";

const EmployeeGrid = ({ employeeList }) => {
  return (
    <div className="grid-main">
      {employeeList.map((item) => (
        <EmployeeGridList key={item.id} item={item} />
      ))}
    </div>
  );
};

export default EmployeeGrid;
