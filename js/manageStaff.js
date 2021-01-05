let addWorker = (worker) => {
    let attendanceSection = document.getElementById('attendance');
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

    checkboxLabel.htmlFor = `${worker.id}-checkbox`;
    checkboxLabel.innerText = `${worker.firstName}`;

    attendanceWorkerDiv.appendChild(checkbox);
    attendanceWorkerDiv.appendChild(checkboxLabel);
    attendanceSection.appendChild(attendanceWorkerDiv);
}

workers.forEach(worker => {
    addWorker(worker);
})