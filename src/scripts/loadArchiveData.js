const getArchiveData = () => {
    let archiveArray = JSON.parse(localStorage.getItem("archiveArray"))
    if (archiveArray === null) {
        archiveArray = []
    }
    return archiveArray
}

module.exports = getArchiveData