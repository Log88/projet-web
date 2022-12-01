const body = document.querySelector("body");
const titre = document.querySelector("titre");

//_________________________________________
//researchBar
const researchBar = document.querySelector(".researchBar");
const inputName = document.querySelector('input[type="text"]');

let research = ""

inputName.addEventListener("input", (e) => {
	//console.log(e.target.value);
	research = e.target.value;
	console.log(research);
});


researchBar.addEventListener("submit", (e) => {
	e.preventDefault(); 
	// enlève le fait de changer de page en submittant le researchBar
		document.querySelector(".researchBar > div").innerHTML = `
		<h3>${research}</h3>
		`; // écrire directement dans une balise HTML

});

//_____________________________________________________
//Load event -> faire ça une fois que la page est chargée
window.addEventListener("load", () => {
	console.log("document ok");
});


