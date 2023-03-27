import "./App.css";
import Welcome from "./Components/WelcomePage";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import LoginForm from "./Components/LoginForm";
import Employee from "./Profile/Employee/Emloyee";
import Manager from "./Profile/Manager/Manager";
import Admin from "./Profile/Admin/Admin";
import { useContext } from "react";
import AuthContext from "./Store/Auth-Context";
import { getDatabase, ref, child, get, Database, set } from "firebase/database";
import RemoveEmployee from "./Profile/Admin/RemoveEmployee";
import ApplyLeave from "./Profile/Employee/ApplyLeave";
import AddEmployee from "./Profile/Admin/AddEmployee";

function App() {
  const authctx = useContext(AuthContext);
  const isloggedIn = authctx.isloggedIn;

  const dbref = ref(getDatabase());
  const db = getDatabase();

  // set(ref(db, `Leave/${21}`), {
  //   Name: "Sushant",
  //   days: "2",
  //   manager: "Sachin",
  // });

  // set(ref(db, `Authentication/${6}`), {
  //   userID: "HolD6YjkbSPLAroEOdijlgxOf0z1",
  //   role: "Employee",
  //   name: "Sumit",
  // });

  // get(child(dbref, `Employee`)).then((snapshot) => {
  //   console.log(snapshot.val());
  //   for (const key in snapshot.val()) {
  //     console.log(key, snapshot.val()[key].employeeName);
  //   }
  // });

  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Welcome />} exact></Route>
        <Route path="/Login" element={<LoginForm />}></Route>
        {isloggedIn && <Route path="/Employee" element={<Employee />}></Route>}
        {isloggedIn && <Route path="/Features" element={<Employee />}></Route>}
        {isloggedIn && (
          <Route path="/Admin" element={<Admin />}>
            <Route path="AddEmployee" element={<AddEmployee />}></Route>
            <Route path="RemoveEmployee" element={<RemoveEmployee />}></Route>
          </Route>
        )}

        {isloggedIn && (
          <Route path="/ApplyLeave" element={<ApplyLeave />}></Route>
        )}
        {isloggedIn && <Route path="/Manager" element={<Manager />}></Route>}
      </Routes>
    </Layout>
  );
  // return <RouterProvider router={router} />;
}

export default App;
