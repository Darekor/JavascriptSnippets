const input = document.getElementById("input");
const isetf = document.getElementById("eagletofield");
const isfte = document.getElementById("fieldtoeagle");
const output = document.getElementById("output");

function convert(){

    if (isetf.checked){
        output.textContent = `There are ${(Number(input.value)*0.9/110).toFixed(2)} footbal fields in ${Number(input.value)} bald eagles. `;
    }

    else if(isfte.checked){
        output.textContent = `There are ${(Number(input.value)*110/0.9).toFixed(2)} bald eagles in ${Number(input.value)} footbal fields. `;
    }

    else{
        output.textContent = "Pick a conversion type. "
    }

    output.textContent += "God bless America!"
}