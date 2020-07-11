const names=["Caitlin", "Taylor", "Brooke"]
const event= "Wedding"
const array=[]
function writeCards(names,event) {
for (let i=0;i<names.length;i++){
  array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return array
}


function countDown(integer){
  while(integer>-1){
    console.log(integer--);
  }
}
