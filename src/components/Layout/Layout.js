import styled from "styled-components";

import Header from "../Header/Header";
import Footer from '../Footer/Footer';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0; margin: 0;
`

export default function Page(props) {
    return (
        <Container>

                <Header />

                    {props.children}

                <Footer />

        </Container>
    )
}
