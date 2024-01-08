import React, { useState } from 'react';
import TopicsGrid from './topic_grid';
import Nav from './Nav';

export default function Home() {

    return (
        <div>
            <Nav />
            <TopicsGrid />
        </div>
    );
}
