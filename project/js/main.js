
const rating = document.querySelectorAll('.rate');
const printRating = document.getElementById('after-rate');
const beforeRate = document.getElementById('before-rate');
const  btn = document.querySelector('.submit-rate');
const selectedRatingText = document.getElementById('selectedRating');
const relatedBtn = document.querySelector('.related-btn');

rating.forEach(item => {
    item.addEventListener('click', () => {
        rating.forEach(item => {
            item.classList.remove('selected');
            btn.classList.remove('selectedBtn');
            btn.disabled = false;
        });
        btn.addEventListener('click' ,() => {
            printRating.style.display = 'flex'
            beforeRate.style.display = 'none';

            selectedRatingText.textContent =  item.innerHTML;
        });

        relatedBtn.addEventListener('click' ,() => {
            printRating.style.display = 'none'
            beforeRate.style.display = 'block';

            item.classList.remove('selected');
            btn.disabled = true;
            btn.classList.add('selectedBtn');
        });
        item.classList.add('selected');
    });
    btn.classList.add('selectedBtn');
});


