import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/reducers/contactsReducer';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => {
    return state.contacts;
  });

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;


    if (contacts.some(contact => contact.name === name)) {
      alert("what are you doing? This contact has been already added!!!!")
    } else {
      dispatch(
        addNewContact({
          name,
          number,
          id: nanoid()
        })
      )
    }

    event.currentTarget.reset();
  };

  return (
    <div className={css.inputGroup}>
      <h2>Name</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          Tel
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
