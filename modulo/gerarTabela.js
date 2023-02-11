const calculoPar Impar function (numeroInicial, numeroFinal) (

let valor1 = Number(String(numeroInicial).replace(',', '.'));

let valor2 = Number(String(numeroFinal).replace(',', let status = true;

if (valor1 == 0 || valor2 == 0)

status = false;

else if (isNaN(valor1) || isNaN(valor2))

status = false;

else {

for (i = valor1; i <= valor2; i++) {

if (i % 2 == 0) { console.log(1, 'par')

}else{

console.log(i, 'impar')

}

}

} return status;

calculoPar Impar (5,10)
