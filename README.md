# POKÉGO DEX

## Índice
* [1. Encargo del proyecto](#1-Descubrimiento-e-investigación)
* [2. Introducción](#1-Descubrimiento-e-investigación)
* [3. Investigación Contextual Pokémon Go](#1-Descubrimiento-e-investigación)
* [4. Usuarios](#2-síntasis-y-definición)
* [3. Proceso de diseño ](#3-ideación)
* [3.1 Primeros Bocetos/Brainstorming ](#3-ideación)
* [3.2 Prototipo de Baja Fidelidad ](#3-ideación)
* [3.2.1 Testeo de Prototipo de Baja Fidelidad ](#3-ideación)
* [3.3 Marca ](#3-ideación)
* [3.4 Prototipo de Alta Fidelidad](#3-ideación)
* [3.4.1 Testeo de Prototipo de Alta Fidelidad ](#3-ideación)
* [4. Presentación del producto PokéGo Dex](#4-prototipado-user-testing)
* [5. Conclusión](#5-presentación-del-producto-pokégo-dex)
* [6. Anexos Complementarios](#6-aplicación-y-anexos-complementarios)
* [7. Enlaces](#6-aplicación-y-anexos-complementarios)


***
# Encargo del Proyecto

Construir una página web complementaria al juego Pokémon GO que visualice un conjunto de datos y estadísticas que se adecúe a las necesidades del entrenador. 

**Data proporcionada:** Lista con los 251 Pokémon de la región de Kanto y Johto, junto con sus respectivas estadísticas usadas en el juego Pokémon GO.

**Cliente:** Laboratoria (sede Chile)

**Tiempo de desarrollo:** Junio 2020.

**Link de proyecto:**  http://iaracarrillo.github.io/SCL014-data-lovers

***

# Introducción

Los juegos nos pueden llevar a otro mundo, sacarnos de la vida cotidiana y la rutina, nos riven para entrenernos, resolver desafíos y entablar amistades.  La recreación siempre a estado presente en la historia y en nuestras vidas, desde los juegos deportivos hasta los primeros videojuegos en consola, conociendo con este último otro tipo de entretenimiento y deporte. 

En este proyecto hablaremos de un videojuego en particular: "Pokémon go!", que nace de juegos como Pokémon Rojo para gameboy y/o Pokémon X para Nintendo 3DS, pero Pokémon Go llega a revolucionar el mundo del entretenimiento, utilizando tecnología de realidad aumentada, basada en la localización para celulares, llevando a los jugadores a explorar las calles de su ciudad para descubrir y atrapar a todos los pokemones

Durante este proyecto utilizamos diferentes herramientas para llegar a nuestro producto, donde en cada etapa del proceso exploramos junto con el usuario lo que precisa, anhela y necesita para para resolver sus necesidades, para hacerlo utilizamos la metodología Design Thinking, donde por medio de la empatía, ideación, prototipos y testeos pudimos obtener un diseño final.

## El proceso constó de 5 fases principales:

![readme1](https://user-images.githubusercontent.com/66659886/86813011-a9ae2b00-c04d-11ea-9a19-ba91c997dd38.png)

***

# Fase 1. Descubrimiento e investigación

## investigación contextual Pokémon GO
El equipo de desarrollo de Niantic, Inc. lanzó al mercado en el año 2016 Pokémon GO, videojuego gratuito que consiste en buscar y capturar personajes de la saga Pokémon escondidos en ubicaciones del mundo real mediante GPS. El jugador debe desplazarse físicamente para capturar un pokémon e ir progresando en la colección. Ya con más experiencia, puede entrar a modo competitivo y luchar con otros usuarios.

![readme2](https://user-images.githubusercontent.com/66659886/86813020-aca91b80-c04d-11ea-9197-ca1369b01825.png)

## Entrevistas con usuarios
Como primer acercamiento al usuario, realizamos una encuesta a más de 20 jugadores de Pokémon Go activos. Nuestras preguntas iban enfocadas en conocer el perfil del entrenador, su nivel y constancia, su meta como jugador y con que data de Pokémon de las dos primeras generaciones debían contar para cumplirla. 

* Nuestro jugador promedio tiene entre 20 y 30 años.
* Juega hace 3 o 4 años.
* El mayor porcentaje de usuario juega entre 5 a 7 veces por semana. 
* El 72,7% se encuentra en el nivel 31 al 40 (40 es el nivel máximo) 
* De entre 10 opciones, los datos que consideran más relevantes al analizar una data Pokémon son los siguientes:
* Resistencia y debilidad
* Ataques: Movimiento rápido y ataque cargado
* Línea evolutiva y caramelos
* Nombre, número y generación
* Entre sus metas en Pokémon Go, los jugadores coinciden en lo siguiente
* No tienen metas, solo quieren divertirse
* Completar la Pokédex
* Competir y estar dentro de los 100 mejores a nivel nacional

![readme3](https://user-images.githubusercontent.com/66659886/86813026-adda4880-c04d-11ea-907b-0f81fa54df23.png)

## Los resultados nos ayudaron a generar 3 perfiles de usuario:
**Perfil 1: El turista**
* Juega 1 o 2 veces a la semana
* No tiene metas o expectativas del juego. Entra a la App para divertirse y pasar el rato.
* Le gustaría sociabilizar más con otros jugadores.
* Si aparece una App mejor, no dudaría en dejar de usar Pokémon Go

**Perfil 2: El coleccionista**
* Juega en promedio 5 días a la semana
* Su meta es atrapar todos los Pokémon y completar la Pokédex
* Quieren saber cada detalle de sus Pokémon y de los que falta por atrapar
* No les interesa competir, su misión es ampliar su colección

**Perfil 3: El competidor**
* Juega 7 veces a la semana
* Quiere mejorar en batalla y estar entre los 100 top nacional y/o mundial
* Les gustaría ver las fortalezas y debilidades de cada Pokémon de forma rápida para saber si es útil capturarlo o no, además de los tipos de movimiento y ataque que poseen
* Para él, las otras características del Pokémon son secundarias, busca compañeros para la batalla y aumentar de nivel
* Revisamos el perfil de cada usuario que respondió la encuesta y el perfil 3: El competidor es el más representativo. Si bien está en un nivel avanzado, consideraría los demás perfiles pues es un nivel al que el turista o coleccionista pueden aspirar. Analizamos sus requerimientos para darle forma a PokéGo Dex.

![readme4](https://user-images.githubusercontent.com/66659886/86813031-afa40c00-c04d-11ea-9c51-27310411f34e.png)

***

# Fase 2. Síntesis y definición

**Necesidad:** 
Jugador lleva más de 4 años jugando en la aplicación Pokémon Go y aún no cumple su meta (ej: llegar al nivel más alto, completar la Pokédex, etc).

**Objetivo:** 
Mejorar el nivel y captura de Pokémon en la App Pokémon Go.

**Solución:** 
Por medio de una aplicación web complementaria a Pokémon Go, entregar data Pokémon relevante para el jugador que aporte en su entrenamiento diario.

## Historias de usuario

**Historia 1:** Ficha de Pokémon (Prioridad)

*“Yo como entrenador quiero ver las fortalezas y debilidades, movimiento rápido y ataque para saber qué Pokémon me sirve contra otro”*
**Criterios de aceptación:** Al hacer click en un Pokémon en particular se abrirá una ventana en la que aparecerá dicha información.

**Historia 2:** Filtro (Prioridad)

*“Yo como entrenador quiero saber cómo evolucionar a mi Pokémon para tener su versión más poderosa”.*
**Criterios de aceptación:** La página principal contará con un tercer filtro donde aparecerá cuántos caramelos necesita tal Pokémon para evolucionar. 

**Historia 3:** Filtro (Prioridad)

*“Yo como entrenador quiero filtrar el listado de Pokémon por tipo de pokémon para que sea más fácil encontrarlo”.*
**Criterios de aceptación:** La página principal contará con dos filtros de Pokémon, por generación y por tipo.

**Historia 4:** Login

*“Como entrenador quiero ingresar a la App con mi cuenta de Pokémon Go para personalizar mi experiencia en la página”*
**Criterios de aceptación:** En el home de la página, el usuario puede ingresar haciendo click en el botón Ingresar usando mi cuenta de Pokémon Go. Al ingresar le aparecerá un mensaje de bienvenida personalizado confirmando que ya está en la página principal. Además, aparecerá su perfil desplegable al costado izquierdo. 

**Historia 5:** Login

*“Yo como usuario quiero entrar a la página registrándome con mi nombre y correo para no dar mis datos a una página tercera”*
**Criterios de aceptación:** En la página de bienvenida, el usuario puede ingresar con nombre y correo. Esa será la información que aparecerá en su perfil de usuario.

**Historia 6:** Búsqueda

*“Yo como entrenador quiero encontrar el Pokémon por su nombre para eficientar la búsqueda”*
**Criterios de aceptación:** La página principal contará con un buscador, donde el usuario podrá ingresar el nombre del Pokémon y encontrarlo. 

**Historia 7:** Filtros

*“Yo como entrenador quiero filtrar el listado de Pokémon por favorito para tener el listado de los que más me interesan”.*
**Criterios de aceptación:** La página principal contará con un filtro de favoritos que, al hacer click en el ícono de la estrella, mostrará el listado de Pokémon que el usuario ha seleccionado como los más relevantes para él.

**Historia 8:** Actualizaciones

*“Yo como entrenador quiero ver saber los últimos eventos para combatir y mejorar mi nivel”.*
**Criterios de aceptación:** La página principal contará con un ítem de “Actualizaciones” en la que Lapras, el Co-anfitrión de PokéGo Dex entregará información de los últimos eventos de Pokémon Go.

***

# Fase 3: Ideación

## Primeros bocetos / Brainstorming

![readme5](https://user-images.githubusercontent.com/66659886/86813060-b6cb1a00-c04d-11ea-824b-a53484eade65.png)

Antes de comenzar con los primeros sketches de nuestra página, realizamos una observación e inmersión directa con el usuario, para así poder definir su perfil, infografía y moodboard, donde el formulario y los estudios de mercado realizados nos ayudaron a obtener datos de cómo se debería ver nuestra aplicación.

En este proceso de ideación comenzamos primero con bocetos en papel como brainstorm para así determinar posibles contenidos, flujos y ubicación de los elementos.

Finalmente, ya definidos los conceptos claves de cómo se vería nuestra página comenzamos la marcha hacia nuestro prototipado de baja fidelidad.

***

# Fase 4: Prototipado / User testing

## Prototipos de baja fidelidad
![readme6](https://user-images.githubusercontent.com/66659886/86813072-b92d7400-c04d-11ea-8707-0c512e8aa83f.png)

Una vez realizado el brainstorm recogimos la información más importante y comenzamos a plasmarla en un programa de diseño, en este caso Illustrator, en donde esbozamos diferentes propuestas para cada página, implementando aspectos del sistema sin entrar en detalles. 

Luego de haber seleccionado nuestra guía a seguir realizamos el flujo que debería tomar nuestro prototipo de baja fidelidad (low-fi) respondiendo así a las historias de usuario. Comenzando con un registro (log in) en donde el jugador de pokémon go, puede elegir si ingresar con su cuenta oficial o su nombre, lo que lo llevará a nuestra página principal donde el usuario se encontrará con todos los pokemones y sus especificaciones, donde para poder interactuar con cada uno podrá elegir diferentes caminos, como utilizar el buscador, los filtros o navegar por la pagina hasta encontrar su pokémon, también añadimos una sección de favoritos para que así el usuario pueda guardar libremente esos pokemones que más le gusten, ya sea para combate o colección.

Para que este flujo se viera reflejado con movimiento lo llevamos a la herramienta InVision, programa que nos ayudó al diseño general de interface, la evaluación de múltiples conceptos del diseño y a realizar los testeos pertinentes para seguir avanzando. 

Enlace de Prototipo de Baja Fidelidad InVision: https://iara298869.invisionapp.com/public/share/ST17XCJ9QW#/screens/478953585

## Primer testeo remoto con usuarios
**Estructura:**
* Presentación del proyecto
* Conociendo al usuario
* Página de bienvenida
* Perfil
* Características de Pokémon
* Filtros
* Sección de favoritos
* Volver a página principal
* Cierre de la actividad

**Observaciones:**
* Usuario prefiere tener dos opciones para ingresar a la página, mediante la aplicación Pokémon GO o con su correo y usuario.
* Evolución y caramelos es de interés del usuario.
* Usuario necesita tener todos los ataques y movimientos rápidos a la vista.
* En sección de perfil, el usuario prefiere actualizaciones.
* Tamaño y peso del Pokémon no es relevante para el usuario.
* Usuario entiende y aprueba tres filtros de Pokémon, por generación, por tipo y por generación (cantidad de huevos para evolucionar).
* Lapras es un elemento interesante para la página.

## Prototipos de alta fidelidad
Con los feedback obtenidos por parte de los usuarios en la etapa anterior, decidimos tomar acciones que nos llevaran a seguir acercándonos a la solución que encaje en las necesidades y deseos del usuario. 

Primero realizamos un moodboard para obtener la paleta de colores de nuestra página, inspirandonos en la naturaleza y paisajes donde se encuentran los animales de nuestro mundo, enfocándonos también en la aplicación de pokemon go, como su logo y tonalidades de su interfaz, para así obtener el complemento perfecto con el juego.

## Moodboard. Paleta cromática. Inspiración
![readme7](https://user-images.githubusercontent.com/66659886/86813080-baf73780-c04d-11ea-96f7-fb2bcae75f80.png)

PokéGo Dex al estar enfocada como una complemento de la app Pokémon Go y no como una asociación original, no contará exactamente con los mismos colores o tipografía. Para nuestra página decidimos utilizar una paleta de azules y verdes (#001F75, #557AAF, #9AC4BA9AC4BA) que engloban nuestro moodboard e inspiración del juego, y también utilizamos una paleta de rosados y morados (#A395B7,#D5A0B8) para asemejar la pokedex de pokemon go para nuestra sección de favoritos, como tipografía utilizamos Encode Sans Expanded para los títulos y Montserrat Regular para el contenido.

Al igual que con el prototipo de baja fidelidad incorporamos las propuestas a Illustrator para así ir acotando la información que íbamos a utilizar para llevar nuestro prototipo de alta fidelidad.

Para imitar el aspecto de nuestro prototipo y ver el comportamiento de nuestra  interfaz utilizamos la herramiento Figma, donde añadimos los colores, iconos, tipografía y lo que queríamos que realizará nuestro usuario como objetivos. 
Enlace de Prototipo de Alta Fidelidad Figma: https://www.figma.com/proto/66SnQRSfL2KGvUAbGCsEbk/Untitled?node-id=2%3A14&scaling=min-zoom

## Segundo testeo con usuarios
![readme8](https://user-images.githubusercontent.com/66659886/86813091-bcc0fb00-c04d-11ea-9590-cb74c3aa7a79.png)

A diferencia del testeo anterior, esta vez quisimos testear otras funciones, como ver el modo en el que el usuario se movía por la página para así revisar que le hiciera sentido la interfaz, además de evaluar el contenido de las tarjetas, los filtros y la sección de favoritos. Para ello, utilizamos Maze, donde testeamos con 9 usuarios el prototipo de alta fidelidad. 

**Enlace de Maze:** https://maze.design/preview/mazes/13844573
En ella les entregamos diferentes misiones al usuario, la primera era que de qué modo ingresarían a la página, si lo harían directamente con su cuenta de Pokemon Go u otra, donde 8 ingreso con su cuenta y 1 con otra.

La segunda tarea era que abrieran una de las tarjetas de pokémon, donde los 9 supieron cómo abrir una y así ver toda la información. La tercera misión era seleccionar un filtro, donde los 9 usuarios se inclinaron por presionar el de tipos. Luego, se les entregó la tarea de revisar la sección de actualizaciones y favoritos, donde todos lograron completar las tareas.

Como sexta misión, queríamos comprobar si el usuario relacionaba el logo con volver a inicio o si lo hacía por medio de la estrella como o había hecho anteriormente para ingresar, donde 2 usuarios apretaron la estrella y 5 el logo.

Finalmente, le hicimos una serie de preguntas a los usuarios para saber si les ayudaban los filtros, las tarjetas y la sección de favoritos para ser mejores jugadores.

Con toda esta información pudimos determinar que lo que ellos entendían como filtro de evolución lo relacionaban con la cantidad de huevos necesarios para evolucionar un pokémon y no por la cadena evolutiva, que los colores de las tarjetas en la página principal las relacionaban con los tipos y no por color de pokémon, y que le faltaba la especificación de ataques rápidos a la tarjeta. Todos estos cambios fueron incorporados al producto final

***

# Fase 5: Presentación del producto PokéGo Dex

En base a un extenso proceso de investigación con usuarios reales de Pokémon GO, les presentamos PokéGo Dex, aplicación web complementaria a Pokémon Go que permite visualizar datos de 251 Pokémon, de la región de Kanto y Johto, con sus respectivas estadísticas usadas en el juego con el objetivo de fortalecer el entrenamiento del jugador y así llevar su experiencia a otro nivel.

![readme10](https://user-images.githubusercontent.com/66659886/86813109-c185af00-c04d-11ea-962c-bf74b6d2bc30.png)

![readme9](https://user-images.githubusercontent.com/66659886/86813097-bf235500-c04d-11ea-8de5-e9e9304a6fdd.png)

![readme11](https://user-images.githubusercontent.com/66659886/86813113-c34f7280-c04d-11ea-967a-6b5f4d00d8cc.png)

![readme12](https://user-images.githubusercontent.com/66659886/86813125-c8142680-c04d-11ea-9e2e-5777b5f17a64.png)

![readme13](https://user-images.githubusercontent.com/66659886/86813136-ca768080-c04d-11ea-8a36-631a91a3c65d.png)

![readme14](https://user-images.githubusercontent.com/66659886/86813151-cd717100-c04d-11ea-8ba4-2508159b7e09.png)

***

# Fase 6: Aplicación y anexos complementarios

**Trello:** https://trello.com/b/3fWFhJC9/datalovers
