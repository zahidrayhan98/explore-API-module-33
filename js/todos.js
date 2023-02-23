 function loadTodo (){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then (data =>  displayTodo(data))
 }
 function displayTodo(todo){
    
     const todoContainer = document.getElementById('todos-container');
    for (const todos of todo){
        
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h1>title: ${todos.title} </h1>

        ` ;

        todoContainer.appendChild(todoDiv);
    }

 }
 loadTodo();