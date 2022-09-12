var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

let input=document.querySelector('input');
input.value='Hello js';


let submit=document.querySelector('input[type="submit"]');
submit.value='OK';

let item=document.querySelector('.list-group-item');
item.style.color='red';

let lastitem=document.querySelector
('.list-group-item:last-child');
lastitem.style.color='blue';


let titles=document.querySelectorAll('.title');
console.log(titles);