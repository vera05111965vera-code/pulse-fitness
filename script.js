// Перемикач цін (Місяць / Рік)
const btnMonth = document.getElementById('btn-month');
const btnYear = document.getElementById('btn-year');
const priceStart = document.getElementById('price-start');
const priceUnlim = document.getElementById('price-unlim');
const pricePro = document.getElementById('price-pro');

btnMonth.addEventListener('click', () => {
    btnMonth.classList.add('active');
    btnYear.classList.remove('active');
    priceStart.textContent = '800 грн /міс';
    priceUnlim.textContent = '1200 грн /міс';
    pricePro.textContent = '2500 грн /міс';
});

btnYear.addEventListener('click', () => {
    btnYear.classList.add('active');
    btnMonth.classList.remove('active');
    priceStart.textContent = '640 грн /міс';
    priceUnlim.textContent = '960 грн /міс';
    pricePro.textContent = '2000 грн /міс';
});

// Відправка форми
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Дякуємо! Ваша заявка прийнята. Менеджер зателефонує вам найближчим часом.');
    this.reset();
});