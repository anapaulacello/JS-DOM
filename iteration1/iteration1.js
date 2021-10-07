let myBtn=document.querySelector('.showme');
console.log(myBtn);
///////////////
let myh1=document.querySelector('#pillado');
console.log(myh1);
/////////////
/* let myP = document.querySelectorAll('p').forEach((element) => {
    console.log(element.innerHTML);
   });
 */
/////////////////
let myP = document.querySelectorAll('p');
myP.forEach((element)=>{
    console.log(element.innerHTML);
});
/////////
let myTestMe=document.querySelectorAll('.testMe');
myTestMe.forEach((element)=>{
    console.log(element.innerHTML);
});

//TODO
//getAttribute(attributeName): Devuelve el valor del atributo con nombre attributeName
