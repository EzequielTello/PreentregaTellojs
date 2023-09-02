//Venta de Motos
const MotoHonda = 3000;
const MotoYamaha = 1000;
const MotoRoyalEnfield = 5000;

let cantidad;
let marcaMoto;
let resultado;

function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2;
  return resultado;
}
while (cantidad != 0) {
  cantidad = parseInt(
    prompt(
      "Ingresar cantidad de motos a comprar, siendo 0 la que termina la venta"
    )
  );
  if (cantidad === 0) {
    break;
  }

  marcaMoto = prompt("Ingrese la marca de la moto a comprar");

  switch (marcaMoto) {
    case "Honda":
      resultado = multiplicar(MotoHonda, cantidad);
      alert("Debe abonar $ " + resultado + "por la compra de la moto Honda");
      break;
    case "Yamaha":
      resultado = multiplicar(MotoYamaha, cantidad);
      alert("Debe abonar $ " + resultado + "por la compra de la moto Yamaha");
      break;
    case "RoyalEnfield":
      resultado = multiplicar(MotoRoyalEnfield, cantidad);
      alert(
        "Debe abonar $ " + resultado + "por la compra de la moto Royal Enfield"
      );
      break;
    default:
      alert("Operacion Invalida");
      break;
  }
}
