import Dashbar from '../../components/shared/Dashbar/Dashbar'

export default function Dashlayout(props) {
    return (
        <div id="_VAR">
            <Dashbar />
            {props.children}
        </div>
    )
}
