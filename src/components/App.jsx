import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';


export const App = () => {

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchContacts())
    }, [dispatch]
  );

  return (
    <div>

      <Phonebook />
      <ContactsList />

    </div>
  );
};
