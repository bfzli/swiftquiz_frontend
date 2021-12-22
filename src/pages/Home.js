import { Helmet } from "react-helmet";
import Header from "../components/shared/Header/Header";
import HomeComponent from "../components/pages/Home/Home";
import Footer from "../components/shared/Footer/Footer";
import { useSelector } from 'react-redux';

export default function Home() {

    const theme = useSelector(state => state.ui.theme)

    return (
        <div class="body" id={theme === "lightmode" ? "lightmode" : "darkmode"}>
            
            <Helmet>
                <title>The land of Quizzes - Swiftquiz</title>
                <meta name="description" content="The land of Quizzes to play." />
            </Helmet>

            <Header />
                <HomeComponent />
            <Footer />
        </div>
    )
}
