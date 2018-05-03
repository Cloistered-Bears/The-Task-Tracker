const archiveArray = require("./loadArchiveData")
const taskArray = require("./localStorageLoad")
const idMaker = require("./idGenerator")

function todoBackground(data, section) {
    const card = document.querySelector(`#${data}`)
    const lane = section.id
    switch (lane) {
        case "doing":
            card.classList.add("redBackground")
            card.classList.remove("yellowBackground")
            $(".archive").remove();
            break;
        case "done":
            card.classList.add("yellowBackground")
            card.classList.remove("redBackground")
            const archiveButton = () => {
                const button = document.createElement("button")
                button.classList = "archive"
                button.textContent = "Archive"
                card.appendChild(button)
            }
            archiveButton()
            //Deletes the card when you click the archive button. Then it will move the card information into the archive array
            document.querySelector(".archive").addEventListener("click", function(){
                $(".card-section").remove()
                const taskName = event.target.parentNode.querySelector(".task-name").textContent
                console.log(taskName)
                const findTask = taskArray.find(t => t.taskName === taskName)
                archiveArray.push(findTask)
                localStorage.setItem("archiveArray", JSON.stringify(archiveArray))
            });
            break;
    }
}

const DragDropManager = Object.create(null, {
    init: {
        value: () => {
            const stages = document.querySelectorAll(".stage")

            const targets = document.querySelectorAll(".target")

            targets.forEach(target => {
                // Dragover not supported by default. Turn that off.
                target.ondragover = e => e.preventDefault()

                target.ondrop = (e) => {
                    // Enabled dropping on targets
                    e.preventDefault()

                    // Determine what's being dropped
                    const data = e.dataTransfer.getData("text")
                    // Append card to target component as child
                    // TODO: This should only happen if the target has no children nodes
                    // TODO: This should not happen if the target is another stage card
                    target.appendChild(document.getElementById(data))
                    todoBackground(data, target)
                }
            })
        }
    }
})

DragDropManager.init()


module.exports = DragDropManager