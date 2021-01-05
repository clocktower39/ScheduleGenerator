let maxLoadInput = document.getElementById('max-load-input');

maxLoadInput.value = maxLoad;

maxLoadInput.addEventListener("change", (e) => {
    maxLoad = e.target.value;
    workers.forEach(worker => worker.maxLoad = maxLoad);
});

let attendanceCheckboxes = document.querySelectorAll('.attendance-checkbox');

attendanceCheckboxes.forEach(box => {
    box.checked = true;

    box.addEventListener('change', (e) => {
        if(e.target.checked == false){
            e.target.nextElementSibling.style.color = 'red';
            workers.forEach(worker => {
                if(worker.id == e.target.name){
                    worker.available = false;
                    console.log(`${worker.firstName} ${worker.lastName} is off work`)
                }
            })
        }
        else {
            e.target.nextElementSibling.style.color = 'black';
            workers.forEach(worker => {
                if(worker.id == e.target.name){
                    worker.available = true;
                }
            })
        }
    })
});

let createSchedule = () => {
    tasks.forEach((task) => {
        let randomOrderWorkers = shuffle(workers);

        for(let i = 0; i < randomOrderWorkers.length; i++){

            if(((randomOrderWorkers[i].load + task.score) <= Number(randomOrderWorkers[i].maxLoad)) && randomOrderWorkers[i].programs.includes(task.associatedProgram) && randomOrderWorkers[i].available !== false ){
                console.log((randomOrderWorkers[i].load + task.score) <= Number(randomOrderWorkers[i].maxLoad));
                console.log(randomOrderWorkers[i]);
                randomOrderWorkers[i].load += Number(task.score);
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

let scoreInputs = document.querySelectorAll('.adjust-score-inputs');
    scoreInputs.forEach(input => {
        tasks.forEach(task => {
            if(task.taskID == input.nextElementSibling.id){
                input.value = Number(task.score);
            }
        })
        input.addEventListener('change', (e) => {
            tasks.forEach(task => {
                if(task.taskID == e.target.nextElementSibling.id){
                    task.score = Number(e.target.value);
                }
            })
        })
    });