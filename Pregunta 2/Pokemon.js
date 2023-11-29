class Pokemon {
    constructor(HP, ataque, defensa) {
      this.HP = HP;
      this.ataque = ataque;
      this.defensa = defensa;
      this.movimiento = "";
      this.nivel = 1;
      this.tipo = "";
    }
  
    fight() {
      if (!this.movimiento) {
        throw new Error("No se ha seleccionado ningún movimiento.");
      }
    }
  
    canFly() {
      if (!this.tipo) {
        throw new Error("No se ha seleccionado ningún tipo.");
      }
      return this.tipo === "Volar";
    }
  }
  
  class Charizard extends Pokemon {
    constructor(HP, ataque, defensa, movimiento) {
      super(HP, ataque, defensa);
      this.movimiento = movimiento || "Disparar";
      this.tipo = "Disparar/Volar";
    }
  
    fight() {
      if (!this.movimiento) {
        throw new Error("No se ha seleccionado ningún movimiento.");
      }
      return `Charizard usó ${this.movimiento}`;
    }
  }
  
  module.exports = {
    Pokemon,
    Charizard,
  };
  