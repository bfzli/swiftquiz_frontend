import * as styles from './Editprofile.module.scss'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../../reduxComponents/actions/User";
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

   //dispatch action
   const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log("submitted");
      dispatch(updateUser(name, username, email, password, about));
   };

   return (
      <div className={styles.container}>
         <div className={styles.page_info} data-aos="fade-down">
            <h2 className={styles.welcome_text}>Edit Profile</h2>
            <div className={styles.search}>
               <input
                  className={styles.search_input}
                  type="text"
                  placeholder="dd"
               />
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
               {/* <select className={styles.category_filter} onChange={(e) => {
                  const get_value = e.target.value;
                  console.log(get_value)
                  dispatch(setCategoryFilter(get_value));
               }}>
                  <option value="61961c6488d1b50588079058">{t("community.mathematics")}</option>
                  <option value="61961c1788d1b50588079052">{t("community.physics")}</option>
                  <option value="617bf1df3b7012bee6d4056d">{t("community.sport")}</option>
                  <option value="61961c1b88d1b50588079055">{t("community.art")}</option>
                  <option value="61961be088d1b5058807904f">{t("community.others")}</option>
               </select> */}
            </div>
         </div>
         <main style={{ marginTop: '2.5em' }}>
            <div className={styles.top_right} data-aos="fade-left">
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
                        id="multiline-flexaible"
                        label="About"
                        multiline
                        value={about}
                        onChange={(e) => setabout(e.target.value)}
                     />
                  </div>

                  <div className="button-container">
                     <input
                        className="button"
                        type="submit"
                        value="Save"
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
