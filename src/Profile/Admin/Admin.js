import classes from "./AddEmployee.module.css";
import AddEmployee from "./AddEmployee";

import { Fragment, useState, useEffect, useCallback, useContext } from "react";
import EmployeeList from "./EmployeeList";
import RemoveEmployee from "./RemoveEmployee";
import AuthContext from "../../Store/Auth-Context";
const Admin = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const authctx = useContext(AuthContext);
  const [addclicked, setaddClicked] = useState(false);
  const [removeclicked, setremoveclicked] = useState(false);

  const name = authctx.userDetails.name;
  const Role = authctx.userDetails.role;
  const addclickHandler = () => {
    setaddClicked(true);
  };
  const removeclickHandler = () => {
    setremoveclicked(true);
  };
  const unClick = (val) => {
    GetList();
    setaddClicked(val);
    setremoveclicked(val);
  };

  useEffect(() => {
    GetList();
  }, []);
  const GetList = () => {
    fetch("https://customhook-3538f-default-rtdb.firebaseio.com/Employee.json")
      .then((response) => response.json())
      .then((responseData) => {
        const loadedData = [];
        for (const key in responseData) {
          loadedData.push({
            id: key,
            employeeId: responseData[key].employeeId,
            employeeName: responseData[key].employeeName,
            employeeRole: responseData[key].employeeRole,
          });
        }
        setEmployeeList(loadedData);
      });
  };

  return (
    <Fragment>
      <div className={classes.actions}>
        <h1>
          Welcome {Role} {name}!
        </h1>
        {!addclicked && !removeclicked && (
          <button className="classes.actions" onClick={addclickHandler}>
            Add Employee
          </button>
        )}
        {!addclicked && !removeclicked && (
          <button className="classes.actions" onClick={removeclickHandler}>
            Remove/Promote Employee
          </button>
        )}

        {removeclicked && !addclicked && (
          <RemoveEmployee click={unClick} employeeList={employeeList} />
        )}
        {addclicked && !removeclicked && (
          <AddEmployee click={unClick} employeeList={employeeList} />
        )}
        {!addclicked && !removeclicked && (
          <EmployeeList employeeList={employeeList} />
        )}
      </div>
    </Fragment>
  );
};

export default Admin;
