const primeiroFilho = document.getElementById('pai');
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

let elementoIrmao = document.createElement('section');
elementoIrmao.id = 'elementoIrmao';

primeiroFilho.appendChild(elementoIrmao);

let elementoFilhoOnde = document.createElement('section');
elementoFilhoOnde.id = 'elementoFilhoOnde';

elementoOndeVoceEsta.appendChild(elementoFilhoOnde);

let filhoDoFilhoDoFilho = document.createElement('section');
filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho';

primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

const terceiroFilho = filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling;

