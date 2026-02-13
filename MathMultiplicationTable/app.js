const inputValue = document.getElementById('enter-value');
const generateBtn = document.getElementById('btn');
const displayOutput = document.getElementById('display');

function generateTable() {
    const tableValue = Number(inputValue.value);

    // Validation
    if (!tableValue) {
        alert("Please enter a valid number");
        return;
    }

    // Clear previous output
    displayOutput.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `${tableValue} × ${i} = ${tableValue * i}`;
        displayOutput.appendChild(li);
    }
}

generateBtn.addEventListener('click', generateTable);
