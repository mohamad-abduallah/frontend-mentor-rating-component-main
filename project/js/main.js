function submitRating() {
    const rating = document.querySelector('input[name="rating"]:checked');
    const printRating = document.getElementById('after-rate');
    const beforeRate = document.getElementById('before-rate');
    const selectedRatingText = document.getElementById('selectedRating');
    const url = window.location.href;

    if (rating) {
        const selectedRating = rating.value;
        selectedRatingText.textContent = selectedRating;
        setTimeout(() => {
            printRating.style.display = 'flex';},
            250);
        beforeRate.style.display = 'none';
    } else {
        printRating.style.display = 'none';
        beforeRate.style.display = 'block';
    }
}