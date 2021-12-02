import ProfileScreen from "../components/pages/Dashboard/EditProfilScreen/ProfileScreen";
import {Helmet} from "react-helmet";
export default function EditProfile() {
   return (
      <>
         <Helmet>
            <title>Edit Profile - SwiftQuiz</title>
            <meta name="Edit Profil" content="Welcome, Editing Profil" />
         </Helmet>
         <ProfileScreen />
      </>
   );
}
