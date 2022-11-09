import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {PokeText,PokeType,PokeCardBox,PokeImage,PokeDataWrapper} from './styles.js';

export default function PokeCard({pokeName,pokeType,pokeImage}) {
  const veriifyColorType=()=>{
    switch (pokeType) {
      case 'grass':
        return '#48C9AB';
      case 'bug':
        return '#438B8B';
      case 'fire':
        return '#FB6D6C';
      case 'water':
        return '#74BDFF';
      case 'normal':
        return '#B8B8B8';
      case 'poison':
        return '#D049CB';
      case 'fairy':
        return '#CF3993';
      case 'ground':
        return '#CF8A39';
      case 'electric':
        return '#FFD86F';
      case 'fighting':
        return '#FBB16C';
      case 'psychic':
        return '#FB6CED';
      case 'rock':
        return '#6F7595';
      case 'ghost':
        return '#513675';
      case 'ice':
        return '#6CF2FB';
      case 'dragon':
        return '#FECD6E';
      case 'steel':
        return '#56575C';
      default:
        return 'black';
    }
  }

  return (
    <PokeCardBox style={{backgroundColor:veriifyColorType()}}>
      <PokeDataWrapper>
        <PokeText>{pokeName}</PokeText>
        <PokeType>{pokeType}</PokeType>
      </PokeDataWrapper>
      <PokeImage style={{resizeMode: 'contain'}}source={{uri:pokeImage}}/>
    </PokeCardBox>
  );
}

