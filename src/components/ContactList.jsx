import React from 'react';
import { FaUserCircle, FaPhone, FaEnvelope, FaPen, FaTrash } from 'react-icons/fa'

const ContactList = () => {
  return (
    <div className="list">
        <div className="item">
            <div className="item-wrapper">
                <div className="item-icon">
                    <FaUserCircle fontSize="65px"/>
                </div>
                <div className="item-info">
                    <h4>Contact Name</h4>
                    <div>
                        <FaEnvelope />
                        <span>Contact Email</span>
                    </div>
                    <div>
                        <FaPhone />
                        <span>Contact Phone</span>
                    </div>
                </div>
            </div>
            <div className="item-buttons">
                <button>
                    <FaPen color='#fffe03'/>
                </button>
                <button>
                    <FaTrash color='#fffe03'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ContactList;