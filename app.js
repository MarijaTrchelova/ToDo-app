const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', addTask);

taskCount = 0;
doneTasks = 0;

function addTask(){
    const taskList = document.getElementById('todo-list');

    let newTask = document.getElementById('add-task').value;

    if(newTask){
        let li = document.createElement('li');

        let taskText = document.createElement('span');
        taskText.innerText = newTask;
        li.append(taskText);

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('click', function(){
            if(checkbox.checked){
                doneTasks++
                taskText.classList.add('task-done');
            }
            else{
                doneTasks--
                taskText.classList.remove('task-done');
            }
            updateCounters();
        });

        li.append(checkbox);

        taskList.append(li);
        document.getElementById('add-task').value = '';
        taskCount++;
        updateCounters();
    }
}

function updateCounters(){
    document.getElementById('total').innerText = taskCount;
    document.getElementById('done').innerText = doneTasks;
    document.getElementById('left').innerText = taskCount - doneTasks;;
}
