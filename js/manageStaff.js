let addWorker = (worker) => {
    let attendanceSection = document.getElementById('attendance');
    let attendanceWorkerDiv = document.createElement('div');
    let checkbox = document.createElement('input');
    let checkboxLabel = document.createElement('label');

    checkbox.type = "checkbox";
    checkbox.id = `${worker.id}-checkbox`;
    checkbox.name = `${worker.id}`;
    checkbox.value = `${worker.id}`;
    checkbox.className = "attendance-checkbox";

    checkboxLabel.htmlFor = `${worker.id}-checkbox`;
    checkboxLabel.innerText = `${worker.firstName}`;

    attendanceWorkerDiv.appendChild(checkbox);
    attendanceWorkerDiv.appendChild(checkboxLabel);
    attendanceSection.appendChild(attendanceWorkerDiv);
}

workers.forEach(worker => {
    addWorker(worker);
})