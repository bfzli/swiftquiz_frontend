import styled from "styled-components"
import Illustration from "../../../../assets/images/desk.jpeg"

const Img = styled.img`
    width: 100%;
`

export default function Image() {
    return (
        <Img src={Illustration}>
            
        </Img>
    )
}
