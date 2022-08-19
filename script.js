
var books = [];
function mainFunction(e) {
    //to stop form from resubmitting
    e.preventDefault(); 

    var book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        addDate: document.getElementById('addDate').value,
        dueDate: document.getElementById('dueDate').value,
        note: document.getElementById('note').value,
        status: document.getElementById('status').value  
    }
    books.push(book);
    //used to convert result to string
    //var myJSON = JSON.stringify(books);

    document.forms[0].reset();

    //display in Final Obejct div 
    //document.getElementById("fObject").innerHTML = myJSON;

    //display elements on table
    var p = books[books.length-1]; //last item in the array
    var table = document.getElementById("tableID");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.appendChild(element1);
    var cell2 = row.insertCell(1);
    cell2.innerHTML += p.title;
    var cell3 = row.insertCell(2);
    cell3.innerHTML += p.author;
    var cell4 = row.insertCell(3);
    cell4.innerHTML += p.addDate;
    var cell5 = row.insertCell(4);
    cell5.innerHTML += p.dueDate;
    var cell6 = row.insertCell(5);
    cell6.innerHTML += p.note;
    var cell7 = row.insertCell(6);
    cell7.innerHTML += p.status;

}

function deleteRow() {
    try {
        var table = document.getElementById("tableID");
        var rowCount = table.rows.length;

        for(var i=0; i<rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if(null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }

    } catch(e) {
        alert(e);
    }
}