function fibonacciSequencia(n) {
    const sequencia = [0, 1];
    while (sequencia[sequencia.length - 1] < n) {

        sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]);

    }
    return sequencia;
}

function verificaFibonacci(num, sequencia) {
    return sequencia.includes(num);
}

const numeroVerificacao = 13;
const sequencia = fibonacciSequencia(numeroVerificacao);
const verificarFibonacci = verificaFibonacci(numeroVerificacao, sequencia);

if (verificarFibonacci) {

    console.log(`O número ${numeroVerificacao} é parte da sequência Fibonacci.`);

} else {

    console.log(`O número ${numeroVerificacao} não é parte da sequência Fibonacci.`);

}