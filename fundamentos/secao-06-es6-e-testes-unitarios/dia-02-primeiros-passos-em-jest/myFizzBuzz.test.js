const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () => {
    it ('verifica se de acordo com o parametro recebido retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(4)).toBe(4);
        expect(myFizzBuzz('a')).toBe(false); 
        expect(myFizzBuzz('!')).toBe(false); 
    })
})