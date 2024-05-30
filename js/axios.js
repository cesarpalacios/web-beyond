// Obtenemos los datos de todos los pokemon 
fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {
            printPokemons(json.results);
            //console.log(json.results)
        });

// Pinta todos los pokemos insertando un HTML dentro del #container
function printPokemons(pokemons) {

  const container = document.getElementById('pokemon')
  pokemons.map(pokemon => {
    container.innerHTML += `
    <div class="card">
    <p>${pokemon.name}</p>
    <a target="_blank" href="${pokemon.url}">${pokemon.url}</a>
    </card>
  `;
  });
}