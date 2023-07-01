const obtenerPokemonsImg=()=>{
    const vector = getVectorNumerico(1)
    return getInfoPokemons(vector)

}

const getAleatorio=(min, max)=>{
    max++
    return Math.floor(Math.random() * (max - min) + min);
}

const getVectorNumerico=(cantidad)=>{
    let vectorNum = []
    for(let i = 0; i < cantidad; i++){
        vectorNum.push(getAleatorio(1,5))
    }
    return vectorNum
}

const getInfoPokemons=(arreglo)=>{
    let vectorPokemons = [];
    let pokemon;
    let dataN;
    for(const elemento of arreglo){
        dataN = consumirAPIImg(elemento);
        pokemon ={
            id: elemento,
            url: dataN,
        }
        vectorPokemons.push(pokemon)
    }
    return vectorPokemons
}

const consumirAPIImg =  (idPokemon)=>{

    const data =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`
    return data
}


const obtenerFachadaPokemonsImg=()=>{
    return obtenerPokemonsImg();
}

export default obtenerFachadaPokemonsImg