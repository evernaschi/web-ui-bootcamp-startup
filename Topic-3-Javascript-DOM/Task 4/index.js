/*
  Take rows from HTML Input and print the resulting HTML Table
*/

function makeTable() {
  let rows = document.getElementById("inp").value;
  rows = rows.split(";");

  let table = document.createElement('table');
  table.style.width = '100%';
  table.setAttribute('border', '1');
  table.style.borderCollapse = 'collapse';
  table.style.padding = '2%';

  let tr = document.createElement('tr');
  rows[0].split(",").forEach(title=> {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(title));
    tr.appendChild(th);
  })
  table.appendChild(tr);

  // Remove titles
  rows.shift();

  rows.forEach(row=> addRow(row.split(","),table));

  //section.appendChild(table);
  document.getElementById("result").innerHTML = table.outerHTML;
}

/*
  Take a row and a table and return the table with the new row appended
*/

function addRow(row, table) {
  let tr = document.createElement('tr');
  row.forEach(value=> {
    let td = document.createElement('td');
    td.appendChild(document.createTextNode(value));
    tr.appendChild(td);
  })
  table.appendChild(tr);

}