import AuthContext from "../../Store/Auth-Context";
import classes from "../Profile.module.css";
import Features from "./Features";
import React, { useContext, useState, useEffect } from "react";

const Employee = () => {
  const authctx = useContext(AuthContext);
  const name = authctx.userDetails.name;
  const Role = authctx.userDetails.role;
  const [leaveList, setLeaveList] = useState([]);
  const employeeId = authctx.userDetails.employeeId;

  useEffect(() => {
    GetList();
  }, []);
  const GetList = () => {
    fetch("https://customhook-3538f-default-rtdb.firebaseio.com/Leaves.json")
      .then((response) => response.json())
      .then((responseData) => {
        const loadedData = [];
        for (const key in responseData) {
          if (employeeId === responseData[key].employeeId) {
            loadedData.push({
              id: key,
              employeeId: responseData[key].employeeId,
              leaveDays: responseData[key].leaveDays,
              employeeName: responseData[key].employeeName,
              managerId: responseData[key].managerId,
              managerName: responseData[key].managerName,
              status: responseData[key].status,
            });
          }
        }
        setLeaveList(loadedData);
      });
  };
  console.log(leaveList);
  return (
    <div className={classes.auth}>
      <h1>
        Welcome {Role} {name}!
      </h1>
      <Features leaveList={leaveList} refresh={GetList} />
    </div>
  );
};

export default Employee;
