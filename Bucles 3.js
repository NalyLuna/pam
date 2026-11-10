function clasificarPromedio(promedio) {

  if (promedio >= 800) {
    return "Experto";
  }

  if (promedio >= 500) {
    return "Intermedio";
  }

  return "Inicial";
}

let puntuaciones = [];
let total = 0;
let superiores = 0;
let mayor = 0;

for (let i = 0; i < 6; i++) {

  let puntuacion;

  do {
    let entrada = prompt(
      `Puntuación del jugador ${i + 1}`
    );

    puntuacion = Number(entrada);

    if (entrada === null || entrada.trim() === "") {
      puntuacion = NaN;
    }

  } while (!Number.isInteger(puntuacion) ||
           puntuacion < 0);

  puntuaciones.push(puntuacion);
  total += puntuacion;

  if (i === 0 || puntuacion > mayor) {
    mayor = puntuacion;
  }

  if (puntuacion > 500) {
    superiores++;
  }
}

let promedio = total / puntuaciones.length;
let nivel = clasificarPromedio(promedio);

console.log("Puntuaciones:", puntuaciones);
console.log("Total:", total);
console.log("Promedio:", promedio);
console.log("Mayor puntuación:", mayor);
console.log("Superaron 500:", superiores);
console.log("Nivel:", nivel);