var maxLoad = 15;

let workers = [
    {
        firstName: "Stephen",
        lastName: "Rutcowski",
        id: "stephen",
        programs: ["Clozapine", "Nulojix", "Xiaflex", "Aveed"],
        load: 0,
        offwork: false
    },
    {
        firstName: "Andreal",
        lastName: "Willis",
        id: "andreal",
        programs: ["Clozapine", "Xiaflex", "Alosetron", "Aveed" ],
        load: 0,
        offwork: false
    },
    {
        firstName: "Bryce",
        lastName: "Fincher",
        id: "bryce",
        programs: ["Clozapine", "Bosentan"],
        load: 0,
        offwork: false
    },
    {
        firstName: "Zach",
        lastName: "Barnes",
        id: "zach",
        programs: ["Clozapine", "Bosentan"],
        load: 0,
        offwork: false
    },
    {
        firstName: "Carvonne",
        lastName: "Stafford",
        id: "carvonne",
        programs: ["Clozapine", "Nulojix", "Aveed", "Xiaflex"],
        load: 0,
        offwork: false
    },
    {
        firstName: "Taylor",
        lastName: "Magin",
        id: "taylor",
        programs: ["Clozapine", "Nulojix", "Aveed", "Xiaflex"],
        load: 0,
        offwork: false
    },
    {
        firstName: "Daisy",
        lastName: "Arenas",
        id: "daisy",
        programs: ["Clozapine", "Alosetron", "Bosentan"],
        load: 0,
        offwork: false
    },
    {
        firstName: "Matt",
        lastName: "Kearns",
        id: "matt",
        programs: ["Clozapine", "Bosentan"],
        load: 0,
        offwork: false
    }
];

let tasks = [
    {
        task: "CPMG PAEs",
        taskID: "cpmgPAE",
        score: 15,
        assigned: false,
        worker: "",
        associatedProgram: "Clozapine",
    },
    {
        task: "Bosentan PAEs",
        taskID: "bosentanPAE",
        score: 15,
        assigned: false,
        worker: "",
        associatedProgram: "Bosentan",
    },
    {
        task: "CPMG PAEs Backup",
        taskID: "cpmgPAEbackup",
        score: 7,
        assigned: false,
        worker: "",
        associatedProgram: "Clozapine",
    },
    {
        task: "Notifications",
        taskID: "notifications",
        score: 5,
        assigned: false,
        worker: "",
        associatedProgram: "Clozapine",
    },
    {
        task: "Project 1",
        taskID: "project1",
        score: 11,
        assigned: false,
        worker: "",
        associatedProgram: "Clozapine",
    },
    {
        task: "Project 2",
        taskID: "project2",
        score: 7,
        assigned: false,
        worker: "",
        associatedProgram: "Clozapine",
    },
    {
        task: "Project 3",
        taskID: "project3",
        score: 7,
        assigned: false,
        worker: "",
        associatedProgram: "Clozapine",
    },
    {
        task: "Project 4",
        taskID: "project4",
        score: 7,
        assigned: false,
        worker: "",
        associatedProgram: "Clozapine",
    },
    {
        task: "Aveed",
        taskID: "aveed",
        score: 1,
        assigned: false,
        worker: "",
        associatedProgram: "Aveed",
    },
    {
        task: "Alosetron",
        taskID: "alosetron",
        score: 1,
        assigned: false,
        worker: "",
        associatedProgram: "Alosetron",
    },
    {
        task: "Bosentan",
        taskID: "bosentan",
        score: 1,
        assigned: false,
        worker: "",
        associatedProgram: "Bosentan",
    },
    {
        task: "Nulojix",
        taskID: "nulojix",
        score: 1,
        assigned: false,
        worker: "",
        associatedProgram: "Nulojix",
    },
    {
        task: "Xiaflex",
        taskID: "xiaflex",
        score: 1,
        assigned: false,
        worker: "",
        associatedProgram: "Xiaflex",
    },

];