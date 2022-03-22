let artefacts = 
{
    "Diluc":[
        "https://media.discordapp.net/attachments/954708502717272094/954807195382452254/1.png",
        "https://media.discordapp.net/attachments/954708502717272094/954807195642494996/2.png",
        "https://media.discordapp.net/attachments/954708502717272094/954807195994849310/3.png",
        "https://media.discordapp.net/attachments/954708502717272094/954807196284235858/4.png",
        "https://media.discordapp.net/attachments/954708502717272094/954807196573638676/5.png"
    ],
    "Venti":[
        "https://media.discordapp.net/attachments/954708502717272094/954808179223568466/1.png",
        "https://media.discordapp.net/attachments/954708502717272094/954808177663295508/2.png",
        "https://media.discordapp.net/attachments/954708502717272094/954808177914937364/3.png",
        "https://media.discordapp.net/attachments/954708502717272094/954808178632187954/4.png",
        "https://media.discordapp.net/attachments/954708502717272094/954808178854473758/5.png"
    ],
    "Rosalia":[
        "https://media.discordapp.net/attachments/954708502717272094/954809329041703012/1.png",
        "https://media.discordapp.net/attachments/954708502717272094/954809328186036234/2.png",
        "https://media.discordapp.net/attachments/954708502717272094/954809328362213488/3.png",
        "https://media.discordapp.net/attachments/954708502717272094/954809328555159563/4.png",
        "https://media.discordapp.net/attachments/954708502717272094/954809328798412810/5.png"
    ],
    "Bennett":[
        "https://media.discordapp.net/attachments/954708502717272094/954810121316339763/1.png",
        "https://media.discordapp.net/attachments/954708502717272094/954810120418754631/2.png",
        "https://media.discordapp.net/attachments/954708502717272094/954810120649474058/3.png",
        "https://media.discordapp.net/attachments/954708502717272094/954810120838209566/4.png",
        "https://media.discordapp.net/attachments/954708502717272094/954810121064697968/5.png"
    ]
}



let params = new URLSearchParams(document.location.search);
let perso = params.get("perso");
console.log(perso);
let persospace = perso.replace("_", " ");
let title = document.getElementById("title");
let doctitle = document.getElementsByTagName("title")[0];
doctitle.innerHTML = persospace;
title.innerHTML = `Artefact pour ${persospace}`;
let images = document.getElementsByClassName("art");


for (let i = 0; i<images.length; i++) {
    images[i].setAttribute("src", artefacts[perso][i]);
}