const getElementText = (inputId) => {
    const input = document.getElementById(inputId);
    return input;
}
const handleSubmit = () => {
    const todo = JSON.parse(localStorage.getItem("TODOS"));
    console.log(todo);
    const inputText = getElementText('todo-text').value;
    if(!todo){
        const todoList = [
            {
                title: inputText,
                completed: false
            },
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    else{
        const todoList = [
            ... todo,
            {
                title: inputText,
                completed: false
            },
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    render();
};

const render = () => {
    const todo  = JSON.parse(localStorage.getItem("TODOS")) ;
    const ul  = getElementText("todo-list");
    ul.innerHTML = '';
    todo.forEach((item) => {
        console.log(item)
        const li  = document.createElement('li');
        li.classList.add('py-2','flex');
        li.innerHTML =`
            <span class="w-full">${item.title}</span>
            <button onclick = "handleClearAnItem('${item}')" title="Clear All" class="">
                <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
            </button>
        `;
        ul.appendChild(li);
    });
};
render();

const handleClearAllItem = () => {
    localStorage.removeItem("TODOS");
    render();
};

const handleClearAnItem =(title) => {
    console.log(title);
    localStorage.removeItem("TODOS", title);
    render();
}