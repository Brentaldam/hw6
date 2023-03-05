let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.appendChild(tbody);
document.getElementById('output').appendChild(table);
for (let i = 1; i < 13; i++) {
    let row = document.createElement('tr');
    let row_data_1 = document.createElement('td');
    row_data_1.innerHTML = i;

    row.appendChild(row_data_1);
    tbody.appendChild(row);
    row_data_1.style.border = 'solid 1px black';
    row.style.border = 'solid 1px black';
    row.style.padding = '10px 20px';
    if (i % 4 === 0) {
        row_data_1.style.backgroundColor = 'aqua';
    }

    
}
table.style.textAlign = 'center';
table.style.border = 'solid 1px black';
table.style.borderSpacing = '5';