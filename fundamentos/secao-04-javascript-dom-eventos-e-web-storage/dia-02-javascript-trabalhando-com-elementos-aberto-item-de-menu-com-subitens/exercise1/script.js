const body = document.querySelector('body');

let trybeTrip = document.createElement('h1');
trybeTrip.innerText = 'TrybeTrip - Agência de Viagens';
trybeTrip.className = 'title'

body.appendChild(trybeTrip);

let main = document.createElement('main');
main.className = 'main-content';

body.appendChild(main);


let section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

let pContent = document.createElement('p');
pContent.innerText = 'Trybe, sua agência exclusiva de viagens';

section.appendChild(pContent);

let leftSection = document.createElement('section');
leftSection.className = 'left-content';

main.appendChild(leftSection);

let rightSection = document.createElement('section');
rightSection.className = 'right-content';

main.appendChild(rightSection);

const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

section.appendChild(image);

const ul = document.createElement('ul');
section.appendChild(ul);

arrayExtenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < 10; index += 1) {
    const li = document.createElement('li');
    li.innerText = arrayExtenso[index];
    ul.appendChild(li);
}

for (let i = 0; i < 3; i += 1) {
    const h3 = document.createElement('h3');
    h3.innerText = 'TrYbE';
    main.appendChild(h3);
}




console.log(body);