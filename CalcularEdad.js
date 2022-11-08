function calcularEdad(edad) {
  console.log(typeof edad);
  if (edad >= 18) return "Es Mayor de edad ";
  else return "Es menor de edad";
}

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
  }
}

console.log(calcularEdad(14));
tablaMultiplicar(3);