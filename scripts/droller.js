const sizefield = document.getElementById("dsize");
const resfield = document.getElementById("dresult");
const rollbutton = document.getElementById("roll");

rollbutton.onclick = function(){
    let res = Math.floor(Math.random() * (Math.max(Number(sizefield.value),1))) + 1;

    resfield.textContent = `You've rolled a ${res}. Lucky you! `;
}

