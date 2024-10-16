function clearDisplay() {
    let displayValue = document.getElementById("Display");
    displayValue.value = ''; 
}
function deleteone() {
    let deleteoneValue = document.getElementById("Display");
    deleteoneValue.value = deleteoneValue.value.slice(0, -1); 
}
function result(){
    let result = document.getElementById("Display");
    result.value=eval(result.value);
}