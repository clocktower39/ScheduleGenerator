let maxLoadInput = document.getElementById('max-load-input');

maxLoadInput.value = maxLoad;

maxLoadInput.addEventListener("change", (e) => {
    maxLoad = e.target.value;
    workers.forEach(worker => worker.maxLoad = maxLoad);
});

let createSchedule = () => {
    tasks.forEach((task) => {
        let randomOrderWorkers = shuffle(workers);

        for(let i = 0; i < randomOrderWorkers.length; i++){

            if(((randomOrderWorkers[i].load + task.score) <= Number(randomOrderWorkers[i].maxLoad)) && randomOrderWorkers[i].programs.includes(task.associatedProgram) && randomOrderWorkers[i].available !== false ){

                randomOrderWorkers[i].load += Number(task.score);
                document.getElementById(`${randomOrderWorkers[i].id}-score-display`).textContent = randomOrderWorkers[i].load;
                task.worker = randomOrderWorkers[i];
                task.assigned = true;
                let taskAssignment = `${task.worker.firstName} ${task.worker.lastName}`;

                document.getElementById(task.taskID).innerText = taskAssignment;
                
                document.getElementById(task.taskID).classList.add('fade-in');
                setTimeout(()=>{
                    document.getElementById(task.taskID).classList.remove('fade-in');
                },1000)
                break;
            }
        }
        if(task.assigned !== true){
            
            console.log(`${task.task} Unassigned`)
            document.getElementById(task.taskID).innerText = "Unassigned";
            document.getElementById(task.taskID).style.color = "red";
        }
    });
}

let createScheduleBtn = document.getElementById('create-schedule');
createScheduleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearMemory();
    createSchedule();
});