let todos = []
let isEditing = false
let editingIndex = null

function submitTodo() {
    let myInputEl = document.querySelector(".myInput");
    if (myInputEl.value == "") return
    if (isEditing && editingIndex != null) {
        todos[editingIndex] = myInputEl.value
        isEditing = false
    }
    else {

        todos.push(myInputEl.value)
    }
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

        const editBtnEl = document.createElement("button")
        editBtnEl.innerText = "Edit"
        editBtnEl.addEventListener("click", function () {
            editTodos(i)
        })

        todoContainerEl.appendChild(liEl);
        todoContainerEl.appendChild(deleteBtnEl);
        todoContainerEl.appendChild(doneBtnEl);
        todoContainerEl.appendChild(editBtnEl);
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

function editTodos(index) {
    console.log(todos[index])
    let myInputEl = document.querySelector(".myInput");
    myInputEl.value = todos[index]
    isEditing = true
    editingIndex = index
}


