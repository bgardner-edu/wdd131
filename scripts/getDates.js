window.onload = function () {
    const year = document.getElementById("current_year");
    const lastModified = document.getElementById("last_modified");

    // use the date object
    const today = new Date();

    year.innerHTML = `<span>${today.getFullYear()}</span>`;

    lastModified.innerHTML = `<span>Last Modified: ${new Date(document.lastModified)}</span>`;


}

