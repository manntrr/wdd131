const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const registry = {};
let count = 0;

button.addEventListener("click",clickAdd);
function clickAdd(event) {
    if(input.value.trim() !== '') {
        const id = input.value.trim();
        if(!(id in registry)) {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.ariaLabel = 'Remove '+id;
            deleteButton.addEventListener("click",clickDelete);
            deleteButton.id = id;
            li.textContent = id;
            li.append(deleteButton);
            list.append(li);
            count++;
            registry[id] = li;
            input.value='';
        } else {
            console.log("add button clicked with an already existing input value.  moving focus to the input field.")
        }
    }
    else {
        console.log("add button clicked with empty input value.  moving focus to the input field.")
    }
    if(count >= 10) {
        input.disabled = true;
        input.style.visibility = 'hidden';
        button.disabled = true;
        button.style.visibility = 'hidden';
    }
    else{
        input.disabled = false;
        input.style.visibility = 'visible';
        button.disabled = false;
        button.style.visibility = 'visible';
    }
    input.focus();
}
function clickDelete(event) {
    const id = event.target.id;
    const li = registry[id];
    if(li !== '') list.removeChild(li);
    delete registry[id];
    count--;
     if(count >= 10) {
        input.disabled = true;
        input.style.visibility = 'hidden';
        button.disabled = true;
        button.style.visibility = 'hidden';
    }
    else{
        input.disabled = false;
        input.style.visibility = 'visible';
        button.disabled = false;
        button.style.visibility = 'visible';
    }
   input.focus();
}