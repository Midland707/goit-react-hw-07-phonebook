// Операції
// Використовуй функцію createAsyncThunk для оголошення асинхронних генераторів екшенів та виконання HTTP - запитів.
// Обробку екшенів та зміну даних у стані Redux зроби за допомогою createSlice.

// Оголоси наступні операції:

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".

import axios from 'axios';

axios.defaults.baseURL = 'https://642c888e66a20ec9ce8a147d.mockapi.io/';

//   https://642c888e66a20ec9ce8a147d.mockapi.io/contacts/:endpoint

// Performing a POST request

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// export const getContacts = async (query, page) => {
//   const { data } = await axios.get(`?key=${key}&q=${query}&page=${page}`);
//   console.log('data =', data);
//   return data;
// };

// const url = new URL('https://PROJECT_TOKEN.mockapi.io/tasks');
// url.searchParams.append('completed', false); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false

const url = new URL('https://642c888e66a20ec9ce8a147d.mockapi.io/contacts');
export const getContacts = () =>
  fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then(data => {
      console.log(data);
      // mockapi returns only incomplete tasks
    })
    .catch(error => {
      console.log(error);
      // handle error
    });

const newTask = {
  name: 'Vasia',
  phone: '123-456-5578',
};

export const sendContact = () =>
  fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then(data => {
      console.log(data);
      // do something with the new task
    })
    .catch(error => {
      console.log(error);
      // handle error
    });
