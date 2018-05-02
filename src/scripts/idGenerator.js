function* idGenerator() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const idMaker = idGenerator();

module.exports = idMaker
