import React from 'react';
import '../styles.css';
import {API} from '../backend'; //here we are connecting frontend with backend through env.
import Base from './Base';

function Home() {
    return (
        <Base>
            <h1 className="text-white">Hello world</h1>
        </Base>
    );
}

export default Home;  //here this file renders the data to Routes.js.
