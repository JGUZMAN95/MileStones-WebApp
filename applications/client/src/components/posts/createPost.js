import React, { useEffect, useState } from "react";
import "./createPost.css"

export default function CreatePost(){
    const[form, setForm] = useState({
        service:"",
        expirence:"",
        rate:""
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

    await fetch(`http://localhost:3001/posts/`, {
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

    setForm({ service: "", expirence: "", rate: "" });
}
return(
    <form>
    <input type="text" id ="service" value = {form.service}
           onChange={(e)=> updateForm({service: e.target.value})} placeHolder ='Service'></input>
    <input type="text" id ="expirence" value = {form.expirence}
           onChange={(e)=> updateForm({expirence: e.target.value})} placeHolder ='Expirence'></input>
    <input type="text" id ="rate" value = {form.rate}
           onChange={(e)=> updateForm({rate: e.target.value})} placeHolder ='Hourly Rate'></input>
        <input  type = 'submit' value = 'Post'></input>

    </form>

);
}