const tekst = document.getElementById('Tekst');
const inkrementujPrzycisk = document.getElementById('Inkrementuj');
const zmienKolorPrzycisk = document.getElementById('ZmienKolor');

inkrementujPrzycisk.addEventListener('click', () => {
    tekst.textContent = parseInt(tekst.textContent) + 1;
});

zmienKolorPrzycisk.addEventListener('click', () => {
    tekst.classList.toggle('red');
});
