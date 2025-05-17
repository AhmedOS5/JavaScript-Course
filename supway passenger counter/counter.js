let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(saveEl)

console.log(countEl)
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + ' - '
    saveEl.innerText += countStr
    saveEl.textContenttStr
    countEl.textContent = 0
    count = 0
}
