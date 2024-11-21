document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('newItemInput');
    const newItemText = input.value.trim();
    
    if (newItemText !== '') {
        const ul = document.getElementById('itemList');
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        ul.appendChild(newItem);
        
        input.value = ''; 
    }
});
