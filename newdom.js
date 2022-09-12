console.dir(document);

console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
console.log(document.forms);
console.log(document.getElementById('header-title'));
let headertitle=document.getElementById('header-title');
console.log(headertitle);
//headertitle.textContent='Hello man';
//headertitle.innerText='good bye';
headertitle.style.borderBottom='solid 3px #000'

let main=document.getElementsByClassName('card card-body');
main.style.fontWeight='bold';
main.style.color='green';
main.titleContent='hello items'
console.log(main);