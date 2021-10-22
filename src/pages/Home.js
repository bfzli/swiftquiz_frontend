import Layout from "../components/Layout/Layout"
import styled from "styled-components"

import Hero from '../components/Home/Hero/Hero'
import Features from '../components/Home/Features/Features'
import Make from '../components/Home/Make/Make'
import Community from '../components/Home/Community/Community'

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
            <White>
                <Make />
            </White>
            <White>
                <Community />
            </White>
        </Layout>
    )
}
