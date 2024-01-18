const imageTag = document.getElementById("imageTag");
const btnAll = document.querySelectorAll('.buttonText').length;
for (let i = 0; i < btnAll; i++) {
    document.querySelectorAll('.buttonText')[i].addEventListener('click', function () {
        const buttonText = this.innerHTML;
        const text = buttonText.toLowerCase();
        customAudio(text);
        animation(text);
    })
};
const animation = (text) => {
    const selectButton = document.querySelector(`.${text}`);
    selectButton.classList.add("animated");
    setTimeout(() => {
        selectButton.classList.remove("animated");
    }, 1000)
}
document.addEventListener('keypress', (e) => {
    const text = e.key;
    customAudio(text);
    animation(text);
})
// const audio = (text) => {
//     switch (text) {

//         case "a":
//             const audioA = new Audio('audio/a.mp3');
//             imageTag.src = 'images/a.jpg';
//             audioA.play();
//             break;

//         case "b":
//             const audioB = new Audio('audio/b.mp3');
//             imageTag.src = 'images/b.jpg';
//             audioB.play();
//             break;

//         case 'c':
//             const audioC = new Audio('audio/c.mp3');
//             imageTag.src = 'images/c.jpg';
//             audioC.play();
//             break;
//         case 'd':
//             const audioD = new Audio('audio/d.mp3');
//             imageTag.src = 'images/d.jpg';
//             audioD.play();
//             break;
//         case 'e':
//             const audioE = new Audio('audio/e.mp3');
//             imageTag.src = 'images/e.jpg';
//             audioE.play();
//             break;
//         case 'f':
//             const audioF = new Audio('audio/f.mp3');
//             imageTag.src = 'images/f.jpg';
//             audioF.play();
//             break;
//         case 'g':
//             const audioG = new Audio('audio/g.mp3');
//             imageTag.src = 'images/g.jpg';
//             audioG.play();
//             break;
//         case 'h':
//             const audioH = new Audio('audio/h.mp3');
//             imageTag.src = 'images/h.jpg';
//             audioH.play();
//             break;
//         case 'i':
//             const audioI = new Audio('audio/i.mp3');
//             imageTag.src = 'images/i.jpg';
//             audioI.play();
//             break;
//         case 'j':
//             const audioJ = new Audio('audio/j.mp3');
//             imageTag.src = 'images/j.jpg';
//             audioJ.play();
//             break;
//         case 'k':
//             const audioK = new Audio('audio/k.mp3');
//             imageTag.src = 'images/k.jpg';
//             audioK.play();
//             break;
//         case 'l':
//             const audioL = new Audio('audio/l.mp3');
//             imageTag.src = 'images/l.jpg';
//             audioL.play();
//             break;
//         case 'm':
//             const audioM = new Audio('audio/m.mp3');
//             imageTag.src = 'images/m.jpg';
//             audioM.play();
//             break;
//         case 'n':
//             const audioN = new Audio('audio/n.mp3');
//             imageTag.src = 'images/n.jpg';
//             audioN.play();
//             break;
//         case 'o':
//             const audioO = new Audio('audio/o.mp3');
//             imageTag.src = 'images/o.jpg';
//             audioO.play();
//             break;
//         case 'p':
//             const audioP = new Audio('audio/p.mp3');
//             imageTag.src = 'images/p.jpg';
//             audioP.play();
//             break;
//         case 'q':
//             const audioQ = new Audio('audio/q.mp3');
//             imageTag.src = 'images/q.jpg';
//             audioQ.play();
//             break;
//         case 'r':
//             const audioR = new Audio('audio/r.mp3');
//             imageTag.src = 'images/r.jpg';
//             audioR.play();
//             break;
//         case 's':
//             const audioS = new Audio('audio/s.mp3');
//             imageTag.src = 'images/s.jpg';
//             audioS.play();
//             break;
//         case 't':
//             const audioT = new Audio('audio/t.mp3');
//             imageTag.src = 'images/t.jpg';
//             audioT.play();
//             break;
//         case 'u':
//             const audioU = new Audio('audio/u.mp3');
//             imageTag.src = 'images/u.jpg';
//             audioU.play();
//             break;
//         case 'v':
//             const audioV = new Audio('audio/v.mp3');
//             imageTag.src = 'images/v.jpg';
//             audioV.play();
//             break;
//         case 'w':
//             const audioW = new Audio('audio/w.mp3');
//             imageTag.src = 'images/w.jpg';
//             audioW.play();
//             break;
//         case 'x':
//             const audioX = new Audio('audio/x.mp3');
//             imageTag.src = 'images/x.jpg';
//             audioX.play();
//             break;
//         case 'y':
//             const audioY = new Audio('audio/y.mp3');
//             imageTag.src = 'images/y.jpg';
//             audioY.play();
//             break;
//         case 'z':
//             const audioZ = new Audio('audio/z.mp3');
//             imageTag.src = 'images/z.jpg';
//             audioZ.play();
//             break;

//         default:
//             console.error('error: unknown')
//     }
// }
const customAudio = (text) => {
    switch (text) {
        case text:
            const audioA = new Audio(`audio/${text}.mp3`);
            imageTag.src = `images/${text}.jpg`;
            audioA.play();
            break;
        default:
            console.error('error: unknown Word Press')

    }
}