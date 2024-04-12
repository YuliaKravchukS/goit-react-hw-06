import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import usersData from './userData.json'
import { nanoid } from 'nanoid'


function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers= window.localStorage.getItem('users')
    if (!stringifiedUsers) return usersData;
    const localUsers = JSON.parse(stringifiedUsers);
    return localUsers;
  });
 const [filter, setFilter] = useState("");
  
    useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
    }, [users]);
  
  const addUser = (formData) => {
    
    const finalUser = {
      ...formData,
      id: nanoid(),
    }
    setUsers((prevState) => {
      return [...prevState, finalUser]
    });
   
  }
  const onDeleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId)
    });
  }
    function handleInput(event) {
        setFilter(event.target.value)
    }
    
  const filteredUsers = users.filter(user=>user.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm onAdd = {addUser} />
  <SearchBox value = { filter} handleInput = {handleInput}  />
  <ContactList users = {filteredUsers} onDeleteUser = {onDeleteUser} />
</div>
  )
}

export default App
