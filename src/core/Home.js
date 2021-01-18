import React from 'react';
import '../styles.css';
import {API} from '../backend'; //here we are connecting frontend with backend through env.
import Base from './Base';

function Home() {
    return (
        <Base title="Home Page" description="Welcome to the Tshirt Store">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success">Test</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">Test</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">Test</button>
                </div>
            </div>
        </Base>
    );
}

export default Home;  //here this file renders the data to Routes.js.
