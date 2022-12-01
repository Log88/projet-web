const body = document.querySelector("body");
const titre = document.querySelector("titre");

//_________________________________________
//researchBar
const researchBar = document.querySelector("researchBar");
const inputName = document.querySelector('input[type="text"]');

inputName.addEventListener("input", (e) => {
	//console.log(e.target.value);
	nom = e.target.value;
	console.log(nom);
});

select.addEventListener("input", (e) => {
	//console.log(e.target.value);
	language = e.target.value;
});

researchBar.addEventListener("submit", (e) => {
	e.preventDefault(); // enlève le fait de changer de page en submittant le researchBar
	if (test.checked) {
		//est ce que la checkbox est cochée, vrai pour le bouton aussi

		//sélectionner une balise dans une autre balise \/ ici seul balise div dans researchBar
		document.querySelector("researchBar > div").innerHTML = `
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
titre.addEventListener("click", (e) => {
	alert("test");
	e.stopPropagation(); //La sorti du click suivant est annulé
});

//_______________________________________________________
// BOM : browser Object Model

// console.log(window.innerHeight);
// console.log(window.screenY);
// window.open("http://google.com", "Andrea c cool"); //rediriger la personne vers une autre page web etc

// Evenement addosé a Window:
//alert();
// confirm("êtes vous sur ?");
// let answer = prompt("Salut à tous les amis");
// console.log(answer);

//Timer, compte à rebour
// setTimeout(() => {
// 	//logiqe à executer
// 	console.log("ca f 10s");
// }, 10000); //Après 10 secondes on fait la logique

// //  Time interval 
// let timeInterval = setInterval(() => {
// 	document.body.innerHTML +=
// 		"<div class='box'> <h2>Wesh comment tu vas ?</h2> </div>";
// }, 5000);

// window.addEventListener("click", () => {
// 	clearInterval(timeInterval);
// });


//Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
//console.log(location.replace("http://google.fr"));

//Navigator
// console.log(navigator.userAgent);
// console.log(navigator.geolocation);
