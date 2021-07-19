import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = props =>{

    // https://pokeapi.co/api/v2/pokemon?limit=807

    const [pokeList, setPokeList] = useState([])

    const handleClick = () =>{
        console.log("Pokemon Fetched")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(resp =>{
                const {results} = resp.data
                console.log(results)
                setPokeList(results)
            })
            

            .catch(err => console.log(err))
    }

    return(
        <fieldset>
            <legend>Pokemon.jsx</legend>
            <button onClick={handleClick}>Fetch Pokemon</button>
            <ul>
            {
                pokeList.map((pokemon, i) => <li key={i} >{pokemon.name}</li>)
            }
            </ul>
        </fieldset>
    )
}
export default Pokemon