document.getElementById("submit").onclick = function(){

    let name = document.getElementById("iname").value;
    let age = Number(document.getElementById("iage").value);

    document.getElementById("oname").textContent = `Your name is ${name}`;
    document.getElementById("oage").textContent = `You are ${age} years old. In two years you will be ${age+2} years old.`;

}