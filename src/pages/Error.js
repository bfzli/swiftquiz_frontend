import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import Title from '../components/Error/Title'
import Description from '../components/Error/Description'
import Animation from '../components/Error/Animation'
import Button from "../components/Error/Button"


const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default function Error() {
    return (
        <Layout>
            <Container>
                <Animation />
                <Title />
                <Description />
                <Button />
            </Container>
        </Layout>
    )
}
