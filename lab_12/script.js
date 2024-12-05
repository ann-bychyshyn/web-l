function getById() {
  let id = window.location.href.split("id=")[1];
  if (id) {
    return id;
  }
  return 0;
}

function makeCard(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("card");

  pokemonCard.innerHTML = `
    <a href="index1.html?id=${pokemon.url.split("/")[6]}">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pokemon.url.split("/")[6]
      }.png" alt="${pokemon.name}" />
      <div class="card__info">
        <h2>${pokemon.name}</h2>
        <div class="card__types"></div>
      </div>
    </a>
  `;
  return pokemonCard;
}

function loadingMain() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const box = document.querySelector(".box");
        data.results.forEach((pokemon) => {
          const pokemonCard = makeCard(pokemon);
          box.appendChild(pokemonCard);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

function loadingInformation(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let abilities = data.abilities;
        let moves = data.moves;
        let stats = data.stats;

        const img = document.querySelector("#image");
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        img.alt = data.name;
        const tittle = document.querySelector("#tittle");
        tittle.innerHTML = data.name;

        stats.forEach((stat) => {
          const sInformation = document.querySelector(".stats");
          sInformation.innerHTML += `
            <p>${stat.stat.name}: ${stat.base_stat}</p>
          `;
        });
        abilities.forEach((ability) => {
          const aInformation = document.querySelector(
            ".abilities"
          );
          aInformation.innerHTML += `
            <p>${ability.ability.name}</p>
          `;
        });

        moves.forEach((move) => {
          const mInformation = document.querySelector(".moves");

          mInformation.innerHTML += `
            <p>${move.move.name}</p>
          `;
        });
      });
  } catch (error) {
    console.log(error);
  }
}

function main() {
  let id = getById();
  if (id == 0) {
    loadingMain();
    return;
  } else {
    loadingInformation(id);
  }
}

main();