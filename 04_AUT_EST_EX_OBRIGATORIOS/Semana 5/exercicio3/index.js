$('#calc').on('click', () =>{
    let numbers = $('#numbers').val();
    let focusNumber = parseInt($('#focusNumber').val());
    let result = $('#result');
    let result2 = $('#result2');
    let realNumbers = JSON.parse("[" + numbers + "]");
    let finalNumbers = realNumbers.sort((a, b) => a - b);
    result.html(`Aqui estão os números ordenados em ordem crescente: ${finalNumbers}`);
    result2.html(`Aqui está a posição do seu número foco: ${findingFocusNumber(focusNumber, realNumbers)}`);
});
function findingFocusNumber(focusNumber, array){
    let position = '';
    for(let i = 0; i < array.length; i++){
        if(array[i] === focusNumber){
            position = array.indexOf(focusNumber);
        }
    }
    return position;
}