let persos=
{
    "Diluc":"https://media.discordapp.net/attachments/954845201967513740/955394046971494450/diluc.jpg",
    "Venti":"https://media.discordapp.net/attachments/954845201967513740/955393943959400478/Venti.jpg",
    "Rosalia":"https://media.discordapp.net/attachments/954845201967513740/955393942319423528/Rosa.jpg",
    "Bennett":"https://media.discordapp.net/attachments/954845201967513740/955393943707713546/Bennett.jpg",
    "Xiao":"https://media.discordapp.net/attachments/954845201967513740/955393941920960572/Xiao.jpg",
    "Sucrose":"https://media.discordapp.net/attachments/954845201967513740/955393942537515068/Sucrose.jpg",
    "Xinyan":"https://media.discordapp.net/attachments/954845201967513740/955393942873047040/Xinyan.jpg",
    "Hu_Tao":"https://media.discordapp.net/attachments/954845201967513740/955393943137296404/Hu_tao.jpg",
    "Tartaglia":"https://media.discordapp.net/attachments/954845201967513740/955393943414136892/Tarta.jpg",
    "Albedo":"https://media.discordapp.net/attachments/954845201967513740/955393944240414790/Albedo.jpg",
    "Ganyu":"https://media.discordapp.net/attachments/954845201967513740/955393944441716756/Ganyu.jpg",
    "Ningguang":"https://media.discordapp.net/attachments/954845201967513740/955394045688041502/ningguang.jpg",
    "Barbara":"https://media.discordapp.net/attachments/954845201967513740/955394045927112775/barbara.jpg",
    "Noelle":"https://media.discordapp.net/attachments/954845201967513740/955394046342357032/noelle.jpg",
    "Jean":"https://media.discordapp.net/attachments/954845201967513740/955394046581415966/jean.jpg",
    "Zhongli":"https://media.discordapp.net/attachments/954845201967513740/955394047323811890/Zhongli.jpg",
    "Fischl":"https://media.discordapp.net/attachments/954845201967513740/955394047583875092/Fischl.jpg",
    "Eula":"https://media.discordapp.net/attachments/954845201967513740/955394047856480276/Eula.jpg",
    "Amber":"https://media.discordapp.net/attachments/954845201967513740/955394048070418482/amber.jpg",
    "Diona":"https://media.discordapp.net/attachments/954845201967513740/955394048301088788/diona.jpg",
    "Qiqi":"https://media.discordapp.net/attachments/954845201967513740/955394136297599006/qiqi.jpg",
    "Xiangling":"https://media.discordapp.net/attachments/954845201967513740/955394136612143114/xiangling.jpg",
    "Klee":"https://media.discordapp.net/attachments/954845201967513740/955394136914157618/klee.jpg",
    "Razor":"https://media.discordapp.net/attachments/954845201967513740/955394137241292821/razor.jpg",
    "Keqing":"https://media.discordapp.net/attachments/954845201967513740/955394137476182046/keqing.jpg",
    "Mona":"https://media.discordapp.net/attachments/954845201967513740/955394137698496552/mona.jpg",
    "Xingqiu":"https://media.discordapp.net/attachments/954845201967513740/955394137975324732/xinqiu.jpg",
    "Lisa":"https://media.discordapp.net/attachments/954845201967513740/955394138445074442/lisa.jpg",
    "Chongyun":"https://media.discordapp.net/attachments/954845201967513740/955394139023867904/chongyun.jpg",
    "Kaeya":"https://media.discordapp.net/attachments/954845201967513740/955394139346862100/kaeya.jpg",
    "Sara":"https://media.discordapp.net/attachments/954845201967513740/955394236981866516/sara.jpg",
    "Baal":"https://media.discordapp.net/attachments/954845201967513740/955394237183176714/baal.jpg",
    "Aloy":"https://media.discordapp.net/attachments/954845201967513740/955394237397082133/aloy.jpg",
    "Sayu":"https://media.discordapp.net/attachments/954845201967513740/955394237619388476/sayu.jpg",
    "Yoimiya":"https://media.discordapp.net/attachments/954845201967513740/955394237787148318/yoimiya.jpg",
    "Ayaka":"https://media.discordapp.net/attachments/954845201967513740/955394238118514778/ayaka.jpg",
    "Beidou":"https://media.discordapp.net/attachments/954845201967513740/955394238315659324/Beidou.jpg",
    "Yanfei":"https://media.discordapp.net/attachments/954845201967513740/955394238575673374/yanfei.jpg",
    "Kazuha":"https://media.discordapp.net/attachments/954845201967513740/955394238781218906/kazuha.jpg",
    "Kokomi":"https://media.discordapp.net/attachments/954845201967513740/955394239037050890/kokmi.jpg",
    "Thomas":"https://media.discordapp.net/attachments/954845201967513740/955394400362565652/thomas.jpg",
    "Yun-Jin":"https://media.discordapp.net/attachments/954845201967513740/955394400584867950/yun-jin.jpg?width=720&height=480",
    "Shenhe":"https://media.discordapp.net/attachments/954845201967513740/955394400865894410/shenhe.jpg?width=720&height=480",
    "Yae":"https://media.discordapp.net/attachments/954845201967513740/955394401138507776/yae.jpg?width=720&height=480",
    "Itto":"https://media.discordapp.net/attachments/954845201967513740/955394401369223208/itto.jpg?width=720&height=480",
    "Gorou":"https://media.discordapp.net/attachments/954845201967513740/955394401633443900/gorou.jpg"
}

let params = new URLSearchParams(document.location.search);
let perso = params.get("perso");
console.log(perso);
const image = document.getElementById("image");
image.setAttribute("src",persos[perso]);
let persospace = perso.replace("_", " ");
let title = document.getElementById("midlle");
let doctitle = document.getElementsByTagName("title")[0];
doctitle.innerHTML = persospace;
title.innerHTML = `Élévation pour ${persospace}`;