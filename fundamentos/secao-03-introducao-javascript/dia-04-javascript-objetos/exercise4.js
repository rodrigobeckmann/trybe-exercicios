let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function adcTurno(object, key, value) {
    object[key] = value;
}

function listarKeys(object) {
    return Object.keys(object);
}

function tamanhoObjeto(object) {
    return Object.keys(object).length;
}

function listarValores(object) {
    return Object.values(object);
}

adcTurno(lesson2, 'turno', 'noite');

let allLessons = {
    lesson1: Object.assign({}, lesson1),
    lesson2: Object.assign({}, lesson2),
    lesson3: Object.assign({}, lesson3),
} 



function qtdAlunosTotal(lesson) {
    let total = 0;
    let chaveAlunos = Object.keys(lesson);

    for (key in chaveAlunos) {
        total += lesson[chaveAlunos[key]].numeroEstudantes;
    }
    
    return total;

}



const getValueByNumber = (lesson, number) => Object.values(lesson)[number];


const verifyPair = (lesson, key, value) => ( Object.keys(lesson).indexOf(key) >= 0 && Object.values(lesson).indexOf(value) >= 0 ) ? true : false;


console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

console.log (Object.values(lesson3).indexOf('Maria Clara'))