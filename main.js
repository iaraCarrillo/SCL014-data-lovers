//solo para llamar la data al pagina de main
import basePokemon from './data/pokemon/pokemon.js';
// importando las funciones desde data.js
import { evolution, generation, type, search} from './data.js'
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
    // variable que almacena la data recorrida
    let pokemon = dataPokemon[i]
    //creando una variable que contiene los valores a imprimir
    let imprimir = `
    <section id="tarjetas">
      <div class="starTarjeta">
        <button>
          <label for="radio2">★</label>
        </button>
      </div>
      <img id="${pokemon.name}" src=${pokemon.img} class=foto>
      <div class="infoPokemon">
          <p>${pokemon.num}.${pokemon.name}<p> 
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
      
    function modalImpri(event) {
      modal.innerHTML ="";
      //console.log("identificarlo", event.target)
      const pokemonEncotrado = dataPokemon.find(function (personaje) {
        return personaje.name === event.target.id
      })
      //console.log("Hola", pokemonEncotrado)
      modal.innerHTML +=
        `<div class="card-modal" id="card-modal">
        <section id="cards">
        <span class="close">&times;</span>
            <section id="letras">
            <img src=${pokemonEncotrado.img} class="foto">
              <p>Número: ${pokemonEncotrado.num}<p>
              <p>Nombre de Pokemón: ${pokemonEncotrado.name}<p>
              <p>Generación: ${pokemonEncotrado.generation}<p>
              <p>Resistencia: ${pokemonEncotrado.resistant}<p>
              <p>Debilidad: ${pokemonEncotrado.weaknesses}<p>
              
              <p>Movimientos rápidos: ${pokemonEncotrado.quickmove}<p>
              <p>Ataques especiales: ${pokemonEncotrado.specialattack}<p>
              <p>Tipo: ${pokemonEncotrado.type}<p>
              <p>Huevos: ${pokemonEncotrado.candycost}<p>  
            </section>
        </section>
        </div>`
        
        modal.classList.add('modal--show')
    
      modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
    });
  }

  }

