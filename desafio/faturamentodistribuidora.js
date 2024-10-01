const dataVendas = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcular total de vendas

let totalVendas = 0;
for (const estado in dataVendas) {
    totalVendas += dataVendas[estado];
}

// Calcular porcentagem de cada estado

const porcentagens = {};
for (const estado in dataVendas) {
    const porcentagem = (dataVendas[estado] / totalVendas) * 100;
    porcentagens[estado] = porcentagem.toFixed(2);
}

console.log("Porcentagem de vendas por estado:");
for (const estado in porcentagens) {
    console.log(`${estado}: ${porcentagens[estado]}%`);
}