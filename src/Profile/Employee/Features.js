import classes from "./Employee.module.css";
import { useNavigate } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import LeaveList from "./LeaveList";

const Features = (props) => {
  const navigate = useNavigate();
  const applyLeaveHandler = () => {
    navigate("/ApplyLeave");
  };
  useEffect(() => {
    props.refresh();
    console.log("refresh");
  }, []);

  return (
    <Fragment>
      <div className={classes.actions}>
        <div>
          <button className="classes.actions" onClick={applyLeaveHandler}>
            Apply Leave
          </button>
        </div>
        <div>
          <button className="classes.actions">Manage Profile</button>
        </div>
      </div>
      <div>
        <LeaveList List={props.leaveList} />
      </div>
    </Fragment>
  );
};
export default Features;
