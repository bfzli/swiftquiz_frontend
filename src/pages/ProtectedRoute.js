import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export const ProtectedRoute = ({component: Component, ...rest}) => {
   const user = useSelector((state) => state.auth.auth);

   return (
      <Route
         {...rest}
         render={(props) => {
            if (user.token !== undefined) {
               return <Component {...props} />;
            } else {
               return (
                  <Redirect
                     to={{
                        pathname: "/auth",
                        state: {
                           from: props.location,
                        },
                     }}
                  />
               );
            }
         }}
      />
   );
};
