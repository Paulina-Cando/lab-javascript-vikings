// Soldier
class Soldier {
    constructor (health, strength){}//orden de los argumentos
    attack () { return this.strength}
    receiveDamage (damage) {this.health-= damage}
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){ //orden 
        super (health, strength)
        this.name = name
    }
    battleCry () {return "Odin Owns You All!"}
    receiveDamage (damage) {this.health -= damage
        if(this.health > 0 ){
            return `${this.name} has received ${this.damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength)
    }
        receiveDamage  (damage) {this.health -= damage
        if(this.health > 0 ){
            return `A Saxon has received ${this.damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy= []
        this.saxonArmy = []
    }
    
    addViking (viking) {
        this.vikingArmy.push(viking)
    }
    
    addSaxon (saxon) {
        this.saxonArmy.push(saxon)
    }
    
    vikingAttack () {
        let random = Math.floor(Math.random * this.vikingArmy.length) 
        
        const randomViking = this.vikingArmy[random]
        
        random = Math.floor(Math.random * this.saxonArmy.length)  
        
        const randomSaxon = this.saxonArmy[random]
        
        let message =``
        randomSaxon.receiveDamage (randomViking.attack() )
        if (randomSaxon.health <= 0){
            message = `Se murio el saxon`
            this.saxonArmy.splice(random, 1)
        }else{
            message = `El saxon recibio ${randomViking.strength}`
        }
        
        return message
    }
    
    
    saxonAttack () {
        let random = Math.floor(Math.random * this.saxonArmy.length)  
        
        const randomSaxon = this.saxonArmy[random]
        
        random = Math.floor (Math.random * this.vikingArmy.length)  
        
        const randomViking = this.vikingArmy[random]
        
        let message =``
        randomViking.receiveDamage(randomSaxon.attack())
        if (randomViking.health == 0){
            message = `Se murio el viking`
            this.vikingArmy.splice(random, 1)
        }else{
            message = `El vikingo recibio ${randomSaxon.strength}`
        }
        
        return message
    }
    
    showStatus () {
        let message=``
        if(this.vikingArmy.length == 0 ){
            message = `Vikings have won the war of the century!`
        }else if (this.saxonArmy.length == 0){
            message = `Saxons have fought for their lives and survived another day...`
        }else if (this.vikingArmy > 0 && this.saxonArmy > 0 ){
            message = ` Vikings and Saxons are still in the thick of battle.`
        }else{
           
        }
        return message
    }
}




