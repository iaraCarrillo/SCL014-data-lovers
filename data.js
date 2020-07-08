//exportando las función de filtar por evolución
//se fijan los parámetros de la función
export const evolution = (data, property, evolution) => {
    //console.log("datajs", data);
    //console.log ("datass", evolution)
    ///se declara una constante tipo array
    const tarjeta = [];
    //for me recorrerá la data de proyecto
    for (let i = 0; i < data.length; i++) {
     //for que recorrerá el atributo tipo array de debilidad
      for (let a = 0; a < data[i][property].length; a++) {
        //console.log ("hola",dataType[d]);
        //condicional que igual lo encotrado en el atributo el array y lo iguala a la opcién elegida por el usuario
        if (data[i][property][a] === evolution) {
  
          //se llama a la constante tipo array declarada al incio y una vez recorrida la longitud de la data
         // se hace un push para alamcene todos los elementos los devuelve la nueva longitud del array.
          tarjeta.push(data[i])
        }
      }
    }
    //console.log(tarjeta)
    return tarjeta
  };
  
  
  
  /////exportando las función de filtar por tipo
  export const generation = (data, property, generation) => {
    //console.log("datajs", data);
    //console.log ("datass", selectType)
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
  
  /////exportando las función de filtar por tipo
  export const type = (data, property, type) => {
    //console.log("datajs", data);
    //console.log ("datass", selectType)
    const resultado = [];
    for (let i = 0; i < data.length; i++) {
      // let dataType = data[i].type;
      //console.log (dataType);
      for (let a = 0; a < data[i][property].length; a++) {
        //console.log ("hola",dataType[d]);
        if (data[i][property][a] === type) {
          resultado.push(data[i])
        }
      }
    }
   // console.log(resultado)
    return resultado
  };
  
  
  /* exportando la función buscar por nombre de pokémon
  export const nameSearch = (dataPokemon,finalName) => {
    const searched = dataPokemon.filter((element) => {
      return element.name.includes(finalName);
    });
    return searched;
  };*/
  
  export const search = (data,text) =>{
    const search = data.filter((element) => {
      return element.name.includes(text);
    });
    return search;
  }
 