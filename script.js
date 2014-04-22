
function add() {
    if (document.getElementById('newItem').value == ''){
        return;
    }
    var new_todo_text = document.getElementById('newItem').value;
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(new_todo_text + ''));
    if (items.firstChild) {
        items.insertBefore(item, items.firstChild);
    } else {
        items.insertBefore(item);
    }
    
    document.getElementById('newItem').value = '';
    
    localStorage.setItem('storedItems', items.innerHTML); 
}

function changeElementColorBack(element) {
    element.style.color = 'black';
}

if (localStorage.getItem('storedItems')) {
    items.innerHTML = localStorage.getItem('storedItems');
}

document.getElementById('items').addEventListener('click', function(event) {
    if (event.target.style.color == 'red') {
        event.target.remove();
        localStorage.setItem('storedItems', items.innerHTML); 
    }
    event.target.style.color = 'red';
    setTimeout(function(){changeElementColorBack(event.target)}, 5000);
}, false);

document.getElementById('title').addEventListener('click', function(event) {
    var element = document.getElementById('helpText');
        element.innerHTML = 'Add an item with the ENTER button. To remove an item click on the item to change it to red and to confirm the removal click on the item again (while still red). If accidentally clicked on an item, don\'t worry the item only stays red for a short while.</br></br>';
        element.innerHTML = element.innerHTML  + 'created by <a href="https://github.com/liloboy">Liloboy</a></br></br>';
        element.innerHTML = element.innerHTML  + '<a href="https://github.com/liloboy/js-todo">source code and readme</a></br></br>';
}, false);
