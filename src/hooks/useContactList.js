import { useState } from "react";

export const useContactList = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [searchUser, setSearchUser] = useState('');

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    searchUser,
    setSearchUser,
  }
}