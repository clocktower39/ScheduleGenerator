let maxLoadInput = document.getElementById('max-load-input');

maxLoadInput.value = maxLoad;

maxLoadInput.addEventListener("change", (e) => {
    maxLoad = e.target.value;
});

let attendanceCheckboxes = document.querySelectorAll('.attendance-checkbox');

attendanceCheckboxes.forEach(box => {
    box.checked = false;

    box.addEventListener('change', (e) => {
        if(e.target.checked == true){
            e.target.nextElementSibling.style.color = 'red';
            workers.forEach(worker => {
                if(worker.id == e.target.name){
                    worker.offwork = true;
                    console.log(`${worker.firstName} ${worker.lastName} is off work`)
                }
            })
        }
        else {
            e.target.nextElementSibling.style.color = 'black';
        }
    })
});

let createSchedule = () => {
    tasks.forEach((task) => {
        let randomOrderWorkers = shuffle(workers);
        for(let i = 0; i < randomOrderWorkers.length; i++){
            if((randomOrderWorkers[i].load + task.score) <= maxLoad && randomOrderWorkers[i].programs.includes(task.associatedProgram) && randomOrderWorkers[i].offwork !== true /* && randomOrderWorkers[i] !== tasks[0].worker && randomOrderWorkers[i] !== tasks[1].worker */ ){
                
                randomOrderWorkers[i].load += task.score;
                task.worker = randomOrderWorkers[i];
                task.assigned = true;
                let taskAssignment = `${task.worker.firstName} ${task.worker.lastName}`;

                console.log(document.getElementById(task.taskID).classList)
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

let clearMemory = () => {
    tasks.forEach((task) => {
        document.getElementById(task.taskID).innerText = "";
        document.getElementById(task.taskID).style.color = "#507282";
        task.assigned = false;
        
    });
    workers.forEach(worker => {
        worker.load = 0;
    });
    
}

let scoreInputs = document.querySelectorAll('.adjust-score-inputs');
    scoreInputs.forEach(input => {
        tasks.forEach(task => {
            if(task.taskID == input.nextElementSibling.id){
                input.value = task.score;
            }
        })
        input.addEventListener('change', (e) => {
            tasks.forEach(task => {
                if(task.taskID == e.target.nextElementSibling.id){
                    task.score = e.target.value;
                }
            })
        })
    });

let scheduleRow = document.getElementById('schedule-row');
let positions = document.querySelectorAll('.positions');