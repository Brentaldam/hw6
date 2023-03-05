/* Write a program that shows on the page a list of terms and definitions 
defined in a JavaScript array. */

const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];


let dl = document.createElement('dl');
let tbody = document.createElement('tbody');
dl.appendChild(tbody);
document.getElementById('content').appendChild(dl);
for (let i = 0; i < 4; i++) {
    let row = document.createElement('dt');
    let row_data_1 = document.createElement('dd');
    row.innerHTML = words[i].term;
    row_data_1.innerHTML = words[i].definition;

    row.appendChild(row_data_1);
    tbody.appendChild(row);

    row.style.padding = '10px 20px';
    row.style.fontWeight = 'bold';
}
