import styled from "styled-components";

const Btn = styled.button`
    width: 42%;
    font-family: 'Integral CF Demi Bold';
    font-size: 1em;
    padding: 0.82em 1.5em;
    border-radius: 100px;
    border: 0;
    transition: all ease-in-out .3s;
    cursor: pointer;
    text-align: start;
    color: #fff;
    background: #5928E5;
    text-align: center;

    &:hover{
        letter-spacing: 3px;
    }
`

export default function Button(props) {
    return (
        <Btn>
            {props.text}
        </Btn>
    )
}
