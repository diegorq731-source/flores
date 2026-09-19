const campo = document.getElementById("campo");

for(let i = 0; i < 350; i++){

    const luz = document.createElement("div");

    luz.classList.add("particula");

    const size = Math.random() * 6 + 2;

    luz.style.width = size + "px";
    luz.style.height = size + "px";

    luz.style.left = Math.random() * 100 + "vw";

    luz.style.animationDuration =
        Math.random() * 8 + 6 + "s";

    luz.style.animationDelay =
        Math.random() * 5 + "s";

    campo.appendChild(luz);
}


for(let i = 0; i < 120; i++){

    const flor = document.createElement("div");

    flor.classList.add("flor");

    flor.innerHTML = "🌻";

    flor.style.left =
        Math.random()*100 + "vw";

    flor.style.bottom =
        Math.random()*120 + "px";

    campo.appendChild(flor);
}