import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const AdminPass = () => {
   const user = useSelector((state) => state.auth.auth);
   return user.role === "admin" || user.role === "superadmin" ? <Outlet /> : <Navigate to="/dashboard/quizzes" />;
};

export default AdminPass;