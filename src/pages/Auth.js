import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Auth = () => {
   const user = useSelector((state) => state.auth.auth);

   return user.token !== undefined ? <Outlet /> : <Navigate to="/auth" />;
};

export default Auth;