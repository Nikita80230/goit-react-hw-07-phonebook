import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { removeContact } from 'redux/reducers/contactsReducer';


export const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <li className={css.contactItem}>
            <span>
                {name}: {number}
            </span>
            <button onClick={() => dispatch(removeContact(id))} className={css.deleteButton}>
                Delete
            </button>
        </li>
    );
};
