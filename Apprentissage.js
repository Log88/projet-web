//Ancien type d'écriture -> + vieux
var unTexte = "Voici un texte";
console.log(unTexte);
//on peut changer la valeur du texte là
unTexte = "nouveau";
console.log(unTexte);

//On a en plus de var :
const prénom = "Andrea";
console.log(prénom);
//prénom = "Théophile" <- pas possible car immuable
let unChiffre = 12;
let unString = "13";
unChiffre = 24; //ça change
console.log(unChiffre);

let concaténation = "un" + 1 + "deux" + 2; //possible

//Les Types :
let string = "";
let number = 24;
let boolean = true;
let array = [1, 2, "", false];
let object = {
	prenom: "Andrea",
	age: 24,
	ville: "Paris",
};
let arbre;
let nul = null;

typeof array; // = object

//incrémentation
let total = 2;
total = 3;
console.log(total);

//comparateur
let x = 4;
let y = 3;
if (x < y) {
	// ! pour avoir l'inverse
	console.log("y>x");
} else {
	console.log("y<x");
}

if (x == "4") {
	// pour l'inverse c'est !=
	console.log("true");
	//On ne test que la valeur
}
if (x === "4") {
	//pour l'inverse c'est !==
	console.log("true");
	//On test la valeur et le type
}

if (x || y) {
} //ou

if (x && y) {
} //et

//if else en une ligne
x == y ? console.log("true") : console.log("false");

//Fonctions
function faire() {}

//fonctions fléchées

//fonction qui se lance toute seule -> anonyme
(function () {
	console.log("ca fonctionne");
})();
//autre forme
(() => {
	console.log("ca fonctionne aussi");
})();

//SELECTEURS
document.querySelector("body"); //classe
document.querySelector("#id"); //id

//méthodes multiples : toutes les méthodes css dispo en JavaScrypt
//document.querySelector("body").style.background = "yellow";
//on peut donner cette valeur à une const
const body = document.querySelector("body");
const question1 = document.querySelector(".q1");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
console.log(btn2); // toujours vérifier ses variables dans la console

//question1.style.background = "red"; // .style.qqchose signifie qu'on peut utiliser tout de CSS
//question1.style.transition = "0.5s ease";

//click event :
//question1.addEventListener('évènement en question', function) ;
question1.addEventListener("click", () => {
	console.log("Click !"); //toujours test pour voir si ça fonctionne
	//question1.style.background = "white";
	// en général on fait directement une classe sur CSS.
	question1.classList.toggle("question-woop");
});

btn1.addEventListener("click", () => {});

//id > classe > balise html

//_____________________________
//Mouse event
const mouseMove = document.querySelector(".mousemove");
console.log(mouseMove);

window.addEventListener("mousemove", (e) => {
	//e de event : permet de récupérer toutes les données de l'évent
	//console.log(e);
	mouseMove.style.left = e.pageX - 25 + "px";
	mouseMove.style.top = e.pageY - 25 + "px";
});

//quand on laisse appuyé sur la souris
window.addEventListener("mousedown", () => {
	mouseMove.style.transform = "scale(0.1)";
});

//quand on relâche la pression
window.addEventListener("mouseup", () => {
	mouseMove.style.transform = "scale(1)";
});

//quand on rentre dans une division
question1.addEventListener("mouseenter", () => {
	question1.style.background = "rgba(256,0,0,0.6)";
});

//quand on sort de la division
question1.addEventListener("mouseout", () => {
	question1.style.background = "rgba(256,0,0,1)";
});

//quand on passe sur un élément -> mouseover

//___________________________________________________________
//Scroll Event
const nav = document.querySelector("nav");

//pas de e en faisans le scroll.
let pixelMemory = 0;
window.addEventListener("scroll", () => {
	//Print le nombre de pixel que la personne a scrollé pendant le scroll :
	//console.log(window.scrollY);
	console.log(pixelMemory);
	let pixelTest = window.scrollY;
	if (pixelTest > pixelMemory + 80) {
		pixelMemory = pixelTest;
		nav.style.top = -50 + "px";
	} else if (pixelTest < pixelMemory - 120) {
		pixelMemory = pixelTest;
		nav.style.top = 0;
	}
});

//_________________________________________
//formulaire
let nom = "";
let language = "";
const form = document.querySelector("form");
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");

inputName.addEventListener("input", (e) => {
	//console.log(e.target.value);
	nom = e.target.value;
	console.log(nom);
});

select.addEventListener("input", (e) => {
	//console.log(e.target.value);
	language = e.target.value;
});

form.addEventListener("submit", (e) => {
	e.preventDefault(); // enlève le fait de changer de page en submittant le form
	if (test.checked) {
		//est ce que la checkbox est cochée, vrai pour le bouton aussi

		//sélectionner une balise dans une autre balise \/ ici seul balise div dans form
		document.querySelector("form > div").innerHTML = `
		<h3>Nom : ${nom}</h3>
		<h4>Langage préféré : ${language}</h4>
		`; // écrire directement dans une balise HTML
	} else {
		alert("veuillez accepter de cocher la case");
	}
});

//_____________________________________________________
//Load event -> faire ça une fois que la page est chargée
window.addEventListener("load", () => {
	console.log("document ok");
});

//_____________________________________________________
//Sélectionner par exemple toutes les checkbox
const boxes = document.querySelector(".q1");
console.log(boxes);

//boxes.array.forEach((box) => {
//	box.addEventListener("click", (e) => {
//		console.log(e.target);
//	});
//});

//__________________________________________________________
//Bubbling <- de base l'event listener est paramétré en bubbling, cad : avec false en troisième paramètre.
document.body.addEventListener(
	"click",
	() => {
		console.log("hello 1");
	},
	false
);

//Usecapture <- la le fait passer avant le click 1 et le alert qui suit
document.body.addEventListener(
	"click",
	() => {
		console.log("hello 2");
	},
	true
);

//_____________________________________________________
//Stop propagation
question1.addEventListener("click", (e) => {
	alert("test");
	e.stopPropagation(); //La sorti du click suivant est annulé
});

//_______________________________________________________
// BOM : browser Object Model

console.log(window.innerHeight);
console.log(window.screenY);
//window.open("http://google.com", "Andrea c cool"); //rediriger la personne vers une autre page web etc

// Evenement addosé a Window:
//alert();
confirm("êtes vous sur ?");
let answer = prompt("Salut à tous les amis");
console.log(answer);

//Timer, compte à rebour
setTimeout(() => {
	//logiqe à executer
	console.log("ca f 10s");
}, 10000); //Après 10 secondes on fait la logique

/* Time interval 
let timeInterval = setInterval(() => {
	document.body.innerHTML +=
		"<div class='box'> <h2>Wesh comment tu vas ?</h2> </div>";
}, 5000);

window.addEventListener("click", () => {
	clearInterval(timeInterval);
});
*/

//Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
//console.log(location.replace("http://google.fr"));

//Navigator
console.log(navigator.userAgent);
console.log(navigator.geolocation);
