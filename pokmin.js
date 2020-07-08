//solo para llamar la data al pagina de main
import basePokemon from './data/pokemon/pokemon.js';
// importando las funciones desde data.js
import { evolutions, generation, type, search} from './data.js'
////convirtiendo el objeto pokemon a un array
const dataPokemon = basePokemon.pokemon;
//console.log (dataPokemon)
function enterbtn() {
    document.getElementById("root").style.display = "block";//mostrar
  }
 
function toPage() {
    document.getElementById("root").style.display = "none"; //esconder
}
  
 
  
  // constante que contiene información del atributo ID donde se va a imprimir en el html
  const container = document.getElementById("root")
  //for que recorrerá el largo de la data
  for (let i = 0; i < dataPokemon.length; i++) {
    // variable que almacena la data recorrida
    let pokemon = dataPokemon[i]
    let name= pokemon.name;
    let img= pokemon.img;
    let num= pokemon.num;
    let type= pokemon.type;
    //let evolutions= pokemon."next-evolution"."candy-cost";
    let generation= pokemon.generation["name"];
    //let eggs= pokemon.egg.next-evolution.candy-cost;
    let quickMoves=[];
    for (let i = 0; i < pokemon.quickmove.length; i++){
      let movimientoRapido = pokemon.quickmove[i];
      //console.log(movimientoRapido.name);
      quickMoves.push(movimientoRapido.name)
    }
    let specialAttacks=[];
    for (let i = 0; i < pokemon.specialattack.length; i++){
      let ataqueEspecial = pokemon.specialattack[i];
      //console.log(ataqueEspecial.name);
      specialAttacks.push(ataqueEspecial.name)
    }
    let countOfCandys=[];
    if(pokemon.evolution["next-evolution"]!=undefined){
      for (let i = 0; i < pokemon.evolution["next-evolution"].length; i++){
        let contadorDulces = pokemon.evolution["next-evolution"][i];
        //console.log(ataqueEspecial.name);
        countOfCandys.push(contadorDulces.candycost)
      }
    }
    console.log(name,num,generation,quickMoves,specialAttacks,countOfCandys)


    //creando una variable que contiene los valores a imprimir
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
      
    function modalImpri(event) {
      modal.innerHTML ="";
      
      const pokemon = dataPokemon.find(function (personaje) {
        return personaje.name === event.target.id
      })
      
      modal.innerHTML +=
      `
      <div class="card-modal" id="card-modal">
        <div class="imgPokemon">
          <img src=${pokemon.img} class="foto">
          <p>Tipo: ${pokemon.type}</p>
          <p>Huevos: ${pokemon.countOfCandys}</p>
        </div>
        <section id="cards">
          <span class="close">&times;</span>
          <section id="letras">
            <div class="numeroNombre">
              <p>${pokemon.num} ${pokemon.name}</p>
            </div>
            <div class="generacion">
              <p>Generación: ${pokemon.generation["name"]}</p>
            </div>
            <div class="especificaciones">  
              <p>Resistencia: ${pokemon.resistant}</p>
              <p>Debilidad: ${pokemon.weaknesses}</p>           
              <p>Movimiento rápido:${pokemon.quickMoves}</p>
              <p>Movimiento especial:${pokemon.specialAttacks}</p>           
            </div>
          </section>
        </section>
      </div>`
        
        modal.classList.add('modal--show')
    
      modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
      });
    }
  
    }