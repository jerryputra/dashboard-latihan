function tambahData(){
    var flight = document.getElementById('fli').value;
    var flt = document.getElementById('flt').value;
    var reg = document.getElementById('reg').value;
    var date = document.getElementById('date').value;
    var dep = document.getElementById('dep').value;


    var table = document.getElementById('tabelData').getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.rows.length);
            
     // Tambahkan sel-sel baru ke dalam baris
     var cell1 = newRow.insertCell(0);
     var cell2 = newRow.insertCell(1);
     var cell3 = newRow.insertCell(2);
     var cell4 = newRow.insertCell(3);
     var cell5 = newRow.insertCell(4);

    cell1.innerHTML = flight;
    cell2.innerHTML = flt;
    cell3.innerHTML = reg;
    cell4.innerHTML = date;
    cell5.innerHTML = dep;

    
}