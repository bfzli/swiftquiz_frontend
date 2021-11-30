import Pagloader from "../components/shared/Loaders/Pagloader"
import Comploader from "../components/shared/Loaders/Comploader"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../pages/Layout'

export default function TestingLoaders() {
    const [loading, setLoading] = useState(true)

    const theme = useSelector((state) => state.ui.theme);
    return (
        <Layout>
            {
                loading === true ? <Comploader /> : 'data is loading'
            }

            {
                loading === true ? <Pagloader /> : 'data is loading'
            }
        </Layout>
    )
}
