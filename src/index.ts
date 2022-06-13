function comprarProductos(cantidad: number) {
  let nombreDelProducto: string[] = new Array(cantidad);
  let precioUnitarioDelProducto: number[] = new Array(cantidad);
  let cantidadProductoComprados: number[] = new Array(cantidad);
  let subtotal: number[] = new Array(cantidad);
  let total: number = 0;

  console.log(`Nombre del Producto | Precio U. | Cantidad | Subtotal`);
  for (let i = 0; i < cantidad; i++) {
    nombreDelProducto[i] = prompt("Ingrese el nombre del producto");
    precioUnitarioDelProducto[i] = Number(
      prompt("Ingrese el precio unitario del producto")
    );
    cantidadProductoComprados[i] = Number(
      prompt("Ingrese la cantidad de productos a llevar")
    );
    subtotal[i] = precioUnitarioDelProducto[i] * cantidadProductoComprados[i];

    console.log(
      `${nombreDelProducto[i]} | $${precioUnitarioDelProducto[i]} | ${cantidadProductoComprados[i]} | $${subtotal[i]}`
    );
    total += subtotal[i];
  }
  console.log(`Total a abonar: $${total}`);
  return total;
}

function partciparSorteo(total: number) {
  switch (true) {
    case total < 1000: {
      console.log(
        "Su compra fue menor a $1000, por lo cual no accedió al sorteo"
      );
      break;
    }
    case total >= 1000 && total < 2000: {
      console.log("Felicitaciones, ya estas participando por un TV Led");
      break;
    }
    case total >= 2000 && total < 3000: {
      console.log("Felicitaciones, ya estas participando por una Moto 0Km.");
      break;
    }
    case total >= 3000: {
      console.log(
        "Felicitaciones, ya estas participando por una Automóvil 0Km."
      );
      break;
    }
  }
}

const cantidadProductoALlevar: number = Number(
  prompt("Ingrese la cantidad de productos a llevar: ")
);

partciparSorteo(comprarProductos(cantidadProductoALlevar));
