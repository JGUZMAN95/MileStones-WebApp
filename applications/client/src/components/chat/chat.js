import React from "react"
import "./chat.css"

export default function DirectMessage() {
  return (
    <div className="direct-message flex-col-hstart-vstart clip-contents">
      <div className="group-6310 flex-col">
        <p className="txt-1057">Direct Message</p>
        <div className="group-3510 flex-row-vcenter">
          <div className="ellipse-6" />
          <p className="txt-646">Name</p>
        </div>
        <div className="group-401 flex-row-vcenter">
          <div className="ellipse-6" />
          <p className="txt-646">Name</p>
        </div>
      </div>
      <div className="group-650">
        <div className="group-745 flex-row">
          <div className="ellipse-5" />
          <div className="rectangle-24" />
        </div>
        <div className="group-647 flex-row">
          <div className="rectangle-21" />
          <div className="ellipse-4" />
        </div>
      </div>
      <div className="rectangle-18" />
      <div className="group-354 flex-row">
        <p className="txt-194">Name</p>
        <div className="group-885">
          <p className="txt-490">Delete Chat</p>
        </div>
      </div>
      <div className="frame-15 flex-col-hstart-vstart">
        <div className="rectangle-28" />
      </div>
      <div className="group-161 flex-row">
        <p className="txt-181">Send A Message</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2tr7e0l43gk-515%3A6?alt=media&token=4c60158c-6d80-4eac-addc-6918ef5ff10f"
          alt="Not Found"
          className="rectangle-20"
        />
      </div>
    </div>
  )
}
