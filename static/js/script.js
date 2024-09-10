document.addEventListener('DOMContentLoaded', function() {
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
