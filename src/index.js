class Hero {
    constructor(name, age, type) {
    this.name = name
    this.age = age
    this.type = type
  }
    message(){
        let attack;
        let article = 'O'

        //Verifica o tipo do herói e define o ataque
        switch (this.type) {
            case "wizard":
              attack = 'magia'
              break;
            case "warrior":
              attack = 'espada'
              break;
            case "monk":
              attack = 'artes marciais'
              break;
            case "ninja":
              attack = 'shuriken'
              article = 'A'
              break;
            default:
              attack = 'atacou'
        }
    
    //Exibe a mensagem
    console.log(`${article} ${this.type} ${this.name} atacou usando ${attack}`)
    }
}

//Heróis e seus atributos
let heroWizard = new Hero("Ryze", 1011, "wizard")
let heroWarrior = new Hero("Aatrox", 5099, "warrior")
let heroMonk = new Hero("Lee Sin", 40, "monk")
let heroNinja = new Hero("Akali", 30, "ninja")

//Chamada com a mensagem de cada tipo
heroWizard.message()
heroWarrior.message()
heroMonk.message()
heroNinja.message()



