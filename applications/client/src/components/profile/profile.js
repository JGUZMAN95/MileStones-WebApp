import React from "react"
import "./profile.css"

export default function Profile() {
  return (
    <div className="profile flex-col-hstart-vstart clip-contents">
      <div className="flex-row">
        <div className="group-225 flex-col">
          <div className="group-20">
            <p className="txt-1010 flex-hcenter">Schedule</p>
          </div>
          <div className="group-21">
            <p className="txt-382 flex-hcenter">Services</p>
          </div>
          <div className="group-22">
            <p className="txt-382 flex-hcenter">Messages</p>
          </div>
        </div>
        <div className="group-19 flex-col-hcenter">
          <div className="group-807 flex-row">
            <p className="txt-620 flex-hcenter">Month</p>
            <p className="txt-382 flex-hcenter">Events</p>
          </div>
          <div className="flex-row">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jhm4ctd9rz-525%3A225?alt=media&token=f20872d0-beff-4287-8d75-29a173eb01d5"
              alt="Not Found"
              className="rectangle-42"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jhm4ctd9rz-525%3A224?alt=media&token=f8bc29a1-1c65-4a66-a956-340712a14e8b"
              alt="Not Found"
              className="rectangle-43"
            />
          </div>
        </div>
      </div>
      <div className="flex-row-vcenter">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jhm4ctd9rz-525%3A185?alt=media&token=e9312115-9a6a-487e-9e7f-92faad64fa24"
          alt="Not Found"
          className="welcome"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jhm4ctd9rz-525%3A208?alt=media&token=11668e19-d28c-4fdd-b2b4-f7b5ad1dda8e"
          alt="Not Found"
          className="image-1"
        />
      </div>
    </div>
  )
}
