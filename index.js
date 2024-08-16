class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'Mago':
          ataque = 'Magia';
          break;
        case 'Guerreiro':
          ataque = 'Espada';
          break;
        case 'Monge':
          ataque = 'Artes Marciais';
          break;
        case 'Ninja':
          ataque = 'Shuriken';
          break;
        default:
          ataque = 'Ataque Desconhecido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi('Artorias', 25, 'Guerreiro');
  heroi1.atacar();
  