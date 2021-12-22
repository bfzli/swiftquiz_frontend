import React from "react";
import Helmet from "react-helmet";
import ResetPsw from "../components/pages/Form/resetpassword/ResetPsw";
const ResetPass = () => {
   return (
      <>
         <Helmet>
            <title>Reset Password</title>
            <meta name="Change Password" />
         </Helmet>
         <ResetPsw />
      </>
   );
};

export default ResetPass;
