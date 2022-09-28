/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 35
let jamieLannisterAttack = 50

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