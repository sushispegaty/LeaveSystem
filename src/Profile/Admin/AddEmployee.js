import classes from "./AddEmployee.module.css";
import React from "react";
import { useRef } from "react";
import EmployeeList from "./EmployeeList";

const AddEmployee = (props) => {
  const inputId = useRef();
  const inputName = useRef();
  const inputRole = useRef();
  const inputManager = useRef();
  const Backfn = () => {
    props.click(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const employeeId = inputId.current.value;
    const employeeName = inputName.current.value;
    const employeeRole = inputRole.current.value;
    const managerId = inputManager.current.value;

    fetch(
      "https://customhook-3538f-default-rtdb.firebaseio.com/Employee.json",
      {
        method: "POST",
        body: JSON.stringify({
          employeeId: employeeId,
          employeeName: employeeName,
          employeeRole: employeeRole,
          managerId: managerId,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        response.json();
      })
      .then((data) => {
        Backfn();
      });
  };

  return (
    <div>
      <section className={classes.auth}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="id">EmployeeId</label>
            <input type="text" id="id" ref={inputId} />
          </div>
          <div className={classes.control}>
            <label htmlFor="Name">Your Name</label>
            <input type="text" id="Name" ref={inputName} />
          </div>
          <div className={classes.control}>
            <label htmlFor="Role">Employee Designation</label>
            <input type="text" id="Role" ref={inputRole} />
          </div>
          <div className={classes.control}>
            <label htmlFor="Manager">ManagerId</label>
            <input type="text" id="Manager" ref={inputManager} />
          </div>
          <div className={classes.actions}>
            <button type="submit">Submit</button>
          </div>
          <div className={classes.actions}>
            <button onClick={Backfn}>Go Back</button>
          </div>
          <EmployeeList employeeList={props.employeeList} />
        </form>
      </section>
    </div>
  );
};

export default AddEmployee;
