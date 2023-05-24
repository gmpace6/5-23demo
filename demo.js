// const string = 'l2am6'

// console.log('number', Number(string))
// console.log('parseInt', parseInt(string))


let jonSnowHealth = 100

function isJonAlive () {
    if(jonSnowHealth > 0) {
        console.log("Jon's alive")
    } else {
        console.log("Jon's dead")
    }
}

// isJonAlive()

function attackJon (attackStrength) {
    jonSnowHealth -= attackStrength 
    isJonAlive()
    console.log(jonSnowHealth)
} // does not need a return, stores value to variable at global scope (line 7)

attackJon(20)

attackJon(12)

attackJon(6)

function greeter(person1, person2) {
    console.log(`${person1} says hello to ${person2}`)
}

greeter('Garrett', 'Nitin')

const diceRoll = (sides) => Math.ceil(Math.random() * sides)

const rolledDice = diceRoll(20)

console.log(rolledDice)

function rollTwice() {
const roll1 = diceRoll(20)
const roll2 = diceRoll(20)
console.log({ roll1 }, { roll2 })
return roll1  * roll2
}

console.log(rollTwice())


