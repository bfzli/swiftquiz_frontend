import Layout from "./Layout";
import Hero from "../components/pages/Home/Hero/Hero";
import Features from "../components/pages/Home/Features/Features";
import Started from "../components/pages/Home/Started/Started";
import Community from "../components/pages/Home/Community/Community";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <title>The land of Quizzes - Swiftquiz</title>
                <meta name="description" content="The land of Quizzes to play." />
            </Helmet>

            <Hero />
            <Features />
            {/* <Started /> */}
            <Community />
        </Layout>
    )
}