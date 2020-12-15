function writeCards(name, greeting){
let thankYouCards=[]
for (let i=0; i<name.length; i++){
  thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${greeting} gift!`)
}
return thankYouCards
}


function countDown(startingNumber){
while (startingNumber>0)
  {console.log `startingNumber`
  startingNumber++}
}
