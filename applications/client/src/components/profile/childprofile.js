import React from "react"
import "./childprofile.css"
import icon from '../../images/monster.png'

export default function ViewChildProfiles() {
  return (
      <div class={"float-container"} className={"profile"}>
        <div className={"profile-box"}>
          <img src = {icon}
            className={"icon"}/>
          <label className={'profile-text'}>
            <h1>Name: </h1>
            <h1>Age: </h1>
         </label>
        </div>
        <div className={"rec-box"}>
            <div class={"float-container"} className={'button'}>
              <div className={'education-button'}>
                <button className={'edu-bttn'} onClick={''}>
                  Education
                </button>
              </div>
              <div className={'activities-button'}>
                <button className={'act-bttn'} onClick={''}>
                  Activites
                </button>
              </div>
            </div>
        </div>
      </div>



  )
}
