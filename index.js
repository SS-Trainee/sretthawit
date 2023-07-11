let dataArray = []

addRow = () => {
    dataArray.push({name: "Sretthawit" , sirname : "Klomkhangploo"})
    calculateArray(dataArray)
}

deleteRow=()=>{
    dataArray.pop()
    calculateArray(dataArray)
}

calculateArray = (array) => {
    let htmlStr = ""
    array.forEach((data) => {
        htmlStr += `<tr>
                    <td>${data.name}</td>
                    <td>${data.sirname}</td>
                    </tr>`
    })
    document.getElementById('myTable').innerHTML = htmlStr
}