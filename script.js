var books = [];
function mainFunction(e) {
    //to stop form from resubmitting
    e.preventDefault(); 
    var indexBook = books.length;
    var noteBasedInStatus =reportNote(document.getElementById('status').value);

    var book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        addDate: document.getElementById('addDate').value,
        dueDate: document.getElementById('dueDate').value,
        status: document.getElementById('status').value,
        note: noteBasedInStatus,
    }

    books.push(book);

    document.forms[0].reset();

    //displaying elements on table
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

    var valuesRate = ["--", "1", "2", "3", "4", "5"];
 
    var selectRate = document.createElement("select");
    selectRate.name = "note"+indexBook;
    selectRate.id = "note"+indexBook;
 
    for (const val of valuesRate)
    {
        var optionRate = document.createElement("option");
        optionRate.value = val;
        optionRate.text = val.charAt(0).toUpperCase() + val.slice(1);
        selectRate.appendChild(optionRate);
    }
 
    var label = document.createElement("label");
    label.htmlFor = "rate";

    var cell6 = row.insertCell(5);

    selectRate.value = noteBasedInStatus;
    cell6.appendChild(selectRate);

    var values = ["Want to Read", "Read", "Reading"];
 
    var select = document.createElement("select");
    select.name = "status"+indexBook;
    select.id = "status"+indexBook;
 
    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.htmlFor = "status";

    var cell7 = row.insertCell(6);
    for (var i=0; i<books.length; i++) {
        if (books[i].status == p.status) {
            select.value = books[i].status;
        }
    }

    select.onchange = function() {myFunction(indexBook)};

    cell7.appendChild(select);

    myFunction(indexBook);
}

function myFunction(teste) {
    console.log(document.getElementById("status"+teste).value);
    if (document.getElementById("status"+teste).value == "Read") {
        document.getElementById("note"+teste).value = "1";
        document.getElementById("note"+teste).removeAttribute("disabled");
    } else {
        document.getElementById("note"+teste).value = "--";
        document.getElementById("note"+teste).setAttribute("disabled", "disabled");
    }
}

function reportNote(status) {
    let note = '';

    if (status == 'Read') {
        note = 1
    } else {
        note = '--'
    }

    return note;
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