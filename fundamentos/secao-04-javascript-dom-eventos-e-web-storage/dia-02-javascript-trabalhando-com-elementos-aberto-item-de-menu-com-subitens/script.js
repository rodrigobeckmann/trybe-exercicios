const whereAreYou = document.getElementById('where-are-you');
const firstChildOfChild = document.getElementById('first-child-of-child');
const firstChild = document.querySelector('#parent').firstElementChild;
const firstChildWhere = whereAreYou.previousElementSibling;
const attention = whereAreYou.nextSibling;
const thirdChild = whereAreYou.nextElementSibling;
const thirdChildParent = document.querySelector('#parent').lastElementChild.previousElementSibling;

whereAreYou.parentNode.style.color = 'red';

firstChildOfChild.innerText = 'Exercicio trybe';
