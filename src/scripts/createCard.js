const getData = require("./localStorageLoad")
const cardGenerator = require("./cardObject")
const idMaker = require("./idGenerator")
const DragDropManager = require("./dropFunction")
const archiveArray = require("./loadArchiveData")
const addCard = require("./addCard")

const todoSection = document.querySelector(".todoSection")
const inputName = document.querySelector(".inputName")
const inputDescription = document.querySelector(".inputDescription")
const inputDueDate = document.querySelector(".inputDueDate")
const submitButton = document.querySelector(".submitButton")

const showCard = () => {
        const taskArray = getData()
                taskArray.forEach(element => {
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
                    taskName.textContent = element.taskName
                    card.appendChild(taskName)
                    const taskDescription = document.createElement("p")
                    taskDescription.classList = "task-description"
                    taskDescription.textContent = element.taskDescription
                    card.appendChild(taskDescription)
                    const taskDueDate = document.createElement("p")
                    taskDueDate.classList = "task-dueDate"
                    taskDueDate.textContent = element.dueDate
                    card.appendChild(taskDueDate)
                })}

                //         //jquery added it reset inputfields
                //         $("input").val("");
                showCard()

                module.exports = showCard