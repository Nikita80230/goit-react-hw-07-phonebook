import css from './Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/reducers/contactsReducer';

export const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = event => {
        dispatch(setFilter(event.currentTarget.value))
    };

    return (
        <>
            <div className={css.contactWrapper}>
                <span>Find contacts by name</span>
                <input
                    name="inputName"
                    onChange={handleChange}
                    type="text"
                />
            </div>
        </>
    );
};

// const [contactsFromPhonebook, setContactsFromPhonebook] = useState('');
// console.log(event.currentTarget.value)
// setContactsFromPhonebook(event.currentTarget.value);
// searchNameInPhonebook(event.currentTarget.value);
// value={contactsFromPhonebook}