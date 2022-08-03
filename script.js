document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;	
        }else{
            document.querySelector('#submit').disabled = true;	
        }
    
    }

    document.querySelector('#submit').onclick = () => {

        const li = document.createElement('li');
        const labelElement = document.createElement('label'),
        inputElement = document.createElement('input'),
        spanElement = document.createElement('span'),
        pElement = document.createElement('p');

        inputElement.type = "checkbox";
        spanElement.classList.add("checkbox");
        pElement.classList.add('pElement');
        li.classList.add("task-li");
        labelElement.classList.add('label');

        labelElement.appendChild(inputElement);
        labelElement.appendChild(spanElement);


        const deleteButton = document.querySelector('#delete');
        const task = document.querySelector('#task').value;

        pElement.innerHTML = task;
        li.appendChild(labelElement);
        li.appendChild(pElement);

        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        deleteButton.addEventListener('click', () => {
            document.querySelector('#tasks').removeChild(li);
            labelElement.classList.remove('label');
        })

        return false;
    }

});