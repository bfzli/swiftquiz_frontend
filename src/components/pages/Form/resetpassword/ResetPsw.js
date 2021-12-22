import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {resetPasswordAction} from "../../../../reduxComponents/actions/User";

const ResetPsw = () => {
   const dispatch = useDispatch();

   const [password, setPassword] = useState("");
   const [confirmPassword, setconfirmPassword] = useState("");

   const resetPasswordHandleSubmit = (e, token) => {
      e.preventDefault();
      console.log("submitted");
      //dispatch(resetPasswordAction(match.params.token,password));
      const myform = new FormData();
      myform.set("password", password);
      myform.set("ConfirmPassword", confirmPassword);
      dispatch(resetPasswordAction(token, myform));
   };
   return (
      <>
         <div className="fg_pass">
            <h2>Change Reset Password</h2>
            <form className="" id="form" onSubmit={resetPasswordHandleSubmit}>
               <div className="row">
                  <label htmlFor="password">New Password</label>
                  <input
                     type="password"
                     id="password"
                     placeholder="********"
                     autofocus
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="Confirm Password">Confirm Password</label>
                  <input
                     type="password"
                     id="confirm_password"
                     placeholder="********"
                     autofocus
                     value={confirmPassword}
                     onChange={(e) => setconfirmPassword(e.target.value)}
                  />
                  <input
                     value="Submit"
                     type="submit"
                     className="btn_submit"
                     id="btn"
                  />
               </div>
            </form>
         </div>
      </>
   );
};

export default ResetPsw;
