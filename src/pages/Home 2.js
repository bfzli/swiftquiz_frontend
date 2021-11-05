import Layout from "./Layout";
import Hero from "../components/pages/Home/Hero/Hero";
import Features from "../components/pages/Home/Features/Features";
import Started from "../components/pages/Home/Started/Started";
import Community from "../components/pages/Home/Community/Community";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Features />
            <Started />
            <Community />
        </Layout>
    )
}