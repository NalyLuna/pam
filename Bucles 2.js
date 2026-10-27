
let ancho = Number(prompt("Ingrese el ancho de la imagen en pixeles;"));

if (ancho >= 1280) {
  alert ("Resolucion baja");
  console.log ("Resolucion baja");

} else if (ancho < 1920) {
  alert ("HD");
  console.log ("HD");
} else {
  alert ("Full HD o superior");
  console.log ("Full HD o superior");
}