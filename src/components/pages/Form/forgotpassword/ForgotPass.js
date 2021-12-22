import React, {useState} from "react";
import "../forgotpassword/forgotpass.css";
import {useDispatch} from "react-redux";
//mport {useAlert} from "react-alert";
//import Loader from "../../../shared/Loaders/Loader";
// import {isEmail} from "../../../../utils/validationForgot";
// import {
//    showErrMsg,
//    showSuccessMsg,
// } from "../../../../utils/Noftication/noftication";

import {
   forgotpasswordAction,
   //clearErrors,
} from "../../../../reduxComponents/actions/User";
const ForgotPass = () => {
   const dispatch = useDispatch();
   //  const alert = useAlert();

   // const [error, message, loading] = useSelector(
   //    (state) => state.forgotpasswordAction
   // );

   const [email, setEmail] = useState("");
   const forgotpasswordHandleSubmit = (e) => {
      e.preventDefault();
      console.log("Submited");
      dispatch(forgotpasswordAction(email));
   };
   // useEffect(() => {
   //    if (error) {
   //       alert.error(error);
   //       dispatch(clearErrors());
   //    }

   //    if (message) {
   //       alert.success(message);
   //    }
   // }, [dispatch, error, alert, message]);

   // const initialState = {
   //    email: "",
   //    err: "",
   //    success: "",
   // };

   // const [data, setData] = useState(initialState);
   // // const [email, setEmail] = useState();
   // const {email, err, success} = data;
   // const dispatch = useDispatch();

   // const handleChangeInput = (e) => {
   //    const {name, value} = e.target;
   //    setData({...data, [name]: value, err: "", success: ""});
   // };

   // const forgotPasswordSentHandleSubmit = async (e) => {
   //    if (!isEmail(email))
   //       return setData({...data, err: "Invalid emails.", success: ""});
   //    e.prevenDefault();
   //    console.log("submitd");
   //    dispatch(forgotpasswordAction(email));

   // try {
   //    const res = await axios.post("/user/forgot", {email});

   //    return setData({...data, err: "", success: res.data.msg});
   // } catch (err) {
   //    err.response.data.msg &&
   //       setData({...data, err: err.response.data.msg, success: ""});
   // }
   // };

   return (
      <div className="fg_pass">
         <h2>Forgot Your Password?</h2>
         <form onSubmit={forgotpasswordHandleSubmit}>
            <div className="row">
               {/* {err && showErrMsg(err)}
               {success && showSuccessMsg(success)} */}

               <label htmlFor="email">Enter your email address</label>
               <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // value={email}
                  // onChange={handleChangeInput}
                  autofocus
               />
               <input
                  type="submit"
                  value="Send Reset"
                  className="btn_submit"
                  id="btn"
                  // onClick={forgotPasswordSentHandleSubmit}
               />
            </div>
         </form>
      </div>
   );
};

export default ForgotPass;
