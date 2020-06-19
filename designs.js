// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!

    // Getting the grid height value from user
    const gridHeight = document.getElementById('inputHeight').value;
    // Getting the grid width value from user
    const gridWidth = document.getElementById('inputWidth').value;
    // Canvas table vairable
    const tableCanvas = document.getElementById('pixelCanvas');

    // Reset values to start
    tableCanvas.innerHTML = '';

    // Loop for inserting the rows
    for (let i = 0; i < gridHeight; i++) {
        let r = tableCanvas.insertRow(i);
        // Nested loop for inserting the cells
        for (let j = 0; j < gridWidth; j++) {
            let c = r.insertCell(j);
            // Action for the cells
            c.addEventListener('click', function(action) {
                // If the cell was pressed, the background color will change to the selected color
                action.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        }
    }
    
}
// Action for the submit button
document.getElementById('sizePicker').addEventListener('submit', function (action) {
    action.preventDefault();
    makeGrid(); // recursive call for the funtion
});