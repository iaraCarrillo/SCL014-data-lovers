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
  }

  

    /////Modal/////
    //Obtener el modal
    const modal = document.getElementById("modal");
    //Abrir el modal
    const foto = document.getElementsByClassName("foto");
    //console.log("Foto", foto)
    //foto.addEventListener ('click',modalImpri)
    for (let i = 0; i <foto.length; i++) {
      let img = foto[i];
      img.addEventListener('click', printModal)
      //console.log("imprimir", img)
    }
  
  function printModal(event){
    let pokemonEncotrado = dataPokemon.find(function (personaje) {
        return personaje.name === event.target.id
      }
    )
    let infoSelectedPokemon = `
    <div class="card-modal" id="card-modal">
      <div class="imgPokemon">
        <img src=${pokemonEncotrado.img} class="foto">
        <p>Tipo: ${pokemonEncotrado.type}</p>
        <p>Huevos: ${pokemonEncotrado.next-evolution["candy-cost"]}</p>
      </div>
      <section id="cards">
        <span class="close">&times;</span>
        <section id="letras">
          <div class="numeroNombre">
            <p>${pokemonEncotrado.num} ${pokemonEncotrado.name}</p>
          </div>
          <div class="generacion">
            <p>Generación: ${pokemonEncotrado.generation["name"]}</p>
          </div>
          <div class="especificaciones">  
            <p>Resistencia: ${pokemonEncotrado.resistant}</p>
            <p>Debilidad: ${pokemonEncotrado.weaknesses}</p>`
            //cambie el nombre de quick-move en pokemon.js a quickmove
            for (let i = 0; i < pokemonEncotrado.quickmove.length; i++){
              let movimientoRapido = pokemonEncotrado.quickmove[i];
              console.log(movimientoRapido.name);
              `<p>Movimiento rápido:${movimientoRapido.name}</p>`
            }
            //cambie el nombre de special-attack en pokemon.js a specialattack
            for(let i = 0; i < pokemonEncotrado.specialattack.length; i++){
              let movimientoEspecial = pokemonEncotrado.specialattack[i];
              console.log(movimientoEspecial.name);
              `<p>Movimiento especial:${movimientoEspecial.name}</p>`
            }
            `
          </div>
        </section>
      </section>
    </div>`;
    console.log(infoSelectedPokemon);
    modal.innerHTML = infoSelectedPokemon;
    
    modal.classList.add('modal--show')
    
      modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
    });
  }  
  