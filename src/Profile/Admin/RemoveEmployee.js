import { Fragment } from "react";
import EmployeeList from "./EmployeeList";
import classes from "./AddEmployee.module.css";

import { useRef, useState } from "react";

const RemoveEmployee = (props) => {
  const inputId = useRef();
  const [promotionisClicked, setPromotion] = useState(false);
  const [DeleteisClicked, setDelete] = useState(false);
  const identifierdel = () => {
    setDelete(true);
  };
  const identifierpro = () => {
    setPromotion(true);
  };
  const Backfn = () => {
    props.click(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const employeeId = inputId.current.value;

    let dbId = "";
    props.employeeList.map((emp) => {
      if (emp.employeeId === employeeId) {
        dbId = emp.id;
      }
    });

    if (promotionisClicked) {
      fetch(
        `https://customhook-3538f-default-rtdb.firebaseio.com/Employee/${dbId}.json`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            employeeRole: "Manager",
          }),
        }
      ).then((response) => {
        if (response.ok) {
          console.log("Promoted");
          props.click(false);
          setPromotion(false);
        }
      });
    }
    if (DeleteisClicked) {
      fetch(
        `https://customhook-3538f-default-rtdb.firebaseio.com/Employee/${dbId}.json`,
        {
          method: "DELETE",
        }
      ).then((response) => {
        if (response.ok) {
          console.log("Deleted!");
          Backfn();
          setDelete(false);
        }
      });
    }
  };
  return (
    <Fragment>
      <section className={classes.auth}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="id">EmployeeId</label>
            <input type="text" id="id" ref={inputId} />
          </div>
          <div className={classes.actions}>
            <button type="submit" onClick={identifierdel}>
              Delete
            </button>
          </div>
          <div className={classes.actions}>
            <button type="submit" onClick={identifierpro}>
              Promote
            </button>
          </div>
          <div className={classes.actions}>
            <button onClick={Backfn}>GoBack</button>
          </div>
        </form>
      </section>
      <div>
        <EmployeeList employeeList={props.employeeList} />
      </div>
    </Fragment>
  );
};

export default RemoveEmployee;
