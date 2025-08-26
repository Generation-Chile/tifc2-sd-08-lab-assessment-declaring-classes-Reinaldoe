export class Player {
  constructor(name, level) {
    this.name = name;  // Almacena el nombre del jugador en la propiedad 'name'
    this.level = level; // Almacena el nivel del jugador en la propiedad 'level'
  }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`); // Imprime el mensaje en la consola
  }
  levelUp () {
    this.level += 1 ; //sube de nivel
    console.log(`${this.name} leveled up! Now at Level ${this.level}.`); // Mensaje al subir de nivel
  }
}