const count = localStorage.getItem("count") || 0;

let newCount = JSON.stringify(count + 1);

localStorage.setItem("count", newCount)