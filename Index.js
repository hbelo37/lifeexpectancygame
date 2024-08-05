let Remaining = document.getElementById("remain")

function createLabels() {
    const ageLabelsContainer = document.querySelector('.ages');
    const weekLabelsContainer = document.querySelector('.week-labels');

    
    for (let i = 0; i <= 85; i += 1) {
        const ageLabel = document.createElement('div');
        ageLabel.textContent = i;
        ageLabelsContainer.appendChild(ageLabel);
    }

    
    for (let i = 1; i <= 51; i += 1) {
        const weekLabel = document.createElement('div');
        weekLabel.textContent = i;
        weekLabelsContainer.appendChild(weekLabel);
    }
}

function calculateLife() {
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const daysLived = Math.floor((now - dob) / oneDay);
    const daysRemaining = Math.max(0, (85 * 365) - daysLived);
    const weeksLived = Math.floor(daysLived / 7);
    const totalWeeks = 85 * 51;

    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    for (let i = 0; i < totalWeeks; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        if (i < weeksLived) {
            cell.classList.add('lived');
        } else {
            cell.classList.add('remaining');
        }
        grid.appendChild(cell);
    }

    Remaining.textContent = `You have lived ${daysLived} days and have ${daysRemaining} days remaining.`;
}

document.addEventListener('DOMContentLoaded', createLabels);
