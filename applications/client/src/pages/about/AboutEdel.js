import React from 'react';
import edelPic from '../../images/default about picture.png'

const AboutEdel = () => {
    return (
        <div style={{ padding: "0 1% 0 1%" }}>
            <img src={edelPic} width="250px" height="250px" alt="default"/>

            <h1>[Name]</h1>
            <h2>Role: [Role]</h2>
            <p>[Description]</p>
        </div>
    );
}

export default AboutEdel;