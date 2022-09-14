function onsubmit(e){
  e.preventDefault();

  const inputvalue=document.getElementById('item').value;
  const desc=document.getElementById('description').value;

  const li=document.createElement('li');
  li.className='list-group-item';

  const descnode=document.createTextNode(""+desc);
  li.appendChild(descnode);
}
// Filter Items
function filterItems(e){
  
  var text = e.target.value.toLowerCase();
  
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}