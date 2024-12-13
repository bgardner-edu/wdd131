let quotes = loadQuotes();
displayQuotes();

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
    const title = document.getElementById("quotes_list");

    tbody.innerHTML = "";

    if(quotes.length > 0 ){
        title.style.display = "none";
    }

    quotes.forEach(quote => {
        let permit = quote['permit'] || "No";
        const row = tbody.insertRow();
        row.insertCell().textContent = `${quote['fname']} ${quote['lname']}`;
        row.insertCell().textContent = `${quote['phone']}`;
        row.insertCell().textContent = `${quote['type']}`;
        row.insertCell().textContent = `${quote['completeDate']}`;  
        row.insertCell().textContent = `${permit}`; 
    });
}