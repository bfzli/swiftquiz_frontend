import React from 'react'
import Layout from './Layout';
import About from '../components/pages/AboutUs/About/About'
import Members from '../components/pages/AboutUs/TeamMembers/Members'

const AboutUs = () => {
    return (
        <Layout>
            <About/>
            <Members/>
        </Layout>
    )
}

export default AboutUs
