let url = new URLSearchParams(window.location.search);

let offset = url.get("offset") ? url.get("offset") : 0;
let prevOffset, nextOffset;

let nextLink = document.querySelector(".nextLink");
let prevLink = document.querySelector(".prevLink");

let spinner = document.querySelector(".spinnerContainer");

fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
	.then(res => res.json())
	.then(function(data) {
		//spinner.remove();

		let maxOffset = data.count - (data.count % 20);
		
		nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 20;
		
		prevOffset = offset <= 0 ? 0 : parseInt(offset) - 20;
		
		nextLink.href = `?offset=${nextOffset}`;
		prevLink.href = `?offset=${prevOffset}`;
		
		let template = document.querySelector("#template");
		let pokeList = document.querySelector("#pokelist");

		data.results.forEach(function(result) {
			let array = result.url.split("/");
			let id = array[array.length - 2];

			let clone = template.content.cloneNode(true);
			clone.querySelector(".listItem").innerText = result.name;
			clone.querySelector(".listItem").href = `/character-sheet.html?id=${id}`;

			pokeList.appendChild(clone);
		})
	});