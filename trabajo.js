let contarnumero = 0; // variable_contar números mayores que 5

console.log("Números del 1 al 10:"); // Ciclo_Imprimir números del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i + " ");
  if (i > 5) {
    contarnumero++; // incrementar contador si el número es mayor que 5
  }
}

console.log("Hay " + contarnumero + " números mayores que 5"); // Imprime_conteo de números mayores que 5