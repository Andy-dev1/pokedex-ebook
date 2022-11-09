import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import PokeCard from './PokeCard/index';
import {PokeHeader,PokeTitle,Container,Section,PokeButton} from './styles.js';
import { useState,useEffect } from 'react';

export default function HomePage() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }

    createPokemonObject(data.results)
    
  }

  useEffect(() => { getAllPokemons() }, [])

  return (
    <Container>
      <PokeHeader>
        <PokeTitle>Pokedex</PokeTitle>
      </PokeHeader>
      <Section>
        {allPokemons.sort((a, b) => a.id - b.id).map((pokemon, index) =><PokeCard pokeName={pokemon.name} pokeType={pokemon.types[0].type.name} pokeImage={pokemon.sprites.other.dream_world.front_default}/>)}
      </Section>
      <PokeButton
        onPress={()=>getAllPokemons()}
        title="Load More"
        
       
      />
    </Container>
  );
}

