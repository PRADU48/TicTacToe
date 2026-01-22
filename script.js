document.addEventListener("DOMContentLoaded", () => {
    const cells = [
        document.getElementById("cell1"),
        document.getElementById("cell2"),
        document.getElementById("cell3"),
        document.getElementById("cell4"),
        document.getElementById("cell5"),
        document.getElementById("cell6"),
        document.getElementById("cell7"),
        document.getElementById("cell8"),
        document.getElementById("cell9"),
    ]

    function checkWin() {
        if (
            cells[0].textContent.trim() === "X" &&
            cells[4].textContent.trim() === "X" &&
            cells[8].textContent.trim() === "X"
        ) {
            alert("You won")
        }
    }

    checkWin() // ← this will trigger immediately for your preset Xs
})