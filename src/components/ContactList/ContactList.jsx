import Contact from "../Contact/Contact"
import css from './ContactList.module.css'


const ContactList = ({users, onDeleteUser}) => {
  
  return (
      <ul className={css.contactList}>
           {Array.isArray(users) &&
          users.map((user) => {
            return (
              <li key={user.id}>
              <Contact
                onDeleteUser={onDeleteUser}
                user= {user}
                />
                </li>
                   );
          })}
     </ul>
  )
}

export default ContactList