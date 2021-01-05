let clearMemory = () => {
    tasks.forEach((task) => {
        document.getElementById(task.taskID).innerText = "";
        document.getElementById(task.taskID).style.color = "#507282";
        task.assigned = false;
        
    });
    workers.forEach(worker => {
        worker.load = 0;
        // add lock feature logic later: if locked, dont clear assignment
        // worker.assignments = [];
    });
    tasks.forEach(task => {
        task.worker = "";
    })
}