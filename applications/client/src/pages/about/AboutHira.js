import React from 'react';
import hiraPic from '../../images/default about picture.png'

const AboutHira = () => {
    return (
        <div style={{ padding: "0 1% 0 1%" }}>
            <img src={hiraPic} width="250px" height="250px" alt="default"/>

            <h1>[Name]</h1>
            <h2>Role: [Role]</h2>
            <p>[Description]</p>
        </div>
    );
}

export default AboutHira;