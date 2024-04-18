const Input = document.getElementById(`Input`);


function DisplayButton(input){
Input.value += input;


 
}

function clearFunction(){

    Input.value = "";


}

function totalResult(){

    Input.value = eval(Input.value);

}