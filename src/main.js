//pagina1
console.log("test");
function submitForm(){
    if(typeof(localStorage) != "undefined"){
        localStorage.name = document.getElementById("nameUser").value;
    }
    document.getElementById("form").submit();
}
//pagina2
function setData(){
    if(typeof(localStorage) != "undefined"){
        document.getElementById("writeName").innerHTML = localStorage.name;
    }
}


/*

import { example } from './data.js';
// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';



const pokedataOrder = pokedataFilter;
const orderArray = document.querySelector('#dropDown');
orderArray.addEventListener('change', () => {
    //Reemplaza root
  document.getElementById('root').innerHTML = '';
  let orderSelect = orderArray.value;
  let typePoke = selectType.value;
  let resultOrder = filterPokeType (pokedataOrder, typePoke);

  showPokedex(filterPokeOrder(resultOrder, orderSelect));
});

console.log(example, data);
}
*/