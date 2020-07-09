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
          if(personaje.evolution["next-evolution"]!=undefined){
            console.log(personaje.evolution["next-evolution"])
              let contadorDulces = personaje.evolution["next-evolution"][0].candycost;
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
          <img src=${imgPokemonSelected} class="foto">
          <p>Tipo: ${typePokemonSelected}</p>
          <p>Huevos: ${countOfCandys}</p>
        </div>
        <section id="cards">
          <span class="close">&times;</span>
          <section id="letras">
            <div class="numeroNombre">
              <p>${numPokemonSelected} ${namePokemonSelected}</p>
            </div>
            <div class="generacion">
              <p>Generación: ${generationPokemonSelected}</p>
            </div>
            <div class="especificaciones">  
              <p>Resistencia: ${resistantPokemonSelected}</p>
              <p>Debilidad: ${weaknessesPokemonSelected}</p>           
              <p>Movimiento rápido:${quickMoves}</p>
              <p>Movimiento especial:${specialAttacks}</p>           
            </div>
          </section>
        </section>
      </div>`
        console.log(quickMoves)
        modal.classList.add('modal--show')
    
      modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
    });
  }

  }