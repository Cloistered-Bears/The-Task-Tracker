// Installed notie notification package.  This allows it to be called for alerts
const notie = require("notie")
const getData = require("./localStorageLoad")
const getArchiveData = require("./loadArchiveData")

// changes background color of cards when moved to Doing and Done columns
function todoBackground(data, section) {
    const card = document.querySelector(`#${data}`)
    const lane = section.id
    switch (lane) {
        case "doing":
        card.classList.add("redBackground")
        card.classList.remove("yellowBackground")
        break;
        case "done":

        card.classList.add("yellowBackground")
        card.classList.remove("redBackground")
        
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
                const archiveArray = getArchiveData()
                const taskArray = getData()
                $(".card-section").remove()
                const taskName = event.target.parentNode.querySelector(".task-name").textContent
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
                    // Does not allow cards to be dropped into To Do column
                    if (e.target.id !== "todo") {
                        e.preventDefault()

                    // Determine what's being dropped
                    const data = e.dataTransfer.getData("text")
                    
                    // Append card to target component as child
                    // TODO: This should only happen if the target has no children nodes
                     // TODO: This should not happen if the target is another stage card
                    target.appendChild(document.getElementById(data))
                    todoBackground(data, target)
                } else {
                    // displays notie alert when card is moved back into To Do Column
                    notie.alert({ type: 3, text: "", time: 2 }) // Hides after 2 seconds
                }}
            })
        }
    }
})

DragDropManager.init()


module.exports = DragDropManager