import React from 'react';
import jocelynPic from '../../images/default about picture.png'

const AboutJocelyn = () => {
    return (
        <div style={{ padding: "0 1% 0 1%" }}>
            <img src={jocelynPic} width="250px" height="250px" alt="default"/>

            <h1>[Name]</h1>
            <h2>Role: [Role]</h2>
            <p>[Description]</p>
        </div>
    );
}

export default AboutJocelyn;