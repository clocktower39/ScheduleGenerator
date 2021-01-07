let addWorker = (worker) => {
    let manageStaff = document.getElementById('manage-staff');
        manageStaff.className = 'manage-staff-container';

    let workerContainer = document.createElement('div');
        workerContainer.className = 'worker-container';
        workerContainer.style.display = 'flex';
        workerContainer.style.flexDirection = 'column';

    let workerNameElem = document.createElement('button');
        workerNameElem.style.background = 'none';
        workerNameElem.style.border = 'none';
        workerNameElem.textContent = worker.firstName;
        workerNameElem.addEventListener('click',(e) => {
            e.target.parentElement.classList.toggle('manage-staff-display-toggle-border');
            e.target.nextSibling.classList.toggle('manage-staff-display-toggle');
        })


    let toggleDisplay = document.createElement('div');
        toggleDisplay.className = 'manage-staff-display-toggle';


    let workerProgramListContainer = document.createElement('div');
        worker.programs.forEach(program => {
            let newProgram = document.createElement('p');
            newProgram.textContent = program;
            workerProgramListContainer.appendChild(newProgram);
        })

    let currentScore = document.createElement('p');
        currentScore.id = `${worker.id}-score-display`;
        currentScore.textContent = worker.load;

    let attendanceWorkerDiv = document.createElement('div');
    let checkbox = document.createElement('input');
    let checkboxLabel = document.createElement('label');

    checkbox.type = "checkbox";
    checkbox.id = `${worker.id}-checkbox`;
    checkbox.name = `${worker.id}`;
    checkbox.value = `${worker.id}`;
    checkbox.checked = true;
    checkbox.className = "attendance-checkbox";
    checkbox.addEventListener('change', (e) => {
        if(e.target.checked == false){
            e.target.parentElement.parentElement.parentElement.children[0].style.color = 'red';
            e.target.nextElementSibling.style.color = 'red';
            workers.forEach(worker => {
                if(worker.id == e.target.name){
                    worker.available = false;
                    console.log(`${worker.firstName} ${worker.lastName} is off work`)
                }
            })
        }
        else {
            e.target.parentElement.parentElement.parentElement.children[0].style.color = 'black';
            e.target.nextElementSibling.style.color = 'black';
            workers.forEach(worker => {
                if(worker.id == e.target.name){
                    worker.available = true;
                }
            })
        }
    })

    checkboxLabel.htmlFor = `${worker.id}-checkbox`;
    checkboxLabel.innerText = `${worker.firstName}`;

    attendanceWorkerDiv.appendChild(checkbox);
    attendanceWorkerDiv.appendChild(checkboxLabel);

    workerContainer.appendChild(workerNameElem);
    workerContainer.appendChild(toggleDisplay);

    toggleDisplay.appendChild(workerProgramListContainer);
    toggleDisplay.appendChild(attendanceWorkerDiv);
    toggleDisplay.appendChild(currentScore);

    manageStaff.appendChild(workerContainer);
}

workers.forEach(worker => {
    addWorker(worker);
})

let addStaffBtn = document.getElementById('add-new-staff');
    addStaffBtn.addEventListener('click', () => {
        alert('Under construction.')
    })