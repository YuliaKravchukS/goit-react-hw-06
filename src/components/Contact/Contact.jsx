import css from './Contact.module.css'
import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({user, onDeleteUser}) => {
 
  return (
      <div className={css.wrap}>
          <div className={css.contact}>
              <div className={css.contactField}><HiUser />  {user.name}</div>
              <div className={css.contactField}><FaPhoneAlt size="14"/>  {user.number}</div>
          </div>
          <button type="button" onClick={() => onDeleteUser(user.id)}>Delete</button>
         
          
    </div>
  )
}

export default Contact