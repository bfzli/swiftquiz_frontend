import React from "react";
import {Helmet} from "react-helmet";
import ForgotPass from "../components/pages/Form/forgotpassword/ForgotPass";
const ForgotEmail = () => {
   return (
      <>
         <Helmet>
            <title>SentRequest Forget Password</title>
            <meta name="Send Reset Password" />
         </Helmet>
         <ForgotPass />
      </>
   );
};

export default ForgotEmail;
