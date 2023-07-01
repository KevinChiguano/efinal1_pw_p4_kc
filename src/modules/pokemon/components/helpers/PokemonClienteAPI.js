const obtenerPokemons=async()=>{
    const vector = getVectorNumerico(1)
    return await getInfoPokemons(vector)

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

const getInfoPokemons=async(arreglo)=>{
    let vectorPokemons = [];
    let pokemon;
    let dataN;
    for(const elemento of arreglo){
        dataN = await consumirAPINombre(elemento);
        pokemon ={
            id: dataN.id,
            name: dataN.name,
        }
        vectorPokemons.push(pokemon)
    }
    return vectorPokemons
}

const consumirAPINombre = async (idPokemon)=>{

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`).then((r)=>r.json())
    return data
}


const obtenerFachadaPokemons=()=>{
    return obtenerPokemons();
}

export default obtenerFachadaPokemons