const ifield = document.getElementById("inputstr")
const confbutton = document.getElementById("confbutton")
const output = document.getElementById("out")

confbutton.onclick = function(){
    let string = ifield.value;
    let strlen = string.length;
    let spaces = string.includes(" ");
    let first = string.charAt(0);
    let last = string.charAt(strlen-1);

    output.textContent = `Your string has a length of ${strlen}. `
    if (strlen>5){
        output.textContent += `That's a pretty long string you've got there! `
    }
    else{
        output.textContent += `No need to be ashamed of such a short string! `
    }
    if (spaces){
        output.textContent += `Your string has whitespaces. `
    }
    else{
        output.textContent += `Your string has no whitespaces. `
    }
    output.textContent += `Your string starts with "${first}" and ends with  "${last}".`
}