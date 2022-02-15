import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center" }}>
            <h2>
            Software Engineering Class SFSU <br/>
            Spring 2022 <br/>
            Section 1 <br/>
            Team 1
            </h2>

            <button onClick={() => navigate('jocelyn')}>Jocelyn Guzman</button><br/>
            <button onClick={() => navigate('edel')}>Edel Jhon Cenario</button><br/>
            <button onClick={() => navigate('anthony')}>Anthony Zhang</button><br/>
            <button onClick={() => navigate('miroslav')}>Miroslav Stavrev</button><br/>
            <button onClick={() => navigate('hira')}>Hira Afzal</button><br/>
            <button onClick={() => navigate('ansel')}>Ansel Ngai</button>
        </div>
    );
}

export default About;