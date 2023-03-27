import { useRef } from "react";
import classes from "../../Components/AuthForm.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import LeaveList from "./LeaveList";

const ApplyLeave = () => {
  const inputName = useRef();
  const inputId = useRef();
  const inputDays = useRef();
  const inputManagerName = useRef();
  const inputManagerId = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const backfn = () => {
    navigate("/Features");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const employeeId = inputId.current.value;
    const employeeName = inputName.current.value;
    const leaveDays = inputDays.current.value;
    const managerName = inputManagerName.current.value;
    const managerId = inputManagerId.current.value;

    fetch("https://customhook-3538f-default-rtdb.firebaseio.com/Leaves.json", {
      method: "POST",
      body: JSON.stringify({
        employeeId: employeeId,
        employeeName: employeeName,
        leaveDays: leaveDays,
        managerId: managerId,
        managerName: managerName,
        status: "pending",
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        navigate("/Features");
      });
  };
  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="Name">Your Name</label>
          <input type="text" id="Name" ref={inputName} />
        </div>
        <div className={classes.control}>
          <label htmlFor="id">YourID</label>
          <input type="text" id="Id" ref={inputId} />
        </div>
        <div className={classes.control}>
          <label htmlFor="No of Days">No of days</label>
          <input type="text" id="noofdays" ref={inputDays} />
        </div>
        <div className={classes.control}>
          <label htmlFor="ManagerId">MangaerId</label>
          <input type="text" id="ManagerId" ref={inputManagerId} />
        </div>
        <div className={classes.control}>
          <label htmlFor="ManagerName">ManagerName</label>
          <input type="text" id="ManagerId" ref={inputManagerName} />
        </div>
        <div className={classes.actions}>
          <button type="submit">Apply</button>
        </div>
      </form>
      <div className={classes.actions}>
        <button onClick={backfn}>Go Back</button>
      </div>
    </section>
  );
};

export default ApplyLeave;
