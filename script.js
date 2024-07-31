let cellEls = document.querySelectorAll(".cell")
const rbtnEl = document.getElementById("rbtn-el")
const moveEl= document.getElementById("move")
const line = document.getElementById("line");
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")
const c7 = document.getElementById("c7")
const c8 = document.getElementById("c8")
const c9 = document.getElementById("c9")
const winningCombination =[
    [c1, c2, c3], [c4, c5, c6], [c7, c8, c9],
    [c1, c4, c7], [c2, c5, c8], [c3, c6, c9], 
    [c1, c5, c9], [c3, c5, c7] 
]

enabeleClicks()

let firstPlayer = true
let GameOver = false

moveEl.textContent = "Start your Game(X)"

rbtnEl.addEventListener("click", function() {
    clearBackground()
    cellEls.forEach((cellEl) => {
        cellEl.textContent = ""
        cellEl.style.pointerEvents = "auto"
        moveEl.textContent = "Game Restarted"
        enabeleClicks()
        cellEl.classList.remove("o")
        cellEl.classList.remove("x")
        

    })

})

function enabeleClicks() {
cellEls.forEach((cellEl) => {
    cellEl.addEventListener("click", cellClick )
    cellEl.style.pointerEvents = "auto"
        
    })

}
function disabeleClicks() {
    cellEls.forEach((cellEl) => {
        cellEl.removeEventListener("click", cellClick);
        cellEl.style.pointerEvents = "none"
        
    })
}   

function cellClick(event) {
    const cellEl = event.target;
    if (cellEl.textContent === "") {
        cellEl.style.pointerEvents = "none";
        if (firstPlayer === true) {
            cellEl.textContent = "X";
            cellEl.classList.add("x"); 
            moveEl.textContent = "Second player on move (O)";
            firstPlayer = false;
            controlGame();
        } else {
           cellEl.textContent = "O";
            cellEl.classList.add("o"); 
            moveEl.textContent = "First player on move (X)";
            firstPlayer = true;
            controlGame();
        }
    }
}


function checkWinningCombination(player) {

    for(const combination of winningCombination) {
        if(combination.every(cellEl => cellEl.textContent === player)) {
            return combination;

        }
    }
    return null;
}

function controlGame() {
    const winningCombinationX = checkWinningCombination("X");
    const winningCombinationO = checkWinningCombination("O");

    if(winningCombinationX || winningCombinationO) {
        moveEl.textContent = "Game Finished" 
    disabeleClicks()

        if(winningCombinationX) {
            for(const cellEl of winningCombinationX) {
                    cellEl.style.backgroundColor = "#3498dd"
                }
            }
        if(winningCombinationO) {
            for(const cellEl of winningCombinationO) {
                    cellEl.style.backgroundColor = "red"
                    }
                }
        }
        }
        function clearBackground() {
            cellEls.forEach((cellEl) => {
                cellEl.style.backgroundColor = "#eee"; 
            });
        }
        