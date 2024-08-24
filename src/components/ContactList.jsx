import React from 'react';
import { FaUserCircle, FaPhone, FaEnvelope, FaPen, FaTrash } from 'react-icons/fa'

const ContactList = ({ contacts, onDelete }) => {
  return (
    !contacts.length
    ?null
    :<div className="list">
        {contacts
            .map((contact) => (
                <div className="item" key={contact.id}>
                    <div className="item-wrapper">
                        <div className="item-icon">
                            <FaUserCircle fontSize="65px"/>
                        </div>
                        <div className="item-info">
                            <h4>{contact.name}</h4>
                            <div>
                                <FaEnvelope />
                                <span>{contact.email}</span>
                            </div>
                            <div>
                                <FaPhone />
                                <span>{contact.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-buttons">
                        <button>
                            <FaPen color='#fffe03'/>
                        </button>
                        <button onClick={() => onDelete(contact.id)}>
                            <FaTrash color='#fffe03'/>
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ContactList;