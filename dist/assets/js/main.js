
const rating = document.querySelectorAll('.rate');
const printRating = document.getElementById('after-rate');
const beforeRate = document.getElementById('before-rate');
const btn = document.querySelector('.submit-rate');
const selectedRatingText = document.getElementById('selectedRating');
const relatedBtn = document.querySelector('.related-btn');

rating.forEach(item => {
    btn.disabled = true;
    btn.classList.add('notSelectedBtn');
    item.addEventListener('click', () => {
        rating.forEach(item => {
            item.classList.remove('selected');
            btn.classList.remove('notSelectedBtn');
            btn.disabled = false;
        });
        btn.addEventListener('click' ,() => {
            printRating.style.display = 'flex'
            beforeRate.style.display = 'none';
            selectedRatingText.textContent =  item.innerHTML;

            relatedBtn.addEventListener('click' ,() => {
                printRating.style.display = 'none'
                beforeRate.style.display = 'block';
                item.classList.remove('selected');
                btn.disabled = true;
                btn.classList.add('notSelectedBtn');
            });
        });

        item.classList.add('selected');
    });
});


