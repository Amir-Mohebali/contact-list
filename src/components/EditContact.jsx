import React, { useState, useEffect } from 'react';
import Modal from '../containers/Modal';

const EditContact = ({ contact, onUpdate, onClose }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);

  useEffect(() => {
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email);
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...contact, name, phone, email });
    onClose();
  };

  return (
    <Modal title="Edit Contact" onClose={onClose}>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="input-control">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-control">
          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-control">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
            <button type="button" className="btn cancel" onClick={onClose}>
                Cancel
            </button>
            <button type="submit" className="btn submit">
                Update
            </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditContact;