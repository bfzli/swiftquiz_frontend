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
                <meta name="description" content="Ops something went wrong with the page, if you think this is a mistake contact the team." />
            </Helmet>

            <Hero />
            <Features />
            <Started />
            <Community />
        </Layout>
    )
}