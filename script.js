let todos = []

function submitTodo() {
    myInputEl = document.querySelector(".myInput");
    if(myInputEl.value == "") return
    todos.push(myInputEl.value)
    myInputEl.value = ""

    renderTodos()
}

function renderTodos() {
    const todoContainerEl = document.getElementById("todoContainer")
    todoContainerEl.innerHTML = ""

    for (let i = 0; i < todos.length; i++) {
        const liEl = document.createElement("li");
        liEl.innerText = todos[i];
        liEl.id = i;
        const deleteBtnEl = document.createElement("button")
        deleteBtnEl.innerText = "Delete"
        deleteBtnEl.addEventListener("click", function () {
            removeTodos(i)
        })

        const doneBtnEl = document.createElement("button")
        doneBtnEl.innerText = "Done"
        doneBtnEl.addEventListener("click", function () {
            doneTodos(i)
        })

        todoContainerEl.appendChild(liEl);
        todoContainerEl.appendChild(deleteBtnEl);
        todoContainerEl.appendChild(doneBtnEl);
    }
}

function removeTodos(index) {
    todos.splice(index, 1)
    renderTodos()
}

function doneTodos(index) {
document.getElementById(index).style.textDecoration = "line-through"
    
    // renderTodos()
}


