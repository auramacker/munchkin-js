function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getDiceNumber(){
    return getRandomInt(1, 6)
}
