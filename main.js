const form = document.querySelector('.sign-up');
const invalid = document.querySelector('.invalid');
const card = document.querySelector('.news-body')
const cards = document.querySelector('.cards')
form.addEventListener('submit', e =>{
    e.preventDefault();
    const validate = form.email.value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(pattern.test(validate)){
        card.classList.add('hide');
        cards.classList.remove('hide');
    }else{
        invalid.textContent = 'Invalid email address';
    }
})