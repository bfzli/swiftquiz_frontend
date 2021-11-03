import Pagloader from "../components/shared/Loaders/Pagloader"
import Comploader from "../components/shared/Loaders/Comploader"
import {useState} from 'react'

export default function TestingLoaders() {
    const [loading, setLoading] = useState(true)
    return (
        <div>
            <h1>
            Component Loading (in purple):
            </h1>
            {
                loading === true ? <Comploader color="purple" /> : 'data is loader'
            }

            <h1 style={{background: '#5928e5'}}>
            Component Loading (in white):
            {
                loading === true ? <Comploader color="white" /> : 'data is loader'
            }
            </h1>
            
            <br />

            <h1>
                Page Loading (in purple):
            </h1>
            {
                loading === true ? <Pagloader color="purple" /> : 'data is loader'
            }

            <h1 style={{background: '#5928e5'}}>
                Page Loading (in white):
            {
                loading === true ? <Pagloader color="white" /> : 'data is loader'
            }
            </h1>
        </div>
    )
}
