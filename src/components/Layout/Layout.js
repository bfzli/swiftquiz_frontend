import styled from "styled-components";

import Header from "../Header/Header";
import Footer from '../Footer/Footer';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--primary);
    color: var(--secondary);
`

export default function Page(props) {
    return (
        <>
            <Container>
                <Header />

                {props.children}

                <Footer />
            </Container>
        </>
    )
}
