const pedido1 = {
    tipo: 'Caffe Vanilla',
    cliente: 'Robert'
}

const pedido2 = {
    tipo: 'Te helado',
    cliente: 'Pablo'
}

function pedidoStartbucks(pedido, callbackCliente){
    switch (pedido.tipo) {
        case 'Caffe Vanilla':
            setTimeout(() => {
                callbackCliente(pedido);
            }, 4 * 1000);
            break;
        case 'Te helado':
            setTimeout(() => {
                callbackCliente(pedido);
            }, 2 * 1000);
            break;
        default:
            break;
    }
}

pedidoStartbucks(pedido1, pedido => {
    console.log(`${pedido1.tipo} esta listo, llamar a ${pedido1.cliente}`);
});

pedidoStartbucks(pedido2, pedido => {
    console.log(`${pedido2.tipo} esta listo, llamar a ${pedido2.cliente}`);
});

console.log('PEDIDOS STARTBUCKS ');