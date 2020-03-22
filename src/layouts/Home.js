import React from 'react';
import Header from '../components/header/Header';
import Content from '../components/contentpage/Content';
import Card from '../components/contentpage/Card';
import NewsChannel from '../components/contentpage/News';

const Home = () => {
    return (
        <div>
            <Header/>
            <Content/>
            <Card/>
            <NewsChannel/>
        </div>
    )
}

export default Home
