import styled from "styled-components";

const Btn = styled.button`
    font-family: 'Integral CF Demi Bold';
    font-size: .9em;
    padding: 0.775em 1.5em;
    background: #FFFFFF25;
    color: #fff;
    border: 0;
    border-radius: 100px;
    transition: all ease-in-out .3s;
    cursor: pointer;
    margin-right: 1em;

    &:hover{
        letter-spacing: 3px;
    }
`

export default function ButtonFaded() {
    return (
        <Btn>
            LOGIN
        </Btn>
    )
}
