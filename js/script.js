// Receber resposta da API

const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon__name');
const pokemonImage = document.querySelector('.pokemon_imagem');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
let contadora;


const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
   
};

const renderPokemon = async (pokemon) => {

    pokemonName.textContent = "Carregando..."
    pokemonImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaY-niYtD_l99k8b8pyWo-lXlZnadIQAnlbg&s"
    

    const data = await fetchPokemon(pokemon);

    if (data) {
        
    pokemonNumber.textContent = data.id;
    pokemonName.textContent = data.name;
    pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;

    input.value = ""
    contadora = data.id;
    console.log(data);
    
    } else {
        
        pokemonName.textContent = "Não encontrado :c";
        pokemonNumber.textContent = ""
        pokemonImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2hbNa0I60g7kAJW7IA9u-9RfBM98QK4YGA&s"

    }
};

form.addEventListener("submit", (event)=>{
 
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());


});

buttonPrev.addEventListener("click", (event)=>{

    if (contadora >1) {
        contadora -=1
        renderPokemon(contadora)
        input.value = ""
        contadora = data.id
    } else {
        
    }
});

buttonNext.addEventListener("click", (event)=>{

        (contadora <1)
        contadora +=1
        renderPokemon(contadora)
       
    
});

renderPokemon(1)
