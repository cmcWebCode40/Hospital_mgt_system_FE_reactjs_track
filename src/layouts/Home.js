import React from 'react';
import Content from '../components/contentpage/Content';
import Card from '../components/contentpage/Card';
import NewsChannel from '../components/contentpage/News';

const Home = () => {
    return (
        <div>
            <Content/>
            <Card/>
            <NewsChannel/>
        </div>
    )
}

export default Home
