import "../EditProfilScreen/ProfileScreen.scss";
import "../../Form/Globals.module.scss";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateUser} from "../../../../reduxComponents/actions/Auth";

export default function ProfileScreen() {
   const update = useSelector((state) => state.auth.auth);
   const userInfo = update;
   console.log(userInfo);

   const dispatch = useDispatch();

   const [name, setname] = useState(userInfo?.name);
   const [email, setemail] = useState(userInfo?.email);
   const [username, setusername] = useState(userInfo?.username);
   const [password, setpassword] = useState("");
   const [about, setabout] = useState(userInfo?.about);

   // const updateUser = useSelector((state) => state.updateUser);
   // const [user, loading, error, succees] = updateUser;
   //dispatch action
   const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log("submitted");
      dispatch(updateUser(name, username, email, password, about));
   };
   return (
      <div className="container-fluid">
         <h1 className="title">Edit Profil</h1>
         <form clasName="center" onSubmit={handleFormSubmit}>
            <div className="grid">
               <div className="form-group">
                  <label for="name">Full Name</label>
                  <input
                     id="name"
                     type="text"
                     value={name}
                     onChange={(e) => setname(e.target.value)}
                  />
               </div>

               <div className="form-group">
                  <label for="username">Username</label>
                  <input
                     id="username"
                     type="text"
                     value={username}
                     onChange={(e) => setusername(e.target.value)}
                  />
               </div>

               <div className="form-group email-group">
                  <label for="email">Email</label>
                  <input
                     id="email"
                     type="email"
                     value={email}
                     onChange={(e) => setemail(e.target.value)}
                  />
               </div>
               <div className="form-group password-group">
                  <label for="password">Password</label>
                  <input
                     id="password"
                     type="password"
                     value={password}
                     onChange={(e) => setpassword(e.target.value)}
                  />
               </div>
            </div>
            <div className="about">
               <label for="about">About us</label>
               <textarea
                  id="multiline-flexible"
                  label="About"
                  multiline
                  value={about}
                  onChange={(e) => setabout(e.target.value)}
               />
            </div>

            <div className="button-container">
               {/* <button className="button">Save</button> */}
               <input className="button" type="submit" value="Save" />
            </div>
         </form>
      </div>
   );
}
