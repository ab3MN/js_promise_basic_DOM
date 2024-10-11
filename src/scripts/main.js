'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const createTextNode = (type, parentNode, classes, text) => {
  const node = document.createElement(type);

  node.classList.add(...classes);
  node.textContent = text;
  parentNode.append(node);

  return node;
};

const promise1 = new Promise((resolve) => resolve('Promise was resolved!'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

logo.addEventListener('click', () => {
  promise1.then((res) => {
    createTextNode('div', body, ['message'], res);
  });
});

promise2.catch((_error) => {
  createTextNode('div', body, ['message', 'error-message'], _error.message);
});
