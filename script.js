function calculate() {
    const xMin = parseFloat(document.getElementById('xMin').value);
    const xMax = parseFloat(document.getElementById('xMax').value);
    const step = parseFloat(document.getElementById('step').value);

    if (isNaN(xMin) || isNaN(xMax) || isNaN(step) || step <= 0) {
        alert('Будь ласка, введіть коректні значення.');
        return;
    }

    const resultsTableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    resultsTableBody.innerHTML = '';

    for (let x = xMin; x <= xMax; x += step) {
        let U;
        if (x < 2) {
            U = Math.sin(x) + Math.tan(x);
        } else if (x === 2) {
            U = Math.pow(x, 2) + 5 * Math.pow(x, 3);
        } else {
            U = Math.cbrt(Math.pow(x, 3));
        }

        const row = resultsTableBody.insertRow();
        const cellX = row.insertCell(0);
        const cellU = row.insertCell(1);
        cellX.textContent = x.toFixed(2);
        cellU.textContent = U.toFixed(5);
    }
}
