function writeCards(name, greeting){
let thankYouCards=[]
for (let i=0; i<name.length; i++){
  thankYouCards.push(`Thank you ${name[i]}! For the wonderful ${greeting} gift`)
}
return thankYouCards
}
