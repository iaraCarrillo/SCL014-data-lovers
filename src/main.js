//Se impora (llama) la data a main.js
import basePokemon from './data/pokemon/pokemon.js';
//Se importan las funciones (Filtros) que se encuentran ubicados en data.js a main.js
import { filterCandy, filterGeneration, filterType, filterSearch} from './data.js'
//Se convierte el objeto pokemon en un array
const dataPokemon = basePokemon.pokemon;
//crear otra constante de data Pokémon
//const dataGeneration = basePokemon.filter('pokemon' => 'pokemon.generation.name' === "kanto";

///IMPRIMIR TARJETAS en Contenedor (root)///
//Se crean constantes que contienen información del atributo ID, donde se va a imprimir html por medio de Javascript
const container = document.getElementById("root")
const foto = document.getElementsByClassName("foto");
//For que recorrerá el largo de toda la data
for (let i = 0; i < dataPokemon.length; i++) {
  //Con esto le decimos al computador que ahora el pokemon que estamos viendo es el que esta en este ciclo
  let pokemon = dataPokemon[i]
  //Se declaran variables con información que usaremos en nuestra tarjeta
  let name= pokemon.name;
  let img= pokemon.img;
  let num= pokemon.num;
  //Variabe "imprimir" que contendrá nuestra información visible para la tarjeta (Html)
  let imprimir = `
  <section id="tarjetas">
    <div class="starTarjeta">
      <button>
        <label for="radio2">★</label>
      </button>
    </div>
    <img id="${name}" src=${img} class="foto">
    <div class="infoPokemon">
        <p>${num}.${name}<p> 
    </div>
  </section>`
//Se imprime llamando a la nueva variable según lo especificado en la variable anterior
  container.innerHTML += imprimir
}

///MODAL TARJETA///
//Constante para obtener el modal
const modal = document.getElementById("modal");
//For que recorrerá nuestra clase foto
for (let i = 0; i <foto.length; i++) {
  //A nuestra variable img le asignamos la lista "foto"
  let img = foto[i];
  //Se llama a img por medio del evento click se imprimen la tarjeta
  img.addEventListener('click', modalImpri)
}
//Mostramos todos los pokemon
let namePokemonSelected;//Nombre
let numPokemonSelected;//Número
let imgPokemonSelected;//Imagen
let typePokemonSelected;//Tipo
let countOfCandys;//un string de candys
let quickMoves=[];//son listas de movimientos rapidos, tambien se les llama arrays
let specialAttacks=[];//son listas de ataques especiales, tambien se les llama arrays
let generationPokemonSelected;//Generación
let weaknessesPokemonSelected;//Debilidad
let resistantPokemonSelected;//Resistencia
function modalImpri(event) {
  modal.innerHTML ="";//Se inicializa modal (.innerHTML devuelve o establece la sintaxis HTML)
  //Find devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada
  const pokemonSelected = dataPokemon.find(function (personaje) {
    //personaje.name es el event.target.id que es el nombre
    if(personaje.name == event.target.id){ //Comparación estricta 
      //Se asignan variables con la información a visualizar
      namePokemonSelected = personaje.name; //Nombre
      numPokemonSelected = personaje.num; //Número
      imgPokemonSelected = personaje.img; //Imagen
      typePokemonSelected = personaje.type; //Tipo
      generationPokemonSelected = personaje.generation["name"]; //Generación
      weaknessesPokemonSelected = personaje.weaknesses; //Debilidad
      resistantPokemonSelected = personaje.resistant; //Resistencia
      //Capas hasta llegar a candycost
      if(personaje.evolution["nextEvolution"]!=undefined){
        console.log(personaje.evolution["nextEvolution"])
        let contadorDulces = personaje.evolution["nextEvolution"][0].candycost;
        console.log("contador de dulces",contadorDulces);
        //countOfCandys.push(contadorDulces)
        countOfCandys=contadorDulces;
        console.log(countOfCandys)
      }else{
        countOfCandys="No evoluciona";
      }
      //Por medio de un for se recorren todos los movimientos rápidos de un pokémon
      for (let i = 0; i < personaje.quickmove.length; i++){
        let movimientoRapido = personaje.quickmove[i];
      //Push añade uno o más elementos al final de un array y devuelve la nueva
        quickMoves.push(movimientoRapido.name)
      }
      //Por medio de un for se recorren todos los ataques especiales de un pokémon
      for (let i = 0; i < personaje.specialattack.length; i++){
        let ataqueEspecial = personaje.specialattack[i];
      //Push añade uno o más elementos al final de un array y devuelve la nueva
        specialAttacks.push(ataqueEspecial.name)
      }
      return personaje
    }
  //return personaje.name === event.target.id 
  })
  //.innerHTML devuelve o establece la sintaxis HTML
  modal.innerHTML += //Operador +=, abreviación de suma
  `<div class="card-modal" id="card-modal">
    <div class="imgPokemon">
      <img src=${imgPokemonSelected} class="imgModal">
      <p>Tipo:</p>
      <p class="modalInline">${typePokemonSelected}</p>
      <p>Huevos:</p>
      <p class="modalInline">${countOfCandys}</p>
    </div>
    <div class="infoPokemonModal">
      <section id="cards">
        <div>
          <button id="close" class="close">x</button>
        </div>
        <section id="letras">
          <div class="numeroNombre">
            <p>${numPokemonSelected}</p> 
            <p>${namePokemonSelected}</p>
          </div>
          <div class="generacion">
            <p>Generación: ${generationPokemonSelected}</p>
          </div>
          <div class="especificaciones">  
            <p>Resistencia:</p>
            <p class="modalInlineWhite">${resistantPokemonSelected}</p>
            <p>Debilidad:</p>  
            <p class="modalInlineWhite">${weaknessesPokemonSelected}</p>         
            <p>Movimiento rápido:</p>
            <p class="modalInlineWhite">${quickMoves}</p>
            <p>Movimiento especial:</p>  
            <p class="modalInlineWhite">${specialAttacks}</p>           
          </div>
        </section>
      </section>
    </div>
  </div>`
  //CERRAR TARJETA
  const buttonClose = document.getElementById("close");
  buttonClose.addEventListener("click", function(){
    modal.style.display = "none";
    quickMoves=[];//son listas de movimientos rapidos, tambien se les llama arrays
    specialAttacks=[];
  });
  modal.style.display = "";
}


