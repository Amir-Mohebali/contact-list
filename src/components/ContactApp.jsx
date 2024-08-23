import { useState } from "react"
import { useContactList } from "../hooks/useContactList"

import form_bg from '../assets/images/form-bg.jpg'

const ContactApp = () => {
    const { name, setName,
        email, setEmail,
        phone, setPhone 
    } = useContactList();

    return (
        <div className="container">
            <div className="form-container">
                <img src={form_bg} alt="form-bg" />
                <h1>Add Contact</h1>
                <form className="add-form">
                  <div className="input-control">
                    <input type="text" id="Name_Input" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" />
                  </div>
                  <div className="input-control">
                    <input type="text" id="Phone_Input" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Phone" />
                  </div>
                  <div className="input-control">
                    <input type="text" id="Email_Input" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                  </div>                
                  <button type="submit" className="submit">Add</button>
                </form>
            </div>
            <div className="main-container">
            </div>
        </div>
    )
}

export default ContactApp