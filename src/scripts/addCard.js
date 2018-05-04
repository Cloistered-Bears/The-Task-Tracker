const getData = require("./localStorageLoad")
const cardGenerator = require("./cardObject")
const idMaker = require("./idGenerator")
const DragDropManager = require("./dropFunction")
const getArchiveData = require("./loadArchiveData")
const showCard = require("./createCard")

const todoSection = document.querySelector(".todoSection")
const inputName = document.querySelector(".inputName")
const inputDescription = document.querySelector(".inputDescription")
const inputDueDate = document.querySelector(".inputDueDate")
const submitButton = document.querySelector(".submitButton")

const taskArray = getData()

const addCard = () => {
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

                    const taskName = document.createElement("h2")
                    taskName.classList = "task-name"
                    taskName.textContent = inputName.value
                    card.appendChild(taskName)
                    const taskDescription = document.createElement("p")
                    taskDescription.classList = "task-description"
                    taskDescription.textContent = inputDescription.value
                    card.appendChild(taskDescription)
                    const taskDueDate = document.createElement("p")
                    taskDueDate.classList = "task-dueDate"
                    taskDueDate.textContent = inputDueDate.value
                    card.appendChild(taskDueDate)

    })

}
addCard()
module.exports = addCard