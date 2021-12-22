import React, {Fragment, useState, useEffect} from "react";
import "./UpdatePassword.css";
// import Loader from "../layout/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {
   clearErrors,
   updatePassword,
} from "../../../../reduxComponents/actions/User";
import {useAlert} from "react-alert";
import {UPDATE_PASSWORD_RESET} from "../../../../reduxComponents/constants/index";

const UpdatePassword = ({history}) => {
   const dispatch = useDispatch();
   //    const alert = useAlert();

   const {error, isUpdated, loading} = useSelector((state) => state.profile);

   const [currentPassword, setCurrentPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const updatePasswordSubmit = (e) => {
      e.preventDefault();
      console.log("submited");

      // const myForm = new FormData();

      // myForm.set("oldPassword", oldPassword);
      // myForm.set("newPassword", newPassword);
      // myForm.set("confirmPassword", confirmPassword);
      dispatch(updatePassword(currentPassword, newPassword, confirmPassword));
   };

   useEffect(() => {
      if (error) {
         alert.error(error);
         dispatch(clearErrors());
      }

      if (isUpdated) {
         alert.success("Profile Updated Successfully");

         history.push("/account");

         dispatch({
            type: UPDATE_PASSWORD_RESET,
         });
      }
   }, [dispatch, history, isUpdated]);

   return (
      <div className="updatePasswordContainer">
         <div className="updatePasswordBox">
            <h1>Change Password</h1>
            <h2 className="updatePasswordHeading">Update Profile</h2>

            <form
               className="updatePasswordForm"
               onSubmit={updatePasswordSubmit}
            >
               <div className="loginPassword">
                  {" "}
                  <input
                     type="password"
                     placeholder="Old Password"
                     required
                     value={currentPassword}
                     onChange={(e) => setCurrentPassword(e.target.value)}
                  />
               </div>

               <div className="loginPassword">
                  <input
                     type="password"
                     placeholder="New Password"
                     required
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                  />
               </div>
               <div className="loginPassword">
                  <input
                     type="password"
                     placeholder="Confirm Password"
                     required
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                  />
               </div>
               <input
                  type="submit"
                  value="Change"
                  className="updatePasswordBtn"
               />
            </form>
         </div>
      </div>
      // </Fragment>
      //      )}
      //     //   </Fragment>
   );
};

export default UpdatePassword;
