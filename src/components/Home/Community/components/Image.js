import styled from "styled-components"
import Illustration from "../../../../assets/images/toolkit.png"

const Img = styled.img`
    width: 90%;
    margin-right: 2.5em;
`

export default function Image() {
    return (
        <Img src={Illustration}>
            
        </Img>
    )
}
