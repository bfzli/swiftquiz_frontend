import Layout from "./Layout";
import Hero from "../components/pages/Home/Hero/Hero";
import Features from "../components/pages/Home/Features/Features";
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
            <Community />
        </Layout>
    )
}
