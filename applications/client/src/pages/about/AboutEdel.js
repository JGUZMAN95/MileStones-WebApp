import React from 'react';
import ProfileUi from 'react-profile-card';
import edelPic from '../../images/pictureOfEdel.jpg'

const AboutEdel = () => {
    return ( 
        // <div style = {
        //     { padding: "0 1% 0 1%" }
        // }>

        // <
        // img src = { edelPic }
        // width = "250px"
        // height = "250px"
        // alt = "default" 
        // />

        // <h1> Edel Jhon Cenario </h1> 
        // <h2> Role: Front End Lead </h2> 

        // <p>
        // Hi, I 'm Edel, but you can call me Ejay. <br/>
        // I play guitar when I 'm bored. <br/>
        // I like bowling, hanging out with friends, and eating out. 
        // </p> 
        
        // </div>

        <div style = {
            {
                display: 'flex',
                textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
                alignSelf: 'center',
            position: 'relative'}
        }> 
        <ProfileUi 
            imgUrl={edelPic} 
            name='EJ Cenario' 
            designation='Front End Lead' 
            />


        <p style = {
            { 
                paddingTop: 400,
                textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
                alignSelf: 'center',
                position: 'absolute'
            }
        }>
        Hi, I 'm Edel, but you can call me Ejay. <br/>
        I play guitar when I 'm bored. <br/>
        I like bowling, hanging out with friends, and eating out. 
        </p> 
        </div>
    );
}

export default AboutEdel;