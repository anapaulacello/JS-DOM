window.onload=function(){
    
    addDiv();
    addP();
    addSixP();
    insertTxt();
    addApps();
    borrar();
    insertarEnMedio();
}
function addDiv(){
    let newDiv=document.createElement('div');
    newDiv.id = 'nuevoElemento';
    var body = document.querySelector('body'); 
    body.appendChild(newDiv);
}  
/* function addElement() {
    var newElem = document.createElement('div');
    newElem.id = 'nuevoElemento';
    newElem.className = 'bloque';
    newElem.style = 'background:red; width:200px; height:200px'; 
    var body = document.querySelector('body'); 
    body.appendChild(newElem); 
  }  */

  function addP(){
    let newDiv=document.createElement('div');
    newDiv.id = 'div-con-p';
    let newP=document.createElement('p');
    newP.id='newP'
    newDiv.appendChild(newP);
    var body = document.querySelector('body'); 
    body.appendChild(newDiv);
}

function addSixP(){
    let newDiv=document.createElement('div');
    newDiv.id = 'div-con-6p';
    
    for (let i = 0; i < 6; i++) {
        let newP=document.createElement('p');
        newP.id='newP'
        newDiv.appendChild(newP);
        console.log('entre');
    }
    var body = document.querySelector('body'); 
    body.appendChild(newDiv);
    
}

function addP(){
    let newDiv=document.createElement('div');
    let newP=document.createElement('p');
    let newTxt=document.createTextNode('Soy dinámico!');
    newP.appendChild(newTxt);
    newDiv.appendChild(newP);
    var body = document.querySelector('body'); 
    body.appendChild(newDiv);
}

function insertTxt(){
    let newClass=document.querySelector('.fn-insert-here');
    let newTxt=document.createTextNode('Wubba Lubba dub dub');
    newClass.appendChild(newTxt);
}

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
function addApps(){
    let newUl=document.createElement('ul');
    for (const i of apps) {
        let newLi=document.createElement('li');
        let newTxt=document.createTextNode(apps[i]);
        newLi.appendChild(newTxt);
        newUl.appendChild(newLi);
    }
    let body = document.querySelector('body'); 
    body.appendChild(newUl);
}

 function borrar(){
    let allNode=document.querySelectorAll('.fn-remove-me');
    let i=0;
    while(i<allNode.length){
        allNode[i].remove();
        i++;
    }
} 

function insertarEnMedio(){
    let newDivs=document.querySelectorAll('div');
    for (const i of newDivs) {
        let newp=document.createElement('p');
        let newTxt=document.createTextNode(newDivs[i]);
        newp.appendChild(newTxt);
        newDivs.appendChild(newp);
    }
}