import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>Home...</div>
            <Link to="/About">About로</Link>
        </div>
    )
}

export default Home;