function tambahData() {
  var flight = document.getElementById("id_flight").value;
  var flt = document.getElementById("id_flt").value;
  var reg = document.getElementById("id_reg").value;
  var date = document.getElementById("id_date").value;
  var dep = document.getElementById("id_dep").value;

  document.getElementById("tabel-main");
  var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = flight;
  cell2.innerHTML = flt;
  cell3.innerHTML = reg;
  cell4.innerHTML = date;
  cell5.innerHTML = dep;

  // Membersihkan formulir setelah menambahkan data
  document.getElementById("myForm").reset();
}
