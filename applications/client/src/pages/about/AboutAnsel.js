import React from 'react';
import anselPic from '../../images/default about picture.png'

const AboutAnsel = () => {
    return (
        <div style={{ padding: "0 1% 0 1%" }}>
            <img src={anselPic} width="250px" height="250px" alt="default"/>

            <h1>[Name]</h1>
            <h2>Role: [Role]</h2>
            <p>[Description]</p>
        </div>
    );
}

export default AboutAnsel;