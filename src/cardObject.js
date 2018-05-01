const cardData = Object.create(null, {
    taskName: {
        value: "",
        enumerable: true,
        writable: true
    },
    taskDescription: {
        value: "",
        enumerable: true,
        writable: true
    },
    dueDate: {
        value: "",
        enumerable: true,
        writable: true
    },
    status: {
        value: "",
        enumerable: true,
        wrtiable: true
    },
    category: {
        value: "",
        enumerable: true,
        writable: true
    },
    started: {
        value: "",
        enumerable: true,
        writable: true
    },
    finished: {
        value: "",
        enumerable: true,
        writable: false
    },
    // avgTime function will have to be added later - It will calculate how long a task took to complete
    avgTime: function () {
    
    }
})