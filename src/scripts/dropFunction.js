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