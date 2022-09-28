/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 35
let jamieLannisterAttack = 55

if(jonSnowAttack > jamieLannisterAttack){
    console.log('Jon Snow Has better attack than Jamie Lannister')
   } else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has better attack by Jon SNow')
}   else {
    console.log('Jamie Lannister has the same attack as Jon Snow')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    jonSnowHealth = 0
    console.log('Jon Snow has been slain')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
}
//John picks up shield and gets 25 defense
jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon Snow has been slain')

} else {
    jonSnowHealth -= (jamieLannisterAttack = jonSnowDefense)
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
}

if (jonSnowHealth + 50 >= 100 ) {
    jonSnowHealth = 100
} else {
    jonSnowHealth +=50
}

console.log(`Jon Snow Health after the health kit is ` + jonSnowHealth)

let coinLandsHeads = true

if (coinLandsHeads) {
    console.log('The fight continues')
} else {
    console.log('Jon is allowed to run away')
}

for (let i = 0; i < 5; i++) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon's health is now ` + jonSnowHealth)
}

///write logic in the for loop that detects if Jons health gets 0 or less, in which case you will pring that jon is dead and will stop further loop iterations

///write the for loop including the logic you wrote for the first assignment as a while loop, it should behave the same
