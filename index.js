let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

let count = 0
let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    
    total += count
    totalEl.textContent = total
    
    let countStr = count + " - "
    saveEl.textContent += countStr
    
    count = 0
    countEl.textContent = 0
    
}

function reset() {
    
    count = 0
    countEl.textContent = 0
    
    total = 0
    totalEl.textContent = 0
    
    saveEl.textContent = "Saved tallies: "
}

// TTD:

// - Add reset() function. DONE.

// - Is the total button really necessary? NOPE!
// - Shouldn't I just keep a running total (or sum) that updates when I press the save button
// (instead of having to press the total button)? YES!
// - Ask for opinion. DONE.

// function total() {
//     totalEl.textContent = sum
// }