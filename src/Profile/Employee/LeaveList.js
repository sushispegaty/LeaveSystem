import "./LeaveList.css";
import classes from "./LeaveList.module.css";
import { useEffect, useState } from "react";
import Status from "./Status";

const LeaveList = (props) => {
  const Leaves = props.List.map((emp) => {
    return (
      <li key={emp.id}>
        <span>Name:{emp.employeeName}</span>
        <span>Days:{emp.leaveDays}</span>
        <span>
          ManagerId:
          {emp.managerId}
        </span>
        <span>
          ManagerName:
          {emp.managerName}
        </span>
        <button>{emp.status}</button>
      </li>
    );
  });

  return (
    <section className="Leave-list">
      <ul>{Leaves}</ul>
    </section>
  );
};

export default LeaveList;
