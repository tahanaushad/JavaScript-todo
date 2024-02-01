let todos =  []

function submitTodo() {
    myInputEl = document.querySelector(".myInput");
    todos.push(myInputEl.value)
    myInputEl.value = ""

    renderTodos()
}

function renderTodos (){
    const todoContainerEl = document.getElementById("todoContainer") 
    todoContainerEl.innerHTML = ""

    for(let i = 0; i < todos.length; i++){
        const liEl = document.createElement("li");
        liEl.innerText = todos[i];
        const deleteBtnEl = document.createElement("button")
        deleteBtnEl.innerText = "Delete"
        deleteBtnEl.addEventListener("click", function (){
            removeTodos(i)
        })

        liEl
        todoContainerEl.appendChild(liEl);
        todoContainerEl.appendChild(deleteBtnEl);
    }
}

function removeTodos (index){
todos.splice(index, 1)
renderTodos()
}


