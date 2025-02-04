
const container = document.querySelector('.cards');

function ImageToggle(image, images){
let currentImageIndex = 0;

image.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.src = images [currentImageIndex];

});

}

function ShowPokemonCards() {
container.innerHTML = "";

    data.forEach((pokemon)=>{

        const li = document.createElement('li');
        li.className = 'card'

        const pokemonName = document.createElement('h2');
        pokemonName.className = "card--title"
        li.appendChild(pokemonName)
        pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);


        const image = document.createElement("img");
        image.className = "card--img"
        image.src =pokemon.sprites.other['official-artwork'].front_default;
        image.width = '300'
        li.appendChild(image)

        const appearedIn = document.createElement("h3");
        appearedIn.className = "appeared--in"
        appearedIn.textContent = `Appeared in:`;
        li.appendChild(appearedIn)
        pokemon.game_indices.forEach(game=> {

                const gameInfo = document.createElement("li");
                gameInfo.className = "game--info"
                gameInfo.textContent = `Pokemon ${game.version.name.charAt(0).toUpperCase() + game.version.name.substring(1)}`;
                li.appendChild(gameInfo)

        });
        
        const stats = document.createElement("ul");
        stats.className = "card--text";

        const statHeader = document.createElement("h3");
        statHeader.textContent = "Stats:";
        li.appendChild(statHeader)

        pokemon.stats.forEach((stat)=>
    
        {   const statList = document.createElement("li");
            const space = document.createElement("br"); // Just added this to have some more space between the stats. Probably more logic to add whitespace in the css tho :-)
            statList.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
            stats.appendChild(statList)
            stats.appendChild(space)

        });

        li.appendChild(stats);

        const images = [
            pokemon.sprites.front_default,
            pokemon.sprites.back_default,
            pokemon.sprites.other['official-artwork'].front_default];

        ImageToggle(image,images);


        container.appendChild(li);

    });


}

ShowPokemonCards()

