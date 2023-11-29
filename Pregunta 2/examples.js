const { Pokemon, Charizard } = require('./Pokemon');

// Ejemplo 1: Pokemon sin movimiento y tipo
const pokemon1 = new Pokemon(80, 20, 15);

try {
  pokemon1.fight(); // Debería lanzar un error
} catch (error) {
  console.error(error.message);
}

// Ejemplo 2: Pokemon con movimiento y tipo "Volar"
const pokemon2 = new Pokemon(90, 25, 18);
pokemon2.tipo = "Volar";

try {
  console.log(pokemon2.canFly()); // Debería imprimir: true
} catch (error) {
  console.error(error.message);
}

// Ejemplo 3: Charizard sin movimiento
const charizard1 = new Charizard(100, 50, 30,"owo");

try {
  charizard1.fight(); // Debería lanzar un error
} catch (error) {
  console.error(error.message);
}

// Ejemplo 4: Charizard con movimiento personalizado
const charizard2 = new Charizard(100, 50, 30, "Lanzallamas");

try {
  console.log(charizard2.fight()); // Debería imprimir: "Charizard usó Lanzallamas"
} catch (error) {
  console.error(error.message);
}

// Ejemplo 5: Charizard con movimiento por defecto
const charizard3 = new Charizard(100, 50, 30);

try {
  console.log(charizard3.fight()); // Debería imprimir: "Charizard usó Disparar"
} catch (error) {
  console.error(error.message);
}

