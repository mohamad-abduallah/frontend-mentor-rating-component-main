function submitRating() {
    const rating = document.querySelector('input[name="rating"]:checked');
    const printRating = document.getElementById('after-rate');
    const beforeRate = document.getElementById('before-rate');
    const selectedRatingText = document.getElementById('selectedRating');

    if (rating) {
        const selectedRating = rating.value;
        selectedRatingText.textContent = " " + selectedRating + " ";
        printRating.style.display = 'flex';
        beforeRate.style.display = 'none';
    } else {
        printRating.style.display = 'none';
        beforeRate.style.display = 'block';
    }
}