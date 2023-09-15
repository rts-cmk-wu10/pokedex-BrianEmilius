let url = new URLSearchParams(window.location.search);
let spinner = document.querySelector(".spinnerContainer");

if (url.get("keyword")) {
	fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
		.then(res => res.json())
		.then(function(data) {
			let results = data.results;
			
			let matches = results.filter(function(result) {
				return result.name.includes(url.get("keyword").toLowerCase());
			});

			spinner.remove();

			let template = document.querySelector("#template");
			let pokelist = document.querySelector("#pokelist");

			matches.forEach(function(result) {
				let array = result.url.split("/");
				let id = array[array.length - 2];
	
				let clone = template.content.cloneNode(true);
				clone.querySelector(".listItem").innerText = result.name;
				clone.querySelector(".listItem").href = `/character-sheet.html?id=${id}`;
	
				pokelist.appendChild(clone);
			})

		});
}