import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import Loader from '../components/shared/Loaders/Pagloader'

export default function Redirect({to}) {

    const To = useNavigate()

    useEffect(() => { 
        To(to)
     }, [])

    return (<Loader />)
}
