export function ahorcado(canva, contador) {
  let ctx = canva.getContext("2d");
  let blue = "#0A3871";
  ctx.fillStyle = "#EFF1FA";
  ctx.fillRect(0, 0, 400, 400);

  dibujar_barra(ctx);

  if (contador === 1) {
    dibujar_soga(ctx);
  } else if (contador === 2) {
    dibujar_cabeza(ctx);
  } else if (contador === 3) {
    dibujar_cuerpo(ctx);
  } else if (contador === 4) {
    dibujar_brazos(ctx);
  } else if (contador === 5) {
    dibujar_piernas(ctx);
  }

  console.log(ctx);
}

function dibujar_barra(ctx) {

    // piso
    ctx.beginPath();
    ctx.lineTo(300, 140);
    ctx.lineTo(100, 140);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "blue";
  // barra
  ctx.beginPath();
  ctx.lineTo(150, 10);
  ctx.lineTo(150, 140);
  ctx.stroke();
  ctx.fill();
  
  // Barra sostiene la soga
  ctx.beginPath();
  ctx.lineTo(150, 10);
  ctx.lineTo(250, 10);
  ctx.stroke();
  ctx.fill();
}

function dibujar_soga(ctx) {
  dibujar_barra(ctx);
  // Soga
ctx.beginPath();
ctx.lineTo(250, 10);
ctx.lineTo(250, 20);
ctx.stroke();
ctx.fill();
}

function dibujar_cabeza(ctx) {
  dibujar_soga(ctx);
    // Cabeza
    ctx.beginPath();
    ctx.arc(250, 30, 10, 0, 2 * Math.PI);
    ctx.stroke();
 
 //    Ojo izquierdo
    ctx.beginPath();
    ctx.arc(246, 27, 1, 0, 2 * Math.PI);
    ctx.stroke();
 // Ojo derecho
    ctx.beginPath();
    ctx.arc(254, 27, 1, 0, 2 * Math.PI);
    ctx.stroke();
 // Boca
    ctx.beginPath();
   ctx.lineTo(246, 35);
   ctx.lineTo(255, 35);
   ctx.stroke();
   ctx.fill();
 
}

function dibujar_cuerpo(ctx) {
  dibujar_cabeza(ctx);

  // Cuerpo
  ctx.beginPath();
  ctx.lineTo(250, 40);
  ctx.lineTo(250, 90);
  ctx.stroke();
  ctx.fill();
}

function dibujar_brazos(ctx) {
  dibujar_cuerpo(ctx);

    // Brazo derecho
    ctx.beginPath();
    ctx.lineTo(265, 60);
    ctx.lineTo(250, 40);
    ctx.stroke();
    ctx.fill();

     // Brazo izquierdo
  ctx.beginPath();
  ctx.lineTo(235, 60);
  ctx.lineTo(250, 40);
  ctx.stroke();
  ctx.fill();
}

function dibujar_piernas(ctx) {
  dibujar_brazos(ctx);
    // Pierna derecha
    ctx.beginPath();
    ctx.lineTo(250, 90);
    ctx.lineTo(265, 110);
    ctx.stroke();
    ctx.fill();
  
    // Pierna izquierda
    ctx.beginPath();
    ctx.lineTo(235, 110);
    ctx.lineTo(250, 90);
    ctx.stroke();
    ctx.fill();
}
