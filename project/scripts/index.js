const year = document.getElementById("current_year");
const lastModified = document.getElementById("last_modified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span>Last Modified: ${new Date(document.lastModified)}</span>`;
