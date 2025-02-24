document.getElementById('calculate').addEventListener('click', function() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);

    if (isNaN(originalPrice) || isNaN(sellingPrice) || originalPrice <= 0 || sellingPrice < 0) {
        alert('Please enter valid prices.');
        return;
    }

    const discountPercentage = ((originalPrice - sellingPrice) / originalPrice) * 100;
    document.getElementById('result').innerText = `Discount: ${discountPercentage.toFixed(2)}%`;
});
