window.addBalloon = function () {
    console.log("Función addBalloon ejecutada");
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = getRandomColor();

    balloon.onclick = () => balloon.remove();
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 10000);
};

window.addFlower = function () {
    console.log("Función addFlower ejecutada");
    const flower = document.createElement("div");
    flower.className = "flower";

    // Posición inicial desde los lados
    const startFromLeft = Math.random() > 0.5;
    flower.style.top = Math.random() * 100 + "vh";
    flower.style.left = startFromLeft ? "-60px" : "100vw";
    flower.style.animationDirection = startFromLeft ? "normal" : "reverse";
    flower.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/4052/4052984.png')";

    flower.onclick = () => flower.remove();
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 10000);
};

window.addCake = function () {
    console.log("Función addCake ejecutada");
    const cake = document.createElement("div");
    cake.className = "cake";
    cake.style.left = Math.random() * 100 + "vw";
    cake.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/3468/3468333.png')";

    cake.onclick = () => cake.remove();
    document.body.appendChild(cake);

    setTimeout(() => cake.remove(), 10000);
};

// Función para generar colores aleatorios
function getRandomColor() {
    const colors = ["#ff0080", "#ff66b2", "#ff99cc", "#ffccf2", "#e60073"];
    return colors[Math.floor(Math.random() * colors.length)];
}
