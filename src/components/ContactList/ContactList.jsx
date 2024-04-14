import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  // const dispatch = useDispatch();
  const users = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  // const onDeleteUser = (userId) => {
  //   dispatch(deleteContact(userId));
  // };
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {Array.isArray(filteredUsers) &&
        filteredUsers.map((user) => {
          return (
            <li key={user.id}>
              <Contact user={user} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
