import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
// import { getContactsFromLocalStorage } from 'utils/getContactsFromLocalStorage';
// import { useSelector } from 'react-redux';

export const App = () => {

  // useEffect(
  //   () => localStorage.setItem('contacts', JSON.stringify(contacts)),
  //   [contacts]
  // );

  return (
    <div>

      <Phonebook />
      <ContactsList />

    </div>
  );
};
