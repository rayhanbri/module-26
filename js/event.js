// option 2 for handeling event 

function makeGreen() {
  document.body.style.backgroundColor = 'green';
}
function makered() {
  document.body.style.backgroundColor = 'red';
}

// Make purple 
const makePurple = document.getElementById('btn-purple');
console.log(makePurple)

makePurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple"
}


// makeblue 
const btnMakeBlue = document.getElementById('btn-make-blue');
console.log(btnMakeBlue)
// call the function see the magic 
btnMakeBlue.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}


// add eventlistener 
// id diye access korbo //.addEventListener ('event type',handler)
document.getElementById('btn-make-green').addEventListener('click', function makeGreen() {
  document.body.style.backgroundColor = 'green'
})


document.getElementById('btn-make-gold').addEventListener('click',function makeGold(){
  document.body.style.backgroundColor = 'gold'
})





