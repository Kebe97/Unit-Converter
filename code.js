const selectFrom = document.getElementById("select-from")
const selectTo = document.getElementById("select-to")
const btnConv = document.getElementById("btn-conv")
const inputText = document.getElementById("input")
const outputEl = document.getElementById("output")
let lenghtMeasure = ["Meter", "Centimeter", "Millimeter", "Kilometer", "Micrometer", "Nanometer", "Mile", "Yard", "Foot", "Inch"]

function selectTagFiller(arr, selectBox){
    let selectList = ""
    for (let i = 0; i < arr.length; i++){
        selectList += `<option value="${arr[i]}">${arr[i]}</option>`
    }
    selectBox.innerHTML = `<option selected disabled>Choose a measure</option> ${selectList}`
    console.log(selectList)
}

selectTagFiller(lenghtMeasure, selectFrom)
selectTagFiller(lenghtMeasure, selectTo)

function valueGiverSelect(select){
    let x = 0
    if (select.value === "Meter"){
        x = 1
    }
    else if (select.value === "Centimeter"){
        x = 100
    }
    else if (select.value === "Millimeter"){
        x = 1000
    }
    else if (select.value === "Kilometer"){
        x = (1/1000)
    }
    else if (select.value === "Micrometer"){
        x = 1000000
    }
    else if (select.value === "Nanometer"){
        x = 1000000000
    }
    else if (select.value === "Mile"){
        x = (1/1609)
    }
    else if (select.value === "Yard"){
        x = 1.094
    }
    else if (select.value === "Foot"){
        x = 3.281
    }
    else if (select.value === "Inch"){
        x = 39.37
    }
    return x
}

function converter(){
    let from = valueGiverSelect(selectFrom)
    let to = valueGiverSelect(selectTo)
    let result = (1/from) * to * inputText.value
    result = result.toFixed(2)
    if (selectTo.value === "Inch"){
    outputEl.innerHTML = `${result} ${selectTo.value}es`
    }else{
    outputEl.innerHTML = `${result} ${selectTo.value}es`    
    }
}

btnConv.addEventListener("click", function(){
    converter()
})
