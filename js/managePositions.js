let addTask = (task) => {
    let scheduleRow = document.getElementById('schedule-row');
    let taskDiv = document.createElement('div');
    let taskH4 = document.createElement('h4');
    let taskInput = document.createElement('input');
    let taskP = document.createElement('p');
    let removeBtn = document.createElement('button');

    taskDiv.id = `${task.taskID}-container`;
    taskDiv.className = "positions toggle-position-border";

    taskH4.innerText = task.task;

    taskInput.id = `${task.taskID}-score-input`;
    taskInput.className = 'adjust-score-inputs';
    taskInput.type = "number";
    taskInput.value = task.score;
    taskInput.min = 0;
    taskInput.max = 30;
    taskInput.onkeyup = (e) => {
        console.log(e.target);
        console.log(e.target.value);

        if(e.target.value > 30){
            e.target.style.color = 'red';
        }
        else {
            e.target.style.color = '#507282';
        }
    };

    taskP.id = task.taskID;
    taskP.className = 'task-assignee fade-in';
    taskP.innerText = 'Unassigned';
    
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.style.margin = 0;
    removeBtn.className = "remove-task-btn";
    removeBtn.onclick = (e) => {
        removeTask(task);
    }

    taskDiv.appendChild(taskH4);
    taskDiv.appendChild(taskInput);
    taskDiv.appendChild(taskP);
    taskDiv.appendChild(removeBtn);
    
    scheduleRow.appendChild(taskDiv);
}

let addTaskButton = () => {
    let scheduleRow = document.getElementById('schedule-row');
    let taskDiv = document.createElement('div');
    let taskH4 = document.createElement('h4');
    let createBtn = document.createElement('button');
    let taskP = document.createElement('p');

    taskDiv.id = `add-new-task-container`;
    taskDiv.className = "positions";
    taskDiv.style.order = tasks.length;

    taskH4.innerText = "ADD NEW";
    
    createBtn.innerHTML = '<i class="fas fa-plus-circle"></i>';
    createBtn.style.margin = 0;
    createBtn.style.color = "#2AA9DB";
    createBtn.style.fontSize = "50px";
    createBtn.id = "add-new-task-btn";
    createBtn.onclick = (e) => {
        openModal();
    }

    taskP.innerText = "Position";

    taskDiv.appendChild(taskH4);
    taskDiv.appendChild(createBtn);
    taskDiv.appendChild(taskP);
    
    scheduleRow.appendChild(taskDiv);
}

let addPositionToTasks = (task, taskID, score, associatedProgram, assigned=false, worker="") => {
    tasks.push({
        task: task,
        taskID: taskID,
        score: score,
        associatedProgram: associatedProgram,
        assigned: assigned,
        worker: worker,
    });
    addTask({
        task: task,
        taskID: taskID,
        score: score,
        associatedProgram: associatedProgram,
        assigned: assigned,
        worker: worker,
    });
}

let openModal = () => {
    let modal = document.getElementById('add-new-position-modal');
    modal.style.display = "block";
    let overlay = document.getElementById('overlay');
    overlay.style.display = "block";
}

let closeModal = () => {
    let modal = document.getElementById('add-new-position-modal');
    modal.style.display = 'none';
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
}

let createModal = () => {
    let modal = document.createElement('div');

    let closeModalDiv = document.createElement('div');
    closeModalDiv.innerHTML = '<i class="far fa-times-circle"></i>';
    closeModalDiv.style.display = 'flex';
    closeModalDiv.style.justifyContent = 'flex-end';
    closeModalDiv.onclick = (e) => {
        closeModal();
    }

    modal.appendChild(closeModalDiv);

    createModalInput("task","task-input-modal", modal);
    createModalInput("taskID","taskID-input-modal", modal);
    createModalInput("score","score-input-modal", modal);
    createModalInput("associatedProgram","associatedProgram-input-modal", modal);

    let submitButton = document.createElement('button');
    submitButton.innerText = "Create Position"
    submitButton.onclick = (e) => {
        let task = document.getElementById('task-input-modal').value;
        let taskID = document.getElementById('taskID-input-modal').value;
        let score = document.getElementById('score-input-modal').value;
        let associatedProgram = document.getElementById('associatedProgram-input-modal').value;
        addPositionToTasks(task, taskID, score, associatedProgram);

    }

    modal.id = 'add-new-position-modal';
    modal.style.display = 'none';

    modal.appendChild(submitButton);

    document.body.appendChild(modal);
}

let createModalInput = (labelName, id, modal) => {
    let modalInputDiv = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');

    modalInputDiv.id = `${id}-modal-input-div`;
    modalInputDiv.className = `modal-input-div`;
    
    input.id = `${id}`;
    input.className = 'modal-input';

    label.id = `${id}-label`;
    label.className = 'modal-input-label';
    label.htmlFor = `${id}`;
    label.innerText = labelName;

    modalInputDiv.appendChild(label);
    modalInputDiv.appendChild(input);

    modal.appendChild(modalInputDiv);
}

let removeTask = (taskToRemove) => {
    console.log(taskToRemove);
    let indexToRemove;
    for(let i = 0; i < tasks.length; i++){
        

        if(tasks[i].taskID == taskToRemove.taskID){
            
            console.log(tasks[i]);
            console.log(taskToRemove);
            indexToRemove = i;
            document.getElementById(`${taskToRemove.taskID}-container`).remove();
        }
    }
    console.log(tasks)
    if(indexToRemove >= 0){
        tasks.splice(indexToRemove, 1);
    }
    console.log(tasks)
}

createModal();

addTaskButton();

tasks.forEach(task => {
    addTask(task);
})