const joueurs = document.querySelectorAll(".joueur")
const gardientDomicile = document.querySelector(".domicile-gardien");
const joueurDomicile = document.querySelectorAll(".domicile-joueur");
const joueurDomicile1 = document.querySelector(".domicile-joueur.un");
const joueurDomicile2 = document.querySelector(".domicile-joueur.deux");
const joueurDomicile3 = document.querySelector(".domicile-joueur.trois");
const joueurDomicile4 = document.querySelector(".domicile-joueur.quatre");
const joueurDomicile5 = document.querySelector(".domicile-joueur.cinq");
const joueurDomicile6 = document.querySelector(".domicile-joueur.six");
const joueurDomicile7 = document.querySelector(".domicile-joueur.sept");
const joueurDomicile8 = document.querySelector(".domicile-joueur.huit");
const joueurDomicile9 = document.querySelector(".domicile-joueur.neuf");
const joueur0 = document.querySelector(".domicile-joueur.dix");
const terrain = document.querySelector(".terrain");


// function clickJoueurDomicile() {
//     joueurDomicile.forEach((joueur) => {
//         joueur.addEventListener("click", () => {
//             console.log("lu")
//         })
//     })
// }

// clickJoueurDomicile()

function movejoueur() {
    joueurs.forEach((joueur) => {
        joueur.onmousedown = function(event) {
            // (1) prepare to moving: make absolute and on top by z-index
            joueur.style.position = 'absolute';
            joueur.style.zIndex = 1000;
          
            // move it out of any current parents directly into body
            // to make it positioned relative to the body
            document.body.append(joueur);
          
            // centers the joueur at (pageX, pageY) coordinates
            function moveAt(pageX, pageY) {
              joueur.style.left = pageX - joueur.offsetWidth / 2 + 'px';
              joueur.style.top = pageY - joueur.offsetHeight / 2 + 'px';
            }
          
            // move our absolutely positioned joueur under the pointer
            moveAt(event.pageX, event.pageY);
          
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
          
            // (2) move the joueur on mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // (3) drop the joueur, remove unneeded handlers
            joueur.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              joueur.onmouseup = null;
            };
        
            joueur.ondragstart = function() {
                return false;
              };
          
          };
    })
}

movejoueur()
