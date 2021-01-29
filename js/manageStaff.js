const addWorker = (worker) => {
    let manageStaff = document.getElementById('manage-staff');
        manageStaff.className = 'manage-staff-container';

    let workerContainer = document.createElement('div');
        workerContainer.id = `${worker.id}-container`;
        workerContainer.className = 'worker-container';
        workerContainer.style.display = 'flex';
        workerContainer.style.flexDirection = 'column';

    let workerNameElem = document.createElement('button');
        workerNameElem.style.background = 'none';
        workerNameElem.style.border = 'none';
        workerNameElem.style.fontSize = '18px';
        workerNameElem.textContent = worker.firstName;
        workerNameElem.addEventListener('click',(e) => {
            e.target.parentElement.classList.toggle('manage-staff-display-toggle-border');
            e.target.nextSibling.classList.toggle('manage-staff-display-toggle');
        })


    let toggleDisplay = document.createElement('div');
        toggleDisplay.className = 'manage-staff-display-toggle';


    let workerProgramListContainer = document.createElement('div');
    workerProgramListContainer.className = 'workerProgramListContainer';
    workerProgramListContainer.textContent = 'Programs';
    workerProgramListContainer.addEventListener('click',(e) => {
        e.target.childNodes.forEach((child, i) => (i>0)?child.classList.toggle("hide"):null)
    })
        worker.programs.forEach(program => {
            let newProgram = document.createElement('p');
            newProgram.textContent = program;
            newProgram.className = 'hide';
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
    checkboxLabel.innerText = `Available`;
    
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.style.margin = 0;
    removeBtn.className = "remove-worker-btn";
    removeBtn.onclick = (e) => {
        removeStaff(worker);
    }
    attendanceWorkerDiv.appendChild(checkbox);
    attendanceWorkerDiv.appendChild(checkboxLabel);

    workerContainer.appendChild(workerNameElem);
    workerContainer.appendChild(toggleDisplay);

    toggleDisplay.appendChild(workerProgramListContainer);
    toggleDisplay.appendChild(attendanceWorkerDiv);
    toggleDisplay.appendChild(currentScore);
    toggleDisplay.appendChild(removeBtn);

    manageStaff.appendChild(workerContainer);
}

workers.forEach(worker => {
    addWorker(worker);
})

let addStaffBtn = document.getElementById('add-new-staff');
    addStaffBtn.addEventListener('click', () => {
        openAddStaffModal();
    })

let staffMenuView = document.getElementById('staff-menu-view');

staffMenuView.addEventListener('click',() => {
    let elemList = document.querySelectorAll('.worker-container');
    let list = Array.from(elemList);
    let filterList = list.filter(worker => worker.children[1].classList.contains('manage-staff-display-toggle'))
    
    const toggleList = (chosenList) => {
        chosenList.forEach(elem => {
            elem.classList.toggle('manage-staff-display-toggle-border');
            elem.children[1].classList.toggle('manage-staff-display-toggle');
        })
    }
    (filterList.length == 0)? toggleList(list):toggleList(filterList);
});

let openAddStaffModal = () => {
    let modal = document.getElementById('add-new-staff-modal');
    modal.style.display = "flex";
    let overlay = document.getElementById('overlay');
    overlay.style.display = "block";
}

let closeAddStaffModal = () => {
    let modal = document.getElementById('add-new-staff-modal');
    modal.style.display = 'none';
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
}

let createAddStaffModalInput = (labelName, id, modal) => {
    let modalInputDiv = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');

    modalInputDiv.id = `${id}-input-div`;
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

let createAddStaffModal = () => {
    let modal = document.createElement('div');

    let closeAddStaffModalDiv = document.createElement('div');
    closeAddStaffModalDiv.innerHTML = '<i class="far fa-times-circle"></i>';
    closeAddStaffModalDiv.style.display = 'flex';
    closeAddStaffModalDiv.style.justifyContent = 'flex-end';
    closeAddStaffModalDiv.onclick = (e) => {
        closeAddStaffModal();
    }

    modal.appendChild(closeAddStaffModalDiv);

    createAddStaffModalInput("firstName","firstName-input-modal", modal);
    createAddStaffModalInput("lastName","lastName-input-modal", modal);
    createAddStaffModalInput("id","id-input-modal", modal);
    createAddStaffModalInput("programs","programs-input-modal", modal);
    createAddStaffModalInput("load","load-input-modal", modal);
    createAddStaffModalInput("available","available-input-modal", modal);

    let submitButton = document.createElement('button');
    submitButton.innerText = "Create New Staff"
    submitButton.onclick = (e) => {
        // modify for staff addPositionToStaffs(staff, staffID, score, associatedProgram);
        closeAddStaffModal();
    }

    modal.id = 'add-new-staff-modal';
    modal.style.display = 'none';

    modal.appendChild(submitButton);

    document.body.appendChild(modal);
}

let removeStaff = (staffToRemove) => {
    let indexToRemove;
    for(let i = 0; i < workers.length; i++){
        if(workers[i].id == staffToRemove.id){
            indexToRemove = i;
            document.getElementById(`${staffToRemove.id}-container`).remove();
        }
    }
    if(indexToRemove >= 0){
        workers.splice(indexToRemove, 1);
    }
}

createAddStaffModal();