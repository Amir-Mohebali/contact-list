import { useState } from "react";
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import { useLocalStorage } from './useLocalStorage';

export const useContactList = () => {
  const [defaultList, { set }] = useLocalStorage('contacts');
  const [contacts, setContacts] = useState(defaultList || []);

  const [editContact, setEditContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [searchUser, setSearchUser] = useState('');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const phoneRegx = /^(?:[0-9\-\\(\\)\\/.]\s?){6,14}[0-9]{1}$/;

  const addContact = (e) => {
    const nameInput = document.getElementById('Name_Input');
    const phoneInput = document.getElementById('Phone_Input');
    const emailInput = document.getElementById('Email_Input');

    e.preventDefault();
    
    setNameError('');
    setPhoneError('');
    setEmailError('');
    nameInput.classList.remove('invalid');
    phoneInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');

    if(name === '') {
      setNameError('* Name is required.');
      nameInput.classList.add('invalid')
    } else if(phone === '') {
      setPhoneError('* phone is required.');
      phoneInput.classList.add('invalid')
    } else if(!phoneRegx.test(phone)) {
      setPhoneError('* Enter a valid phone number');
      phoneInput.classList.add('invalid')
    } else if(email === '') {
      setEmailError('* email is required.');
      emailInput.classList.add('invalid')
    } else if(!emailRegx.test(email)) {
      setEmailError('* Enter a valid email address');
      emailInput.classList.add('invalid')
    }
    else {
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
        set('contacts', newContacts);
      } catch (e) {
        toast.error("An error occurred! Please try again", { duration: 4000 })
      } finally {
        setName('');
        setEmail('');
        setPhone('');
      }
    }
  }

  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
    set('contacts', newContacts)
  };

  const updateContact = (updatedContact) => {
    const newContacts = contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact));
    setContacts(newContacts);
    set('contacts', newContacts);
    setShowModal(false);
  };

  const handleEdit = (contact) => {
    setEditContact(contact);
    setShowModal(true);
  };

  return {
    contacts,
    editContact,
    showModal,
    setShowModal,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    searchUser,
    setSearchUser,
    nameError,
    phoneError,
    emailError,
    addContact,
    deleteContact,
    updateContact,
    handleEdit,
  }
}