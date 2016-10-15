
var btn = document.getElementById('js-button');
var list = document.getElementById('Lista');

btn.className += ' btn btn-primary';
list.setAttribute('class', 'list-group');

btn.addEventListener('click', addNewItem, false);
//istnieje możliwość wyrejestrowania zdarzenia,gdy funkcja nie jest animowa.
function addNewItem() {
    var listLength = list.getElementsByTagName('li').length;
    // alternatywna linia 
    // var len = list.children.length; 
    
    
    //    if(listLength < 5 )
    //    {
    //        var newItem = document.createElement('li');
    //        newItem.className+=' list-group-item'
    //        var content = document.createTextNode('item ' + listLength);
    //        newItem.appendChild(content);
    //        list.appendChild(newItem);
    //    }
    //    else btn.removeEventListener('click',addNewItem,false);

     list.innerHTML += '<li class="list-group-item">' + 'item ' + listLength + '</li>';
        
}