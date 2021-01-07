let clearMemory = () => {
    tasks.forEach((task) => {
        document.getElementById(task.taskID).innerText = "";
        document.getElementById(task.taskID).style.color = "#507282";
        task.assigned = false;
        
    });
    workers.forEach(worker => {
        worker.load = 0;
        document.getElementById(`${worker.id}-score-display`).textContent = worker.load;
        // add lock feature logic later: if locked, dont clear assignment
        // worker.assignments = [];
    });
    tasks.forEach(task => {
        task.worker = "";
    })
}