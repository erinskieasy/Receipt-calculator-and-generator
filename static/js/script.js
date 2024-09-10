// Function to get the current date in the format: Day, Month Date, Year
function getCurrentDate() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const now = new Date();
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    
    return `${day}, ${month} ${date}, ${year}`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Set the current date in the date span
    document.getElementById('date').textContent = getCurrentDate();

    const form = document.getElementById('receipt-form');
    const receipt = document.getElementById('receipt');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const numBoxes = parseInt(document.getElementById('num-boxes').value);
        const prevBalance = parseFloat(document.getElementById('prev-balance').value);
        const buyRate = parseFloat(document.getElementById('buy-rate').value);
        const sellRate = parseFloat(document.getElementById('sell-rate').value);

        const amount = numBoxes * buyRate;
        const outstandingBalance = prevBalance - amount;
        const newBalance = numBoxes * sellRate;
        const totalBalance = outstandingBalance + newBalance;

        document.getElementById('amount').textContent = amount.toFixed(2);
        document.getElementById('delivered').textContent = numBoxes + ' boxes';
        document.getElementById('outstanding-balance').textContent = outstandingBalance.toFixed(2);
        document.getElementById('new-balance').textContent = newBalance.toFixed(2);
        document.getElementById('total-balance').textContent = totalBalance.toFixed(2);

        receipt.style.display = 'block';
    });
});
