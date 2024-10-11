'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const createNotification = (text, cssClass = '') =>
  `<div class="message ${cssClass}">${text}</div>`;

const promise1 = new Promise((resolve) => resolve('Promise was resolved!'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

logo.addEventListener('click', () => {
  promise1
    .then((res) => {
      body.innerHTML += createNotification(res);
    })
    .catch((_error) => {
      body.innerHTML += createNotification(_error.message, 'error-message');
    });
});

promise2.catch((_error) => {
  body.innerHTML += createNotification(_error.message, 'error-message');
});
