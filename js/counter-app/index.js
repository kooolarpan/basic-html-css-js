let counter = 0;

const countValue = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener('click', () => {
    counter++;
    updateCountValue();
})
decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }
    updateCountValue();
})
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCountValue();
})

function updateCountValue() {
    countValue.textContent = counter;
}