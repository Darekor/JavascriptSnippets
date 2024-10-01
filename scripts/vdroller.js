function roll(){

    const pool = Number(document.getElementById("input").value);
    const textres = document.getElementById("textres");
    const visres = document.getElementById("visres");
    
    visres.innerHTML = ``;

    if (pool===0){
        textres.textContent = "Input a correct number of dice";
    }

    else
    {
        textres.textContent = "You've rolled: "
        for (let i=0; i<pool;i++)
            {
                let res = Math.floor(Math.random()*6) + 1;
        
                textres.textContent += res + ", ";
                visres.innerHTML += `<img src="../media/dice-${res}.svg" alt="Dice ${res}" width="128">`;
            }
        textres.textContent = textres.textContent.slice(0,-2);
    }


}