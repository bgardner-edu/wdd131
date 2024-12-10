const year = document.getElementById("current_year");
const lastModified = document.getElementById("last_modified");
const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

const today = new Date();

let quotes = loadQuotes();
displayQuotes();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span>Last Modified: ${new Date(document.lastModified)}</span>`;


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

function loadQuotes() {
    const q = localStorage.getItem('quotes');
    return JSON.parse(q) || [];
}

function saveQuote() {
    const form = document.getElementById('new_quote')
    const requestFormData = new FormData(form);

    const data = {};
    for (let [key, value] of requestFormData.entries()) {
        data[key] = value;
    }
    quotes.push(data);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    displayQuotes();
}

function displayQuotes() {
    const table = document.getElementById("quotes");
    const tbody = table.getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";

    quotes.forEach(quote => {
        const row = tbody.insertRow();
        row.insertCell().textContent = `${quote['fname']} ${quote['lname']}`;
        row.insertCell().textContent = `${quote['type']}`;
        row.insertCell().textContent = `${quote['completeDate']}`;  
        row.insertCell().textContent = `${quote['description']}`; 
        row.insertCell().textContent = `${quote['permit']}`; 
    });
}