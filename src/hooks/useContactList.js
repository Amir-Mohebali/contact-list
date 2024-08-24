import { useState } from "react";
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

export const useContactList = () => {
  const [contacts, setContacts] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [searchUser, setSearchUser] = useState('');

  const addContact = (e) => {

    e.preventDefault();
    try {
        const newContacts = [...contacts, 
            { 
              id: uuid(),
              name: name,
              email: email,
              phone: phone
            }
        ];
        setContacts(newContacts);
    } catch (e) {
        toast.error("An error occurred! Please try again", { duration: 4000 })
    } finally {
        setName('');
        setEmail('');
        setPhone('');
    }
  }

  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return {
    contacts,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    searchUser,
    setSearchUser,
    addContact,
    deleteContact,
  }
}