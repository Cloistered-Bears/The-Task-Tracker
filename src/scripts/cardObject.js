const getData = require("./localStorageLoad")

// Factory function to generate cards
const cardGenerator = function(name, description, date) {
    return Object.create(null, {
    taskName: {
        value: name,
        enumerable: true,
        writable: true
    },
    taskDescription: {
        value: description,
        enumerable: true,
        writable: true
    },
    dueDate: {
        value: date,
        enumerable: true,
        writable: true
    },
    status: {
        value: "To Do",
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
        writable: true
    },
    // avgTime function will have to be added later - It will calculate how long a task took to complete
    avgTime: function () {
    
    }
})
}

// Generated cards will be assned to newCard
const newCard = cardGenerator()

// Pushing new cards into the array called taskArray
//taskArray.push(newCard)

module.exports = cardGenerator