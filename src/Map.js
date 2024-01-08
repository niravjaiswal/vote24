import React, { useState } from 'react';
import TopicsGrid from './topic_grid';
import Nav from './Nav';

export default function Home() {

    return (
        <div>
            <Nav />
            <div className='py-6'>
                <h1 className='text-4xl py-3'>Coming Soon!</h1>
                <h2 className='text-2xl'>Will show voting locations near you</h2>
            </div>
        </div>
    );
}
