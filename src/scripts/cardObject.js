const inputName = document.querySelector(".inputName")
const inputDescription = document.querySelector(".inputDescription")
const inputDueDate = document.querySelector(".inputDueDate")

// Factory function to generate cards
const cardGenerator = function() {
    return Object.create(null, {
    taskName: {
        value: "inputName.value",
        enumerable: true,
        writable: true
    },
    taskDescription: {
        value: inputDescription.value,
        enumerable: true,
        writable: true
    },
    dueDate: {
        value: inputDueDate.value,
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
taskArray.push(newCard)