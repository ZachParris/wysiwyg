"use strict"

let billMurrayArray = [
{
	title: "Actor, ",
	name: "Bill Murray",
	bio: "He was in Space Jam",
	image: "https://img.society6.com/cdn/0009/p/2144006_2571573_pm.jpg",
	lifespan: {
		birth: 1950,
		death: 3797
	}
},
{
	title: "Part-time Bartender, ",
	name: "Bill Murray",
	bio: "Only serves tequila.",
	image: "https://pbs.twimg.com/profile_images/3240741454/9080e76653a80e43ae2058432bc76806_400x400.jpeg",
	lifespan: {
		birth: 1950,
		death: 3797
	}
},
{
	title: "Golf Enthusiast, ",
	name: "Bill Murray",
	bio: "Duh, Caddyshack...",
	image: "http://www.phosphore.com/uploads/images/5583e7ce3fc5d.jpg",
	lifespan: {
		birth: 2747,
		death: 4797
	}
}]


// tudor group - greg's code let = var


let container = document.getElementById('container');
let input = document.getElementById('input');
let card = document.getElementsByClassName('card');
let bio = document.getElementsByClassName('bio');


// console.log("card", card);
function populateDom() {
for(let i = 0; i < billMurrayArray.length; i++) {
	let person = billMurrayArray[i];
	// console.log("person", person);
	buildCard(person);
	}
	addClickEvent();
}


function buildCard(person) {
	container.innerHTML += `<person class="card"><header>${person.title}${person.name}</header><section><p class="bio">${person.bio}</p><img src="${person.image}"><footer>${person.lifespan.birth}-${person.lifespan.death}<footer><person>`
}

function addClickEvent() {
	for(let i = 0; i < card.length; i++){
		let currentCard = card[i];
		let currBio = bio[i];
		currentCard.addEventListener('click', function(){
			removeSelected();
			input.focus();
			currentCard.classList.add('selected');
			keyEvent(currentCard, currBio);

		})
	}
}
	function removeSelected(){
		for(let i = 0; i < card.length; i++) {
		card[i].classList.remove('selected');
	}
}
function keyEvent(currentCard, currBio) {
	input.addEventListener("keyup", function(event){
		if(currentCard.classList.contains('selected')) {
			let newBio = event.currentTarget.value;
			currBio.innerHTML = newBio;
			if(event.keyCode === 13) {
				currBio.innerHTML = newBio;
				input.value = "";
			}
		}
		// console.log("currentCard", currentCard);
	})
}


populateDom();



// This is the oject structure they gave us. Declare a var. Create an array of objects.//DONE
// {
//   title: "Samurai",
//   name: "Tomoe Gozen",
//   bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
//   image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
//   lifespan: {
//     birth: 1747,
//     death: 1797
//   }
// }]
// Create an array of objects that represents famous people (see structure below).//DONE
// Create a text input in your DOM.//DONE
// Beneath that, create a container, block element in your DOM.//DONE
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.


// original code

// for (var i = 0; i < billMurrayArray.length; i++) {
// 	document.getElementById("murrayEl").innerHTML += "<article id='words" + i + "'><header class='name'>" + billMurrayArray[i].title + " " + billMurrayArray[i].name + "</header>" + "<p id='bio" + i + "'>" + billMurrayArray[i].bio + "</p><img src='" + billMurrayArray[i].image + "'>" + "<footer class='age'>" + billMurrayArray[i].lifespan.birth + "-" + billMurrayArray[i].lifespan.death + "</footer>" + "</article>"
// };
// // When you click on one of the person elements, a dotted border should appear around it.
// // console.log("e", e.target.parentElement.id)

// document.getElementById("murrayEl").addEventListener("click", function(e){
// 	document.getElementById(e.target.parentElement.id).style.border = "2px dotted black"
// 	document.getElementById("changeBio").focus()
// 	idEl = e.target.parentElement.id;
// 	console.log("idEl", idEl);
// });
// var idEl;
// document.getElementById("changeBio").addEventListener("keyup", function(e){
// 	document.getElementById('bio' + idEl.substring(5, idEl.length)).innerHTML = document.getElementById("changeBio").value;
// 	if(e.code === "Enter"){
// 		document.getElementById('changeBio').value = "";
// 	}

// });



// For every even numbered element, have a light yellow background.//CSS
// For every odd numbered element, have a light blue background.//CSS

// Each element's DOM structure should be as shown below.//DONE

// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.//DONE
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.//DONE
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.//DONE
//Element Structure example:
// <person>
//   <header>Name and title go here</header>
//   <section>Bio and image go here</section>
//   <footer>Lifespan info goes here</footer>
// </person>


// greg's code let = var


// let murrayEl = document.getElementById('murrayEl')
// let input = document.getElementById('input')
// let card = document.getElementsByClassName('card')
// // console.log("card", card);

// for(let i = 0; i < billMurrayArray.length; i++) {
// 	let person = billMurrayArray[i];
// 	// console.log("person", person);
// 	buildCard(person);
// }

// function buildCard(person) {
// 	murrayEl.innerHTML += `<person class="card"><header>${person.title}${person.name}</header><section>${person.bio}<img src="${person.img}"<footer>${person.lifespan.birth}-${person.lifespan.death}<footer><person>`
// }