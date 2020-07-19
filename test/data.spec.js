import { filterType, filterSearch, filterGeneration } from '../src/data.js';

import data from '../src/data/pokemon/pokemon.js'
//test de filtrado por tipo///
const typePoke = [{
  "name": "Bulbasaur",
  "type":[
    "grass"]
}];

describe('filterType', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  test('should return "grass" for filter "type"', () => {
    expect(filterType(typePoke, "type", "grass")).toEqual(typePoke);
  });
});

///Test de buscar nombre ///
const namePoke = [{
  "num": "001",
  "name": "bulbasaur"
  }];

describe('filterSearch', () => {
  test('is a function', () => {
    expect(typeof filterSearch).toBe('function');
  });

  test('should return "bulbasaur" for filter "name"', () => {
    expect(filterSearch(namePoke, "bulbasaur")).toEqual(namePoke);
  });
});


//test de filtrado por Generacion///
const generationPoke = [{
  "generation":{
    "name": "kanto",
  } 
}];

describe('filterGeneration', () => {
  test('is a function', () => {
    expect(typeof filterGeneration).toBe('function');
  });

  test('should return "kanto" for filter "generation[name]"', () => {
    //let gen = {generation}.name;
    expect(filterGeneration(generationPoke,"kanto")).toEqual(generationPoke);  
  });
});

