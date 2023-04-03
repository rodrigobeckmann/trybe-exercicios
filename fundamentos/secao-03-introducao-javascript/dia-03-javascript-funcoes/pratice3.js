let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function validaCliente(cliente) {

    if (typeof cliente === 'string') {
        let clienteEncontrado = false;
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clienteEncontrado = true;
            }
        }
        if (clienteEncontrado === true) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }
}

function removeCliente(cliente) {

    if (validaCliente(cliente) === true) {

        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return 'Cliente excluída(o) com sucesso.';
            }
        }
    } else {
        console.log('parametros errados');
    }
}

removeCliente(3);
console.log(clientesTrybeBank);