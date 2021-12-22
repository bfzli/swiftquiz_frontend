import Layout from './Dashlayout'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import Login from '../../components/pages/Dashboard/Auth/Login';
import Register from '../../components/pages/Dashboard/Auth/Register';
import Reset from '../../components/pages/Dashboard/Auth/Reset'

export default function Dashauth() {
    // states: login, register, reset
    const [isLogin, setIsLogin] = useState('login');

    return (
        <Layout>
            <Helmet>
                <title>
                    {
                        {
                            'login': 'Login',
                            'register': 'Register',
                            'reset': 'Reset Password'
                        }[isLogin]
                    } - Swiftquiz</title>
                <meta name="description" content="Join the platform so you can play the best Quizzes." />
            </Helmet>

            {
                {
                    'login': <Login isLogin={isLogin} setIsLogin={setIsLogin} />,
                    'register': <Register isLogin={isLogin} setIsLogin={setIsLogin} />,
                    'reset': <Reset isLogin={isLogin} setIsLogin={setIsLogin} />
                }[isLogin]
            }
        </Layout>
    )
}
