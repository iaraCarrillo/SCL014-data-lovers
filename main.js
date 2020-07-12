//solo para llamar la data al pagina de main
import basePokemon from './data/pokemon/pokemon.js';
// importando las funciones desde data.js
import { filterCandy, generation, filterType, filterSearch} from './data.js'
////convirtiendo el objeto pokemon a un array
const dataPokemon = basePokemon.pokemon;
//console.log (dataPokemon)
function enterbtn() {
    document.getElementById("root").style.display = "block";//mostrar
}
 
function toPage() {
    document.getElementById("root").style.display = "none"; //esconder
}
  
///////imprimiendo los personajes en la segunda página luego del evento click ////

// constante que contiene información del atributo ID donde se va a imprimir en el html
const container = document.getElementById("root")
//for que recorrerá el largo de la data
for (let i = 0; i < dataPokemon.length; i++) {
  let pokemon = dataPokemon[i]//con esto le decimos al computador que ahora el pokemon que estamos viendo es el que esta en este ciclo
  let name= pokemon.name;
  let img= pokemon.img;
  let num= pokemon.num;
  
  let imprimir = `
  <section id="tarjetas">
    <div class="starTarjeta">
      <button>
        <label for="radio2">★</label>
      </button>
    </div>
    <img id="${name}" src=${img} class=foto>
    <div class="infoPokemon">
        <p>${num}.${name}<p> 
    </div>
  </section>`
  //se imprime llamando a la nueva variable según lo especificado en la variable anterior
  container.innerHTML += imprimir


  /////Modal/////
  //Obtener el modal
  const modal = document.getElementById("modal");
  //Abrir el modal
  const foto = document.getElementsByClassName("foto");
  //console.log("Foto", foto)
  //foto.addEventListener ('click',modalImpri)
  for (let i = 0; i <foto.length; i++) {
    let img = foto[i];
    img.addEventListener('click', modalImpri)
    //console.log("imprimir", img)
  }
  let namePokemonSelected;
  let numPokemonSelected;
  let imgPokemonSelected;
  let typePokemonSelected;
  let countOfCandys=[];
  let quickMoves=[];//son listas de movimientos rapidos, tambien se les llama arrays
  let specialAttacks=[];
  let generationPokemonSelected;
  let weaknessesPokemonSelected;
  let resistantPokemonSelected;
  function modalImpri(event) {
    modal.innerHTML ="";//se inicializa modal
    const pokemonSelected = dataPokemon.find(function (personaje) {
      if(personaje.name == event.target.id){
        console.log(personaje.name);//este personaje.name es el event.target.id que es el nombre
        //let siglePokemon = new pokemon;
        namePokemonSelected = personaje.name;
        numPokemonSelected = personaje.num;
        imgPokemonSelected = personaje.img;
        typePokemonSelected = personaje.type;
        generationPokemonSelected = personaje.generation["name"];
        weaknessesPokemonSelected = personaje.weaknesses;
        resistantPokemonSelected = personaje.resistant;
        if(personaje.evolution["nextEvolution"]!=undefined){
          console.log(personaje.evolution["nextEvolution"])
            let contadorDulces = personaje.evolution["nextEvolution"][0].candycost;
          console.log("contador de dulces",contadorDulces);
            countOfCandys.push(contadorDulces)
            countOfCandys=contadorDulces;
          console.log(countOfCandys)
        }else{
          countOfCandys="No evoluciona";
        }
        for (let i = 0; i < personaje.quickmove.length; i++){
          let movimientoRapido = personaje.quickmove[i];
          //console.log(movimientoRapido.name);
          quickMoves.push(movimientoRapido.name)
        }
        for (let i = 0; i < personaje.specialattack.length; i++){
          let ataqueEspecial = personaje.specialattack[i];
          //console.log(ataqueEspecial.name);
          specialAttacks.push(ataqueEspecial.name)
        }
        return personaje
      }
      //return personaje.name === event.target.id
      
    })
    
    modal.innerHTML +=
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
    </div>
        </section>
      </section>
    </div>`
      console.log(quickMoves)
      modal.classList.add('modal--show')
  
      modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
      });

//CERRAR TARJETA
      function closeModal (){
        let buttonClose = document.getElementById("close");
        buttonClose.addEventListener("click", function(){
        modal.style.display = "none";
//      container.style.display = "block";
        });
    }
    closeModal();
  } 
}

//Llamar Filtros
//FILTRO CARAMELOS
  // constante que contiene información del atributo ID
  const typeCandy = document.getElementById("candy");
  //llamando la constante para que cuando escuche el evento ejecute la función
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
    //console.log(nameByCandy)
    //variable que me almacena el recorrido el valor del recorrido de la debilidades y todo lo que contiene adentro  de (type)
    
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
  let count = 0;
//for que recorrerá el largo de la data
  for (let i = 0; i < positionType.length; i++) {
    count++;
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


// Función buscar por nombre de pokémon
//llamo al boton con el id para que cuando escuche el evento ejecute la función
document.getElementById('okBtn').addEventListener('click', () => {
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  document.getElementById('root').innerHTML = '';
  //variable que almacena el valor el nombre del pokemon escrito por el usuario
  const name = document.getElementById('search-pokemon').value;
  //constante que primero (charAt) obtiene, con el nombre, al personaje en la cadena + tomo el nombre en array
  const finalName = name.charAt().toUpperCase() + name.slice(1).toLowerCase();
  //variable que almacena la función buscar por nombre de pokemón exportada desde data.js con sus parámetros
  let chosenName = (filterSearch(dataPokemon,finalName));
  //for que recorrerá el largo de la data
  for (let i = 0; i <chosenName.length; i++) {
    //variable que me almacena el valor del recorrido hecho por el for
    let dataName = chosenName[i]
    //variable que contiene los valores a imprimir
    let printName =`
    <section id="tarjetas">
      <div class="starTarjeta">
        <button>
          <label for="radio2">★</label>
        </button>
      </div>
      <img id="${dataName.name}" src=${dataName.img} class=foto>
      <div class="infoPokemon">
          <p>${dataName.num}.${dataName.name}<p> 
      </div>
    </section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${printName}<p>`
  }
    //For que recorre la clase  foto de mi linea de impresión
    for (let i = 0; i <foto.length; i++) {
      let img = foto[i];
      img.addEventListener('click', modalImpri)
     // console.log("imprimir", img)
    }
    //se trae la función modal
    modalImpri
});