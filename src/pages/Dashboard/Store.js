import StoreComp from "../../components/pages/Dashboard/Store/Store";
import {Helmet} from "react-helmet";
import Dashlayout from './Dashlayout';

export default function Store() {
   return (
      <Dashlayout>
         <Helmet>
            <title>Edit Profile - SwiftQuiz</title>
            <meta name="Edit Profil" content="Welcome, Editing Profil" />
         </Helmet>

         <StoreComp />
      </Dashlayout>
   );
}
