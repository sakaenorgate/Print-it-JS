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

let numero = 0;

const flecheLeft = document.querySelector(".arrow_left");
flecheLeft.addEventListener("click", function() { ChangeSlide(-1);
	console.log(flecheLeft);
});

const flecheRight = document.querySelector(".arrow_right");
flecheRight.addEventListener("click", function() { ChangeSlide(1);
	console.log(flecheRight);
});

console.log(slides.length);

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > slides.length -1)
		numero = 0;
	if (numero < 0)
		numero = slides.length -1;

	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numero]['image'];
	document.getElementById("text").innerHTML = slides[numero]['tagLine'];

	console.log(numero);
}

const codeDot = document.querySelector(".dots").innerHTML = '<p class="dot"></p>'.repeat(slides.length);
{
	console.log(codeDot);
}


