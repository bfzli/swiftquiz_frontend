import React from 'react'
import Dashlayout from './Dashlayout'
import ProfilePage from '../../components/pages/Dashboard/Profile/ProfilePage'

export default function Profile() {
    return (
        <div>
            <Dashlayout>
                <ProfilePage/>
            </Dashlayout>
        </div>
    )
}
