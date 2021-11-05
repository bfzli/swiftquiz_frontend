import Pagloader from "../components/shared/Loaders/Pagloader"
import Comploader from "../components/shared/Loaders/Comploader"
import { useState } from 'react'

export default function TestingLoaders() {
    const [loading, setLoading] = useState(true)
    return (
        <div>
            <div>
                {
                    loading === true ? <Comploader color="purple" /> : 'data is loader'
                }
            </div>

            <div style={{ background: '#5928e5' }}>
                {
                    loading === true ? <Comploader color="white" /> : 'data is loader'
                }
            </div>

            <div>
                {
                    loading === true ? <Pagloader color="purple" /> : 'data is loader'
                }
            </div>

            <div style={{ background: '#5928e5' }}>
                {
                    loading === true ? <Pagloader color="white" /> : 'data is loader'
                }
            </div>
        </div>
    )
}
