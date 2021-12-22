import ProfileScreen from "../components/pages/Dashboard/EditProfilScreen/ProfileScreen";
import {Helmet} from "react-helmet";
import Dashlayout from './Dashboard/Dashlayout';

export default function EditProfile() {
   return (
      <Dashlayout>
         <Helmet>
            <title>Edit Profile - SwiftQuiz</title>
            <meta name="Edit Profil" content="Welcome, Editing Profil" />
         </Helmet>
         <ProfileScreen />
      </Dashlayout>
   );
}
