import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContactsFromBackend } from 'redux/operations';

export const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();
    return (
        <li className={css.contactItem}>
            <span>
                {name}: {number}
            </span>
            <button
                onClick={() => dispatch(deleteContactsFromBackend(id))}
                className={css.deleteButton}
            >
                Delete
            </button>
        </li>
    );
};
