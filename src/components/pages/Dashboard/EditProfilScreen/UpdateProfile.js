import React, {Fragment, useState, useEffect} from "react";
import "./UpdateProfile.css";
import Loader from "../../../shared/Loaders/Loader";
import {useDispatch, useSelector} from "react-redux";
import {
   clearErrors,
   updateProfile,
   loadUser,
} from "../../../../reduxComponents/actions/User";
// import {useAlert} from "react-alert";
import {UPDATE_PROFILE_RESET} from "../../../../reduxComponents/constants/index";
const UpdateProfile = ({history}) => {
   const dispatch = useDispatch();
   // const alert = useAlert();
   // const update = useSelector((state) => state.auth.auth);
   // const userInfo = update;
   const user = useSelector((state) => state.auth.auth);
   const {error, isUpdated, loading} = useSelector((state) => state.profile);

   const [name, setName] = useState(`${user.name}`);
   const [email, setEmail] = useState(`${user.email}`);
   const [username, setUsername] = useState(`${user.username}`);
   const [about, setAbout] = useState(`${user.about}`);

   const updateProfileSubmit = (e) => {
      e.preventDefault();

      const myForm = new FormData();

      myForm.set("name", name);
      myForm.set("email", email);
      myForm.set("username", username);
      myForm.set("about", about);
      dispatch(updateProfile(myForm));
   };

   useEffect(() => {
      if (user) {
         setName(user.name);
         setEmail(user.email);
         setUsername(user.username);
         setAbout(user.about);
      }

      if (error) {
         // alert.error(error);
         dispatch(clearErrors());
      }

      if (isUpdated) {
         // alert.success("Profile Updated Successfully");
         dispatch(loadUser());

         history.push("/account");

         dispatch({
            type: UPDATE_PROFILE_RESET,
         });
      }
   }, [dispatch, error, history, user, isUpdated]);
   return (
      <div className="updateProfileContainer">
         <div className="updateProfileBox">
            <h2 className="updateProfileHeading">Update Profile</h2>

            <form
               className="updateProfileForm"
               encType="multipart/form-data"
               onSubmit={updateProfileSubmit}
            >
               <div className="updateProfileName">
                  <input
                     type="text"
                     placeholder="Name"
                     name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div className="updateProfileEmail">
                  <input
                     type="email"
                     placeholder="Email"
                     name="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div className="updateProfile">
                  <input
                     type="username"
                     placeholder="Userame"
                     name="username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>
               <div className="updateProfileEmail">
                  <textarea
                     name="about"
                     value={about}
                     onChange={(e) => setAbout(e.target.value)}
                  />
               </div>

               <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
               />
            </form>
            <button>Change Password</button>
         </div>
      </div>
   );
};

export default UpdateProfile;
