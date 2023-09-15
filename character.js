let url = new URLSearchParams(window.location.search);
let spinner = document.querySelector(".spinnerContainer");

if (url.has("id")) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${url.get("id")}`)
		.then(res => res.json())
		.then(function(data) {
			spinner.remove();
			console.log(data)
			data.abilities.forEach(function(ability) {
				document.querySelector(".abilities").innerHTML +=
					`<li>${ability.ability.name}</li>`;
			});

			data.types.forEach(function(type) {
				document.querySelector(".types").innerHTML +=
					`<span class="type ${type.type.name}">${type.type.name}</span> `;
			});

			data.stats.forEach(function(stat) {
				document.querySelector(".stats").innerHTML +=
					`${stat.stat.name}: ${stat.base_stat} | `;
			});

			data.moves.forEach(function(move) {
				document.querySelector(".moves").innerHTML +=
					`<li>${move.move.name}</li>`
			});

			document.querySelector(".name").innerText = data.name;
			document.querySelector(".sprite_front").src = data.sprites.other.dream_world.front_default;
			/* document.querySelector(".sprite_back").src = data.sprites.back_default; */
		});
}