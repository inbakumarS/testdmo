let itemlist=document.querySelector('#items');
//parentnode
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='#f4f4f4';

//parentelement
let itemlist1=document.querySelector('#items');
console.log(itemlist1.parentElement);
itemlist.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemlist1.parentElement.parentElement.parentElement);

//childnodes
let itemlist2=document.querySelector('#items');
console.log(itemlist2.childNodes);
console.log(itemlist2.children);
console.log(itemlist2.children[1]);
itemlist2.children[1].style.backgroundColor='yellow';

//firstChild
console.log(itemlist2.firstChild);
//firstElementChild
console.log(itemlist2.firstElementChild);
itemlist2.firstElementChild.textContent='hello js';
//lastChild
console.log(itemlist2.lastChild);
//lastelEmentChild
console.log(itemlist2.lastElementChild);
itemlist2.lastElementChild.textContent='hello html';

//nextSibiling
console.log(itemlist2.nextSibling);
//nextElementSibiling
console.log(itemlist2.nextElementSibling);
itemlist2.nextElementChild.textContent='hello js';

//previousSibilg
console.log(itemlist2.previousSibling);
//preveiouselementsibiling
console.log(itemlist2.previousElementSibling);
itemlist2.previousElementSibling.style.color='green';

//creatingElement
let newDiv=document.createElement('div');

//Add class
newDiv.className='hi';

//add id
newDiv.id='hello1';
//add attributes
newDiv.setAttribute('title','hello div');
//textnode
let newdivtext=document.createTextNode('hello world');

newDiv.appendChild(newdivtext);
console.log(newDiv);

//insert
let container=document.querySelector('header .container');
//let h1=document.querySelector('header h1');

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

let newDiv1=document.querySelector('header .header-title');
let h1=document.querySelector('header h1');
header-title.insertBefore(newDiv1,h1);


let head=document.querySelector('#header-title');
head.parentNode.textContent='HEllo';

