const getData = () => {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"))
    if (taskArray === null) {
        taskArray = []
    }
    return taskArray
}

module.exports = getData