import "./EmployeeList.css";

// const EmployeeReducer = (currentList, action) => {
//   switch (action.type) {
//     case "SET":
//       return action.List;
//     case "ADD":
//       return [...currentList, action.List];
//     case "DELETE":
//       return currentList.filter((emp) => emp.id !== action.id);
//   }
// };
const EmployeeList = (props) => {
  //const [employeeList, dispatch] = useReducer(EmployeeReducer, []);
  //const [employeeList, setEmployeeList] = useState([]);

  const List = props.employeeList.map((emp) => {
    return (
      <li key={emp.id}>
        <span>Id:{emp.employeeId}</span> <span>Name:{emp.employeeName}</span>
        <span>
          Role:
          {emp.employeeRole}
        </span>
      </li>
    );
  });

  return (
    <section className="employee-list">
      <ul>{List}</ul>
    </section>
  );
};
export default EmployeeList;
