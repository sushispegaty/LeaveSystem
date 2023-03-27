import classes from "../Profile.module.css";
import AuthContext from "../../Store/Auth-Context";
import { Fragment, useContext, useEffect, useState } from "react";
import FilteredList from "./FilteredList";

const Manager = () => {
  const authctx = useContext(AuthContext);
  const name = authctx.userDetails.name;
  const Role = authctx.userDetails.role;
  const employeeId = authctx.userDetails.employeeId;
  const [approvalList, setApprovalList] = useState([]);

  useEffect(() => {
    filterList();
  }, []);

  const filterList = () => {
    fetch("https://customhook-3538f-default-rtdb.firebaseio.com/Leaves.json")
      .then((response) => response.json())
      .then((responseData) => {
        const loadedData = [];
        for (const key in responseData) {
          if (
            employeeId === responseData[key].managerId &&
            responseData[key].status === "pending"
          ) {
            loadedData.push({
              id: key,
              employeeId: responseData[key].employeeId,
              leaveDays: responseData[key].leaveDays,
              employeeName: responseData[key].employeeName,
              managerId: responseData[key].managerId,
              managerName: responseData[key].managerName,
            });
          }
        }
        setApprovalList(loadedData);
      });
  };
  console.log(approvalList);

  return (
    <Fragment>
      <div className={classes.auth}>
        <h1>
          Welcome {Role} {name}!
        </h1>
      </div>
      <div>
        <FilteredList List={approvalList} refresh={filterList} />
      </div>
    </Fragment>
  );
};

export default Manager;
