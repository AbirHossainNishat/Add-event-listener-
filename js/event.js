  //one click
  
  //<button onclick=" console.log(34)"> Another button</button>
//option 2 : oneclick function
//console.log('my separate file');
function makeRed() {

document.body.style.backgroundColor= 'red';

}
 //option3
const makebluebutton =document.getElementById(" make-blue");
 makebluebutton.onclick=  makeBlue()
 function makeBlue(){


    document.body.style.backgroundColor='blue';
 }
  

 //option 3 another
  const purpaleutton =document.getElementById('make-purpale')
 purpaleutton.onclick = function makePurpale(){
document.body.style.backgroundColor= 'purple'

 }

 //option 4
  const pinkbutton=document.getElementById('make-pink')
  pinkbutton.addEventListener('click', makepink);
  
function makepink(){

    document.body.style.backgroundColor= 'pink';
}
  //option 4 another
  
const makegreen = document.getElementById('make-green')
 makegreen.addEventListener('click',function makeGreen(){

document.body.style.backgroundColor= 'green';

 })

//importoant ata will sometime
// use korbo
const makegoldenrod =document.getElementById('make-goldenrod')
 makegoldenrod.addEventListener ( 'click', function makegoldenrod(){
document.body.style.backgroundColor= 'goldenrod';

 })