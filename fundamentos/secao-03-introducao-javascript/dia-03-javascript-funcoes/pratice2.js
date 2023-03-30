let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let verification = false;

function adicionaClientes(cliente) {
    if (typeof cliente != 'string') {
        console.log('dado errado inserido, favor tente novamente');
    } else {
        clientesTrybeBank.push(cliente)
    }

}

function excluiClientes(cliente) {

    verification = false;
    if (typeof cliente != 'string') {
        console.log('dado errado inserido, favor tente novamente');
    } else {
        for (let index = 0; index < clientesTrybeBank.length; index++) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                verification = true;
            }
        }
    }
    if (verification == false) {
        console.log('cliente inexistente no banco de dados');
    }
}


adicionaClientes('Rodrigo');
excluiClientes('Ada');

for (let index = 0; index < clientesTrybeBank.length; index++) {
    console.log(clientesTrybeBank[index]);
}