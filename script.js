window.onload = () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";

            document.getElementById("website").style.opacity = "1";

        }, 800);

    }, 2000);

};



// Section changer

function nextSection(id) {

    document.querySelectorAll(".section").forEach(section => {

        section.classList.add("hidden");

    });


    document.getElementById(id).classList.remove("hidden");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



// Floating hearts generator

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";


    document.querySelector(".hearts").appendChild(heart);



    setTimeout(() => {

        heart.remove();

    },8000);

}


setInterval(createHeart,500);



// YES button

document.getElementById("yesBtn").onclick = () => {

    alert("Thank you for forgiving me ❤️ You mean everything to me 🥺");

};


// Playful NO button

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

});



// Better YES celebration

document.getElementById("yesBtn").onclick = () => {

    createConfetti();

    setTimeout(() => {

        document.querySelector(".glass-card h2").innerHTML =
        "YAYYY ❤️🥺";

        document.querySelector(".glass-card p")?.remove();

        alert(
        "Thank you for forgiving me ❤️\nYou are my favorite person."
        );

    },500);

};



// Confetti effect

function createConfetti(){

    for(let i = 0; i < 100; i++){

        const confetti = document.createElement("div");

        confetti.innerHTML = "💗";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = 
        (10 + Math.random()*20) + "px";

        confetti.style.animation =
        "fall 3s linear forwards";


        document.body.appendChild(confetti);


        setTimeout(()=>{

            confetti.remove();

        },3000);

    }

}
