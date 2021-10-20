import Layout from "../components/Layout/Layout"
import Hero from '../components/Home/Hero/Hero'
import Features from '../components/Home/Features/Features'
import styled from "styled-components"

const Purple = styled.div`
    background: #5928E5
`

const White = styled.div`
    background: white
`

export default function Home() {
    return (
        <Layout>
            <Purple>
                <Hero />
            </Purple>
            <White>
                <Features />
            </White>
        </Layout>
    )
}
