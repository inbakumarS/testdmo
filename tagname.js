let li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello';
li[2].style.backgroundC0lor='#f4f4f4';


//const list=document.querySelectorAll('li');
for(let i=0;i<li.length;i++){
    li[i].style.color='red';
}
//console.log(list);
