let artefacts = {
    "Diluc": [
        "https://media.discordapp.net/attachments/954708502717272094/954807195382452254/1.png",
        "https://media.discordapp.net/attachments/954708502717272094/954807195642494996/2.png",
        "https://media.discordapp.net/attachments/954708502717272094/954807195994849310/3.png",
        "https://media.discordapp.net/attachments/954708502717272094/954807196284235858/4.png",
        "https://media.discordapp.net/attachments/954708502717272094/954807196573638676/5.png"
    ],
    "Venti": [
        "https://media.discordapp.net/attachments/954708502717272094/954808179223568466/1.png",
        "https://media.discordapp.net/attachments/954708502717272094/954808177663295508/2.png",
        "https://media.discordapp.net/attachments/954708502717272094/954808177914937364/3.png",
        "https://media.discordapp.net/attachments/954708502717272094/954808178632187954/4.png",
        "https://media.discordapp.net/attachments/954708502717272094/954808178854473758/5.png"
    ],
    "Rosalia": [
        "https://media.discordapp.net/attachments/954708502717272094/954809329041703012/1.png",
        "https://media.discordapp.net/attachments/954708502717272094/954809328186036234/2.png",
        "https://media.discordapp.net/attachments/954708502717272094/954809328362213488/3.png",
        "https://media.discordapp.net/attachments/954708502717272094/954809328555159563/4.png",
        "https://media.discordapp.net/attachments/954708502717272094/954809328798412810/5.png"
    ],
    "Bennett": [
        "https://media.discordapp.net/attachments/954708502717272094/954810121316339763/1.png",
        "https://media.discordapp.net/attachments/954708502717272094/954810120418754631/2.png",
        "https://media.discordapp.net/attachments/954708502717272094/954810120649474058/3.png",
        "https://media.discordapp.net/attachments/954708502717272094/954810120838209566/4.png",
        "https://media.discordapp.net/attachments/954708502717272094/954810121064697968/5.png"
    ]
}



let params = new URLSearchParams(document.location.search);
let perso = params.get("perso");
let persospace = perso.replace("_", " ");
let title = document.getElementById("title");
let doctitle = document.getElementsByTagName("title")[0];
doctitle.innerHTML = persospace;
title.innerHTML = `Artefact pour ${persospace}`;
let images = document.getElementsByClassName("art");


for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", artefacts[perso][i]);
}


let left_arrow = document.querySelector(".after");
let right_arrow = document.querySelector(".before");
let viewall = document.getElementById("viewall");

viewall.addEventListener("click", function() {
    if (viewall.innerHTML == "Tout voir") {
        left_arrow.style.display = "none";
        right_arrow.style.display = "none";
        for (let i = 0; i < 5; i++) {
            images[i].classList.add("actived");
        }
        viewall.innerHTML = "Voir qu'un";
    } else {
        left_arrow.style.display = "flex";
        right_arrow.style.display = "flex";
        for (let i = 1; i < 5; i++) {
            images[i].classList.remove("actived");
        }
        viewall.innerHTML = "Tout voir";
    }
}, false)


left_arrow.addEventListener("click", function() {
    let i;
    for (i = 0; i < 5; i++) {
        if (images[i].classList.contains("actived")) {
            if (i == 0) {
                images[i].classList.remove("actived");
                images[4].classList.add("actived");
                break;
            } else {
                images[i].classList.remove("actived");
                images[i - 1].classList.add("actived");
                break;
            }
        }
    }
    console.log(i);
}, false)


right_arrow.addEventListener("click", function() {
    for (let i = 0; i < 5; i++) {
        if (images[i].classList.contains("actived")) {
            if (i == 4) {
                images[i].classList.remove("actived");
                images[0].classList.add("actived");
                break;
            } else {
                images[i].classList.remove("actived");
                images[i + 1].classList.add("actived");
                break;
            }
        }
    }
}, false)
