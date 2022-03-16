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

        pokeName.innerHTML = data.name

        pokeNumber.innerHTML = data.id

        pokeHeight.innerHTML = parseInt(data.height) / 10

        pokeWeigh.innerHTML = parseInt(data.weight) / 10

        pokePS.innerHTML = data.stats[0].base_stat
        pokeATK.innerHTML = data.stats[1].base_stat
        pokeDEF.innerHTML = data.stats[2].base_stat
        pokeSP_ATK.innerHTML = data.stats[3].base_stat
        pokeSP_DEF.innerHTML = data.stats[4].base_stat
        pokeSpeed.innerHTML = data.stats[5].base_stat

        let pokeTipo = data.types//pendiente
        console.log(pokeTipo)
        console.log(`Tipo: ${pokeTipo}`)
        
        type1.innerHTML = data.types[0].type.name
        type2.innerHTML = data.types[1].type.name
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
