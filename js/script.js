function onFormSubmit(){
    //this is to retrieve values from the input

    // caling function readFormData() and saving value in var

    var formData=readFormData();

    insertNewRecord(formData);
}

function readFormData()
{
    var formData={};
    formData["f_name"]=document.getElementById("f_name").value;
    formData["l_name"]=document.getElementById("l_name").value;
    formData["email"]=document.getElementById("email").value;

    return formData; 
}

// making new function to insert the record in the table

function insertNewRecord(data)
{

    var table =document.getElementById("employeeList").getElementsByTagName('tbody')[0];

    // the length of table will be incremented by 1 on new record insertion

    var newRow=table.insertRow(table.lenght);

    cell1=newRow.insertCell(0);
    cell1.innerHTML = data.f_name;

    cell2=newRow.insertCell(1);
    cell2.innerHTML = data.l_name;


    cell3=newRow.insertCell(2);
    cell3.innerHTML = data.email;

    // for edit and delete button

    cell4=newRow.insertCell(3);
    cell4.innerHTML = `<a>EDIT</a> 
                        <a>DELETE</a>`;
}

