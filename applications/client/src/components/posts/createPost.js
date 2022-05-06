import React, { useState } from "react";
import "./createPost.css"

export default function CreatePost(){
    const[form, setForm] = useState({
        name:"",
        service:"",
        expOne:"",
        expTwo:"",
      //  expirence:"",
        rate:"",
        tnp:""
    });
    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
    const newPost = { ...form };

    await fetch(`http://localhost:3001/createPost/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    })
        .catch(error => {
            window.alert(error);
            return;
        });

    setForm({ name: "", service: "", expOne:"", expTwo:"", rate: "",tnp:"" });
}
return(
    <div className={"createpost"}>
    <form onSubmit={onSubmit}>
        <div className={"formdiv"}>
            <p className={"cp-title"} align={"center"}>Create a Listing</p>
    <input type="text" id="name" className={"name-cp"} value={form.name}
           onChange={(e)=> updateForm({name: e.target.value})} placeholder='Name'>
    </input>

    <select id ="service" className={"service-cp"} value = {form.service}
           onChange={(e)=> updateForm({service: e.target.value})} placeholder ='Service'>
        <option value={"service"}> What Services Are You Providing? </option>
        <option value={"babysitting"}> BabySitter </option>
        <option value={"daycare"}> DayCare </option>
        <option value={"tutor"}> Tutor </option>
        <option value={"music"}> Music Lessons </option>
        <option value={"coach"}> Sports Coach </option>
    </select>

    <div className={"exp-dropdown"}>
    <select className={"exp-one"} id={"exp-one"} value={form.expOne}
            onChange={(e)=> updateForm({expOne: e.target.value})}>
        <option value={'Exp'}> Experience </option>
        <option value={'zero'}> 0 </option>
        <option value={'one'}> 1 </option>
        <option value={'two'}> 2 </option>
        <option value={'three'}> 3 </option>
        <option value={'four'}> 4 </option>
        <option value={'five'}> 5 </option>
        <option value={'six'}> 6 </option>
        <option value={'seven'}> 7 </option>
        <option value={'eight'}> 8 </option>
        <option value={'nine'}> 9 </option>
        <option value={'ten'}> 10 </option>
    </select>

    <select className={'exp-two'} id={"exp-two"} value={form.expTwo}
            onChange={(e)=> updateForm({expTwo: e.target.value})}>
        <option value={'month'}> mo. </option>
        <option value={'years'}> yrs. </option>
    </select>
    </div>
    <input type="number" min={'0.01'} step={"0.01"} id ="rate" className={"rate-cp"} value = {form.rate}
           onChange={(e)=> updateForm({rate: e.target.value})} placeholder ='Hourly Rate'>
    </input>

    <div className={'tnp-div'}>
     <textarea type="text" id ="tnp" className={"tnp-cp"} value={form.tnp}
           onChange={(e)=> updateForm({tnp: e.target.value})} placeholder ='Tell Us About Yourself'>
    </textarea>
    </div>
    <input  type = 'submit' className={"submit-cp"} value = 'Post'>
    </input>
        </div>
    </form>
    </div>

);
}