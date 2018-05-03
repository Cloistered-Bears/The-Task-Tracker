const taskArray = require("./localStorageLoad")
const cardGenerator = require("./cardObject")
const idMaker = require("./idGenerator")
const DragDropManager = require("./dropFunction")

const todoSection = document.querySelector(".todoSection")
const inputName = document.querySelector(".inputName")
const inputDescription = document.querySelector(".inputDescription")
const inputDueDate = document.querySelector(".inputDueDate")
const submitButton = document.querySelector(".submitButton")

// Creates card
const showCard = () => {
    submitButton.addEventListener("click", function () {
        taskArray.push(cardGenerator(inputName.value, inputDescription.value, inputDueDate.value))
        localStorage.setItem("taskArray", JSON.stringify(taskArray))

        let card = document.createElement("section")
        card.className = "stage card-section"
        card.setAttribute("id", `card-${idMaker.next().value}`);
        card.draggable = "true"

        // Gain reference of item being dragged
        card.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.id)
        }
        todoSection.appendChild(card)

        // creates header "Task Name" element for card
        const taskName = document.createElement("h2")
        taskName.classList = "task-name"
        taskName.textContent = taskArray[taskArray.length - 1].taskName
        card.appendChild(taskName)

        // creates paragraph "Task Description" element for card
        const taskDescription = document.createElement("p")
        taskDescription.classList = "task-description"
        taskDescription.textContent = taskArray[taskArray.length - 1].taskDescription
        card.appendChild(taskDescription)

        // creates paragraph "Task Due Date" element for due date
        const taskDueDate = document.createElement("p")
        taskDueDate.classList = "task-dueDate"
        taskDueDate.textContent = taskArray[taskArray.length - 1].dueDate
        card.appendChild(taskDueDate)

        //jquery added it reset inputfields
        $("input").val("");

    })
}

showCard()

module.exports = showCard
