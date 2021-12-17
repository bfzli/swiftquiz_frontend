import { Helmet } from "react-helmet";
import Header from "../components/shared/Headev2/Header";
import Homeium from "../components/Homev2/Home";
import Footer from "../components/shared/Footerv2/Footer";
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
            <Homeium />
            <Footer />
        </div>
    )
}
