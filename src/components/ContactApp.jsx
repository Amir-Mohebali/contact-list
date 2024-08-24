import { useState } from "react"
import { useContactList } from "../hooks/useContactList"
import ContactList from "./ContactList";
import EditContact from "./EditContact";
import { Toaster } from 'react-hot-toast';

import form_bg from '../assets/images/form-bg.jpg'

const ContactApp = () => {
    const { contacts, editContact,
        showModal, setShowModal,
        name, setName,
        email, setEmail,
        phone, setPhone,
        searchUser, setSearchUser, 
        nameError, phoneError, emailError,
        addContact, deleteContact,
        updateContact, handleEdit, 
    } = useContactList();

    return (
        <div className="container">
            <div className="form-container">
                <img src={form_bg} alt="form-bg" />
                <h1>Add Contact</h1>
                <form onSubmit={addContact} className="add-form">
                  <div className="input-control">
                    <input type="text" id="Name_Input" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" />
                    <div className="error">{nameError}</div>
                  </div>
                  <div className="input-control">
                    <input type="text" id="Phone_Input" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Phone" />
                    <div className="error">{phoneError}</div>
                  </div>
                  <div className="input-control">
                    <input type="text" id="Email_Input" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                    <div className="error">{emailError}</div>
                  </div>                
                  <button type="submit" className="submit">Add</button>
                </form>
            </div>
            <div className="main-container">
                <input 
                    type="text" 
                    value={searchUser} 
                    onChange={(e)=> setSearchUser(e.target.value)}
                    placeholder="Search list..." 
                    className="search-box" 
                />
                <ContactList contacts={contacts} onDelete={deleteContact} onEdit={handleEdit} searchTerm={searchUser}/>
            </div>
            {showModal && <EditContact contact={editContact} onUpdate={updateContact} onClose={() => setShowModal(false)} />}
            <Toaster />
        </div>
    )
}

export default ContactApp