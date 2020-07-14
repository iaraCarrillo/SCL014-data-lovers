///EXPORTANDO las función de filtar por caramelos///
//se fijan los parámetros de la función
export const filterCandy = (data, property, selectCandy) => {
    ///se declara una constante tipo array
    const resultado = [];
    //for me recorrerá la data de proyecto
    for (let i = 0; i < data.length; i++) {
     //for que recorrerá el atributo tipo array de debilidad
    
      let costOfEvolution =data[i].evolution["nextEvolution"]
      console.log (data[i].evolution["nextEvolution"]);
    if(data[i].evolution["nextEvolution"]!=undefined){
      console.log (costOfEvolution[i].candycost);
      if(costOfEvolution[i].candycost == selectCandy)
        //se llama a la constante tipo array declarada al incio y una vez recorrida la longitud de la data
        // se hace un push para alamcene todos los elementos los devuelve la nueva longitud del array.
        resultado.push(data[i]) 
      }
    }
    
    return resultado
  };
  
  
  
  ///EXPORTANDO las función de filtar por generacion (ESTO NO FUNCIONA)///
  export const generation = (data, property, generation) => {
    const resultado = [];
    for (let i = 0; i < data.length; i++) {
      // let dataType = data[i].type;
      //console.log (dataType);
      for (let a = 0; a < data[i][property].length; a++) {
        //console.log ("hola",dataType[d]);
        if (data[i][property][a] === generation) {
          resultado.push(data[i])
        }
      }
    }
   // console.log(resultado)
    return resultado
  };
  
  ///EXPORTANDO las función de filtar por tipo///
  export const filterType = (data, property, selectType) => {
    const resultado = [];
    for (let i = 0; i < data.length; i++) {
      for (let a = 0; a < data[i][property].length; a++) {
        //console.log (data[i][property][a]);
        if (data[i][property][a] == selectType) {
          resultado.push(data[i])
        }
      }
    }
   // console.log(resultado)
    return resultado
  };
  
  
  ///EXPORTANDO la función buscar por nombre de pokémon///
  export const filterSearch = (data,searchBox) =>{
    const search = data.filter((element) => {
      return element.name.includes(searchBox);
    });
console.log(search)
    return search;
  }
 