///LLAMAR FILTROS///
//FILTRO CARAMELOS
//Constante que contiene información del atributo ID
const typeCandy = document.getElementById("candy");
//Llamando la constante para que cuando escuche el evento ejecute la función
typeCandy.addEventListener("change", () => {
  //variable que alamacena el valor de la opción seleccionada por el usuario
  let selectCandy = typeCandy.options[typeCandy.selectedIndex].value
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  container.innerHTML = "";
  //variable que almacena la función filtar por tipo exportada desde data.js con sus parámetros
  let positionCandy = filterCandy(dataPokemon, 'candy', selectCandy);
  let count = 0;
  //for que recorrerá el largo de la data
  for (let i = 0; i < positionCandy.length; i++) {
    count++;
    let nameByCandy = positionCandy[i].name
    let numByCandy = positionCandy[i].num
    let imgByCandy = positionCandy[i].img
    //variable que contiene los valores a imprimir
    let prinType = `
    <section id="tarjetas">
      <div class="starTarjeta">
        <button>
          <label for="radio2">★</label>
        </button>
      </div>
      <img id="${nameByCandy}" src=${imgByCandy} class=foto>
      <div class="infoPokemon">
          <p>${numByCandy}.${nameByCandy}<p> 
      </div>
    </section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${prinType}<p>`
  }
  //For que recorre la clase  foto de mi linea de impresión
  for (let i = 0; i < foto.length; i++) {
    let img = foto[i];
    img.addEventListener('click', modalImpri)
  // console.log("imprimir", img)
  }
  //se trae la función modal
  modalImpri
  console.log(count)
});


