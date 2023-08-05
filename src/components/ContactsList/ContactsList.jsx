// import { Component } from 'react';
import { Filter } from 'components/ContactsList/Filter/Filter';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';


export const ContactsList = () => {
    const { contacts, filter } = useSelector(state => {
        return state.contacts;
    });

    const filteredContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <>
            <h2>Contacts</h2>
            <Filter />
            <ul>
                {filteredContacts.map(({ name, number, id }) => {
                    return <Contact name={name} number={number} key={id} id={id} />;
                })}
            </ul>
        </>
    );
};

// searchNameInPhonebook = { searchNameInPhonebook }    removeContact={removeContact}

// searchNameInPhonebook,
//     filteredContacts,
//     removeContact,