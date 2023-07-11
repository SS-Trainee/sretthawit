let bigdata = []

addData = () =>  {
    var getnumber = document.getElementById("numberInput").value;
    var getname = document.getElementById("nameInput").value;
    var getsurname = document.getElementById("surnameInput").value;
    var getemail = document.getElementById("emailInput").value;
    
    bigdata.push({no: getnumber , name: getname,surname:getsurname, email: getemail})
    let htmlStr = ""
    bigdata.forEach((data) => {
        htmlStr += `<tr>
                    <td>${data.no}</td>
                    <td>${data.name}</td>
                    <td>${data.surname}</td>
                    <td>${data.email}</td>
                    <td>
                    <button onclick="deleteRow()" > Delete </button>
                    </td>
                    </tr>`
    })
    document.getElementById('myTable').innerHTML = htmlStr   
    favDialog.close();
    document.getElementById("form").reset();
}

deleteRow = () =>  {
    bigdata.pop({no: getnumber , name: getname,surname:getsurname, email: getemail})
    let htmlStr = ""
    bigdata.forEach((data) => {
        htmlStr += `<tr>
                    <td>${data.no}</td>
                    <td>${data.name}</td>
                    <td>${data.surname}</td>
                    <td>${data.email}</td>
                    <td>
                    <button onclick="deleteRow()" > Delete </button>
                    </td>
                    </tr>`
    })
    document.getElementById('myTable').innerHTML = htmlStr   

}

    





