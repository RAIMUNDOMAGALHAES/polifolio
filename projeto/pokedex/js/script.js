
const pokemonName = document.querySelector(".pokemon_name");
const pokemonImagem = document.querySelector(".pokemon_image");
const pokemonNumber = document.querySelector(".pokemon_number");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const buttonPrev = document.querySelector(".btn-prev ");
const buttonNext = document.querySelector(".btn-next");

let contadora; 

// conectar com a API

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        console.log(data)
        return data;
    }


};

//renderizar os dados da API

const renderPokemon = async (pokemon) => {

    pokemonName.textContent = "carregando...";
    pokemonNumber.textContent = "";
pokemonImagem.src = "https://i.gifer.com/ZKZg.gif";
    const data = await fetchPokemon(pokemon)

    if (data) {

        pokemonNumber.innerHTML = data.id;
        pokemonName.innerHTML = data.name;

        pokemonImagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        contadora = data.id;

        input.value = "";

        console.log(data)
    } else {
        pokemonName.textContent = " não encontrado"

        pokemonNumber.textContent = ""
    }



};



form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {
   
    if (contadora > 1) {
         contadora -= 1;
    renderPokemon(contadora);
    }
});

buttonNext.addEventListener("click", () => {

    contadora += 1;
  renderPokemon(contadora);

});

renderPokemon(1)
