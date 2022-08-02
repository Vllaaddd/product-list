document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;	
        }else{
            document.querySelector('#submit').disabled = true;	
        }
    
    }

    document.querySelector('form').onsubmit = () => {

        const labelElement = document.createElement('label'),
        inputElement = document.createElement('input');
        spanElement = document.createElement('span');

        inputElement.type = "checkbox";
        spanElement.classList.add("checkbox");

        labelElement.appendChild(inputElement);
        labelElement.appendChild(spanElement);


        const deleteButton = document.querySelector('#delete');
        const task = document.querySelector('#task').value;

        const li = document.createElement('li');
        li.innerHTML = task;
        li.classList.add("task-li");
        li.appendChild(labelElement);

        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        deleteButton.addEventListener('click', () => {
            document.querySelector('#tasks').removeChild(li);
            labelElement.style.display = "none";
        })

        return false;
    }

});