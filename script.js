const rectiangle=document.getElementsByClassName("Rectangle")
const alone=document.getElementsByClassName("create-new")

const suun = document.querySelector(".suun");

suun.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    // შევამოწმოთ, დაემატა თუ არა კლასი
   
});
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const lastSection = document.querySelector('.last');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== "") {
        
        // ვქმნით ახალ ჩანაწერს
        const newTodo = document.createElement('div');
        newTodo.classList.add('todo-item');
        
        newTodo.innerHTML = `
            <div class="oval-copy"></div>
            <p>${input.value}</p>
        `;

        // ვსვამთ სიის ბოლო პანელის (last) წინ
        todoList.insertBefore(newTodo, lastSection);

        // ვასუფთავებთ ინფუთს
        input.value = "";
    }
    updateCount()
});

const deleted = document.querySelector(".clear"); 

deleted.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.todo-item.completed');
    
    completedTasks.forEach(task => {
        task.remove();
    });
});


document.querySelector('#todo-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('oval-copy')) {
        // პოულობს მშობელ .todo-item-ს და ამატებს/აშორებს .completed კლასს
        e.target.parentElement.classList.toggle('completed');
    }
   updateCount()
});

const all=document.querySelector(".all");

all.addEventListener("click", () => {
    const allTodos = document.querySelectorAll(".todo-item");

    allTodos.forEach(todo => {
        todo.classList.add("completed");
    });
   
});


const numbers = document.querySelector(".numbers");

function updateCount() {
    numbers.textContent = document.querySelectorAll(".todo-item").length +  " item left";
}
updateCount()