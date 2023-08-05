import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64ce5b190c01d81da3eebb90.mockapi.io',
});

export async function fetchAll() {
  const { data } = await instance.get('/contacts');
  return data;
}

export async function addContact(contactInfo) {
  const { data } = await instance.post('/contacts', {
    name: contactInfo.name,
    number: contactInfo.number,
  });
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
}
