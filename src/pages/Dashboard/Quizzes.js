import React from 'react'
import Dashlayout from './Dashlayout'
import MyQuizzes from '../../components/pages/Dashboard/MyQuizzes/MyQuizzes'

export default function Quizzes() {
    return (
        <div>
            <Dashlayout>
                <MyQuizzes/>
            </Dashlayout>
        </div>
    )
}
