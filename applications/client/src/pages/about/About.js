import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>
            Software Engineering Class SFSU <br />
            Spring 2022 <br />
            Section 1 <br />
            Team 1
            </h2>

            <Link to="anthony">Anthony Zhang</Link>
        </div>
    );
}

export default About;