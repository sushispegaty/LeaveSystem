import classes from "./ApprovalList.module.css";

const FilteredList = (props) => {
  const onApprove = (dbId) => {
    console.log(dbId);
    fetch(
      `https://customhook-3538f-default-rtdb.firebaseio.com/Leaves/${dbId}.json`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "approved",
        }),
      }
    ).then((response) => {
      if (response.ok) {
        console.log("Approved");
        props.refresh();
      }
    });
  };

  const onCancel = (dbId) => {
    fetch(
      `https://customhook-3538f-default-rtdb.firebaseio.com/Leaves/${dbId}.json`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "cancelled",
        }),
      }
    ).then((response) => {
      if (response.ok) {
        console.log("Cancelled!");
        props.refresh();
      }
    });
  };
  const Approvals = props.List.map((emp) => {
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
        <div className={classes.actions}>
          <button onClick={onApprove.bind(null, emp.id)}>Approve</button>
        </div>
        <div className={classes.actions}>
          <button onClick={onCancel.bind(null, emp.id)}>Cancel</button>
        </div>
      </li>
    );
  });

  return (
    <section className="Leave-list">
      <ul>{Approvals}</ul>
    </section>
  );
};

export default FilteredList;