//FILTRO TIPO
// constante que contiene información del atributo ID
const typeUser = document.getElementById("type");
//llamando la constante para que cuando escuche el evento ejecute la función
typeUser.addEventListener("change", () => {
  //variable que alamacena el valor de la opción seleccionada por el usuario
  let selectType = typeUser.options[typeUser.selectedIndex].value
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  container.innerHTML = "";
  //variable que almacena la función filtar por tipo exportada desde data.js con sus parámetros
  let positionType = filterType(dataPokemon, 'type', selectType);
//  let count = 0;
  //for que recorrerá el largo de la data
  for (let i = 0; i < positionType.length; i++) {
//  count++;
    let nameByType = positionType[i].name
    let numByType = positionType[i].num
    let imgByType = positionType[i].img
    //console.log(nameByType)
    //variable que me almacena el recorrido el valor del recorrido de la debilidades y todo lo que contiene adentro  de (type)
    
    //variable que contiene los valores a imprimir
    let prinType = `
    <section id="tarjetas">
      <div class="starTarjeta">
        <button>
          <label for="radio2">★</label>
        </button>
      </div>
      <img id="${nameByType}" src=${imgByType} class=foto>
      <div class="infoPokemon">
          <p>${numByType}.${nameByType}<p> 
      </div>
    </section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `${prinType}`
  }
  //For que recorre la clase foto de mi linea de impresión
  for (let i = 0; i < foto.length; i++) {
    let img = foto[i];
    img.addEventListener('click', modalImpri)
   // console.log("imprimir", img)
  }
  //se trae la función modal
  modalImpri
  console.log(count)
});


//FILTRO BUSCA POKEMON
//llamo al botón con el id para que cuando escuche el evento ejecute la función
document.getElementById('okBtn').addEventListener('click', () => {
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  document.getElementById('root').innerHTML = '';
    //variable que almacena el valor el nombre del pokemon escrito por el usuario
  const name = document.getElementById('searchPokemon').value;
  //Se asigna variable
  const finalName = name.toLowerCase();//Se pasan las letras a minusculas para que se puedan buscar en la data
  //variable que almacena la función buscar por nombre de pokemón exportada desde data.js con sus parámetros
  let chosenName = (filterSearch(dataPokemon,finalName));
  //for que recorrerá el largo de la data
  for (let i = 0; i <chosenName.length; i++) {
    let nameBySearch = chosenName[i].name
    let numBySearch = chosenName[i].num
    let imgBySearch = chosenName[i].img
    //variable que contiene los valores a imprimir
    let printName =`
    <section id="tarjetas">
      <div class="starTarjeta">
        <button>
          <label for="radio2">★</label>
        </button>
      </div>
      <img id="${nameBySearch}" src=${imgBySearch} class=foto>
      <div class="infoPokemon">
          <p>${numBySearch}.${nameBySearch}<p> 
      </div>
    </section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `${printName}`
  }
  console.log(foto)
  //For que recorre la clase  foto de mi linea de impresión
  for (let i = 0; i <foto.length; i++) {
    let img = foto[i];
    img.addEventListener('click', modalImpri)
    // console.log("imprimir", img)
  }
  //se trae la función modal
  modalImpri
});








//FILTRO GENERACIÓN
const typeGeneration = document.getElementById("generation");
typeGeneration.addEventListener("change", () => {
  let selectGeneration = typeGeneration.options[typeGeneration.selectedIndex].value
  container.innerHTML = "";
  let positionGeneration = filterGeneration(dataPokemon, selectGeneration);
  console.log(positionGeneration)
  for (let i = 0; i < positionGeneration.length; i++) {
    let nameByGeneration = positionGeneration[i].name
    let numByGeneration = positionGeneration[i].num
    let imgByGeneration = positionGeneration[i].img
    let printGeneration = `
    <section id="tarjetas">
      <div class="starTarjeta">
        <button>
          <label for="radio2">★</label>
        </button>
      </div>
      <img id="${nameByGeneration}" src=${imgByGeneration} class=foto>
      <div class="infoPokemon">
          <p>${numByGeneration}.${nameByGeneration}<p> 
      </div>
    </section>`
  container.innerHTML += `${printGeneration}`
  }
  for (let i = 0; i < foto.length; i++) {
    let img = foto[i];
    img.addEventListener('click', modalImpri)
  modalImpri
  }
});