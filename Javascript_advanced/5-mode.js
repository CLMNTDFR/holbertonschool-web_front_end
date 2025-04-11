function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color
    }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black")

    const paragraph = document.createElement("p");
    paragraph.innerText = "Welcome Holberton!";
    document.body.appendChild(paragraph);
    
    const spookyButton = document.createElement("button");
    spookyButton.innerHTML = "Spooky";
    document.body.appendChild(spookyButton);

    const darkButton = document.createElement("button");
    darkButton.innerHTML = "Dark mode";
    document.body.appendChild(darkButton);

    const screamButton = document.createElement("button");
    screamButton.innerHTML = "Scream mode";
    document.body.appendChild(screamButton);

    spookyButton.addEventListener('click', spooky);
    darkButton.addEventListener('click', darkMode);
    screamButton.addEventListener('click', screamMode);
}

main();