const fs = require('fs');

function calculoVendas(vendasJson) {
    const dataVendas = JSON.parse(fs.readFileSync(vendasJson, 'utf8'));

    // Filtos de dias sem vendas

    const filtrarDataVendas = dataVendas.filter(venda => venda > 0);

    // Calculo mínimo e máximo de vendas

    const minVendas = Math.min(...filtrarDataVendas);
    const maxVendas = Math.max(...filtrarDataVendas);

    // Calculo média de valor de vendas

    const soma = filtrarDataVendas.reduce((acc, current) => acc + current, 0);
    const mediaVendas = soma / filtrarDataVendas.length;

    // Contagem do npumero de dias ácima da média

    const diasAcimaMedia = filtrarDataVendas.reduce((acc, current) => current > mediaVendas ? acc + 1 : acc, 0);

    return {
        minVendas,
        maxVendas,
        diasAcimaMedia
    };
}

const ordemVendas = calculoVendas('vendas.json');
console.log(ordemVendas);