let todoList = [];

document.querySelector('.add-button').addEventListener('click', () => {
    addTodo();
})

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value;
    const dateInputElement = document.querySelector(".js-due-date-input");
    const dueDate = dateInputElement.value;

    if (name === ''){
        alert("Todo name is required");
    } else if (dueDate === '') {
        alert("Due date is required");
    } else {
        todoList.push({
            name, 
            dueDate
        });
    }
    
    inputElement.value = ''; 
    dateInputElement.value = '';
    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoList, index) => {
        const { name, dueDate } = todoList;
        const html = `
            <p>${name}</p> 
            <p>${dueDate}</p>
            <button class="delete-button">Delete</button>
        `;
        todoListHTML += html;
    })
    

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            })
        })
}
