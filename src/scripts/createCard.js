const taskArray = require("./localStorageLoad")
const cardGenerator = require("./cardObject")

const todoSection = document.querySelector(".todoSection")
const inputName = document.querySelector(".inputName")
const inputDescription = document.querySelector(".inputDescription")
const inputDueDate = document.querySelector(".inputDueDate")
const submitButton = document.querySelector(".submitButton")

const showCard = () => {
    submitButton.addEventListener("click", function () {
        taskArray.push(cardGenerator(inputName.value, inputDescription.value, inputDueDate.value))
        localStorage.setItem("taskArray", JSON.stringify(taskArray))

        let card = document.createElement("section")
        card.className = "stage card-section"
        card.setAttribute("id", "card1")
        card.draggable = "true"
  
          // Gain reference of item being dragged
        card.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        todoSection.appendChild(card)
        const taskName = document.createElement("h2")
        taskName.classList = "task-name"
        taskName.textContent = taskArray[taskArray.length - 1].taskName
        card.appendChild(taskName)
        const taskDescription = document.createElement("p")
        taskDescription.classList = "task-description"
        taskDescription.textContent = taskArray[taskArray.length - 1].taskDescription
        card.appendChild(taskDescription)
        const taskDueDate = document.createElement("p")
        taskDueDate.classList = "task-dueDate"
        taskDueDate.textContent = taskArray[taskArray.length - 1].dueDate
        card.appendChild(taskDueDate)

        //jquery added it reset inputfields
        $("input").val("");


        
    })
}



const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
  
        const targets = document.querySelectorAll(".target")
  
        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault()
  
          target.ondrop = e => {
            // Enabled dropping on targets
            e.preventDefault()
  
            // Determine what's being dropped
            const data = e.dataTransfer.getData("text")
  console.log(e.target)
  console.log(data)
            // Append card to target component as child
            // TODO: This should only happen if the target has no children nodes
            // TODO: This should not happen if the target is another stage card
            e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
          }
        })
      }
    }
  })
  
  DragDropManager.init()


showCard()
module.exports = showCard