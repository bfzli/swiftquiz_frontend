import Dashbar from '../../components/shared/Dashbar/Dashbar'
import { useSelector } from 'react-redux';

export default function Dashlayout(props) {
    const theme = useSelector(state => state.ui.theme)

    return (
        <div id={theme === "lightmode" ? "lightmode" : "darkmode"}>
            <Dashbar page={props.children} />
        </div>
    )
}
