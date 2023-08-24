const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let numeroId = 0;

const flecheLeft = document.querySelector(".arrow_left");	/* Define flecheLeft with selector .arrow_left */
flecheLeft.addEventListener("click", function() { ChangeSlide(-1);	/* Add event: if click flecheLeft then call function()ChangeSlide */

console.log('flecheLeft cliked!');
})

const flecheRight = document.querySelector(".arrow_right");	/* Define flecheRight with selector .arrow_right */
flecheRight.addEventListener("click", function() { ChangeSlide(1);	/* Add event: if click flechright then call function()ChangeSlide */

console.log('flecheRight clicked!');
})

console.log("slides.lengths: "+slides.length);

function ChangeSlide(sens) {
	numeroId = numeroId + sens;	/* To left: numeroId -1 / To right: numeroId +1 */
	if (numeroId > slides.length -1)
		numeroId = 0;	/* After the last slide -> get back to the first slide */
	if (numeroId < 0)	/* Before the first slide -> go to the last slide */
		numeroId = slides.length -1;

		/* Replace img with selector .banner-img by current slide image */
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numeroId]['image'];
		/* Replace text in #text by current slide tagLine */
	document.getElementById("text").innerHTML = slides[numeroId]['tagLine'];

	showDotSelected();

	console.log("numeroId: "+numeroId);
}
	/* Define codeDot as content of selector .dots = <p class="dot"> x 4 */
const codeDot = document.querySelector(".dots").innerHTML = '<p class="dot"></p> '.repeat(slides.length);

	/* Create table of elements in dots with class .dot */
var dots = document.getElementsByClassName("dot");

showDotSelected();
function showDotSelected() {

	var i;
		/* Replace all of 4 dots' class .dot_selected by "" */
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" dot_selected", "");	
	}
		/* Add class .dot_selected to current slide dot  */
	dots[numeroId].className += " dot_selected";
	
	console.log(dots[0]);
	console.log(dots[1]);
	console.log(dots[2]);
	console.log(dots[3]);
	console.log(codeDot);
	console.log("i: "+i+"!!!");

}









// console.log(codeDot);

// let n = 0;
// while (n < slides.length) {
// 	if (n == numero)
// 	// codeDot.n.innerText = '<p class="dot dot_selected"></p>';
// 	// document.getElementById(".dots").innerHTML = '<p class="dot dot_selected"></p>';

// 	console.log(n);
// 	n++;
// };


