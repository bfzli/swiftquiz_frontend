import { Route, Redirect } from "react-router-dom";

const userAuth = false;

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (userAuth === true) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/auth",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
