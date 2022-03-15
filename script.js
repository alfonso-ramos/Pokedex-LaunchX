const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeNameInput");
    let pokeInput = pokeNameInput.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`
    fetch(url).then((res) => {
        if(res.status !== "200"){
            console.log(res);
            pokeImage("./sad-pikachu.gif")
        }
        return res.json();
    }).then((data) =>{
        console.log(data)
        let pokeImg = data.sprites.front_default
        pokeImage(pokeImg);

        let pokeName = data.name
        console.log(pokeName)

        let pokeID = data.id
        console.log(pokeID)

        let pokeHeight = parseInt(data.height)
        let altura =  pokeHeight / 10;
        console.log(`Altura: ${altura} metros`)

        let pokeWeigh = parseInt(data.weight)
        let pesoKilos = pokeWeigh / 10
        console.log(`Peso: ${pesoKilos} Kg`)

        let pokeTipo = data.types.type //pendiente
        console.log(pokeTipo)
        console.log(`Tipo: ${pokeTipo}`)
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}