import React from 'react';
import Departments from './Departments'
import Featured from './Featured'
import Hero from './Hero'
import Notice from './Notice'

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Departments />
            <Featured />       
            <Notice />
        </div>
    )
}

export default Home
