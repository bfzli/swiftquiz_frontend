import * as styles from './Editprofile.module.scss'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, closeAccount } from "../../../../reduxComponents/actions/User";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

export default function ProfileScreen() {
   const succeesUpdated = () => {
      toast.success("successfully updated your profile", {
         position: toast.POSITION.TOP_CENTER,
         autoClose: 1600,
      });
   };

   const update = useSelector((state) => state.auth.auth);
   const userInfo = update;
   const dispatch = useDispatch();

   const [name, setname] = useState(userInfo?.name);
   const [email, setemail] = useState(userInfo?.email);
   const [username, setusername] = useState(userInfo?.username);
   const [password, setpassword] = useState("");
   const [about, setabout] = useState(userInfo?.about);

   const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log("submitted");
      dispatch(updateUser(name, username, email, password, about));
   };

   return (
      <div className={styles.container}>
         <div className={styles.page_info} data-aos="fade-down">
            <h2 className={styles.welcome_text}>Edit Profile</h2>
            <div className={styles.search} style={{ display: 'none' }}>
               <input className={styles.search_input} />
               <div className={styles.search_wrapper}>
                  <svg
                     className={styles.search_icon}
                     width="32"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
                  </svg>
               </div>
            </div>
         </div>
         <main style={{ marginTop: '2.5em' }}>
            <div className={styles.top_right} data-aos="fade-left">
               <form clasName="center" onSubmit={handleFormSubmit}>
                  <div className="grid">
                     <div className={styles.inwrapper}>
                        <label for="name">Full Name</label> <br />
                        <input
                           id="name"
                           type="text"
                           value={name}
                           className={styles.inputi}
                           onChange={(e) => setname(e.target.value)}
                        />
                     </div>

                     <div className={styles.inwrapper}>
                        <label for="username">Username</label> <br />
                        <input
                           id="username"
                           type="text"
                           className={styles.inputi}
                           value={username}
                           onChange={(e) => setusername(e.target.value)}
                        />
                     </div>

                     <div className={styles.inwrapper}>
                        <label for="email">Email</label> <br />
                        <input
                           className={styles.inputi}
                           id="email"
                           type="email"
                           value={email}
                           onChange={(e) => setemail(e.target.value)}
                        />
                     </div>
                     <div className={styles.inwrapper}>
                        <label for="password">Password</label> <br />
                        <input
                           className={styles.inputi}
                           id="password"
                           type="password"
                           value={password}
                           onChange={(e) => setpassword(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className={styles.inwrapper}>
                     <label for="about">About us</label> <br />
                     <textarea
                        id="multiline-flexaible"
                        label="About"
                        multiline
                        className={styles.inputi}
                        value={about}
                        onChange={(e) => setabout(e.target.value)}
                     />
                  </div>

                  <div className={styles.inwrapper}>
                     <input
                        type="submit"
                        value="Close Account"
                        className={styles.inputi}
                        onClick={() => dispatch(closeAccount())}
                     />
                  </div>

                  <div className="button-container">
                     <input
                        type="submit"
                        value="Save"
                        className={styles.inputi}
                        onClick={succeesUpdated}
                     />
                  </div>

               </form>
               <div className={styles.quizess}>
               </div>
            </div>
         </main >
      </div >
   )
}
