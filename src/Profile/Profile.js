import { getDatabase } from "firebase/database";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ref, child, get } from "firebase/database";
import { app } from ".././Firebase/firebaseConfig";
import AuthContext from "../Store/Auth-Context";

const Profile = (props) => {
  const navigate = useNavigate();
  const authctx = useContext(AuthContext);
  const { id } = props;

  const dbref = ref(getDatabase(app));
  useEffect(() => {
    get(child(dbref, `Authentication`)).then((object) => {
      for (const key in object.val()) {
        if (
          object.val()[key].userID === id &&
          object.val()[key].role === "Employee"
        ) {
          authctx.getUserDetail(
            object.val()[key].employeeId,
            object.val()[key].name,
            object.val()[key].role
          );

          return navigate("/Employee");
        }
        if (
          object.val()[key].userID === id &&
          object.val()[key].role === "Admin"
        ) {
          authctx.getUserDetail(
            object.val()[key].employeeId,
            object.val()[key].name,
            object.val()[key].role
          );
          return navigate("/Admin");
        }
        if (
          object.val()[key].userID === id &&
          object.val()[key].role === "Manager"
        ) {
          authctx.getUserDetail(
            object.val()[key].employeeId,
            object.val()[key].name,
            object.val()[key].role
          );
          return navigate("/Manager");
        }
      }
    });
  }, [id]);
};
export default Profile;
