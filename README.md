# Taller Nivelación

## Modulo Lógica, Lógica de Programación y Programación con Javascript

1. ¿Qué es la lógica en el con texto de la programación? Y explicar por qué es importante en el desarrollo web Frontend.

Es la base del conocimiento en programación y la habilidad para poder manejar las herramientas que brindan los lenguajes y la máquina, de la manera más óptima (eficiente y eficaz). Podría también explicarse como una metodología o manera de desarollar instrucciones secuenciales que logran un objetivo, sea funcional o visual.

Es necesario para el desarrollo web Frontend ya que hay que hacer uso de herramientas (librerías, cálculos) que debemos organizar de manera secuencial para que cumpla las tareas específicas solicitadas por un usuario (cliente) de la manera más efectiva y automatizada.

2. Definir el concepto de algoritmo y proporcionar un ejemplo sencillo de un algoritmo relacionado con la lógica de programación.

El algoritmo hace referencia a los pasos o intrucciones que se implementan mediante la lógica de programación para llegar al objetivo mencionado anteriormente. Estas intrucciones deben ser finitas, precisas, definidas y legibles.

Un ejemplo de un algoritmo, podría ser la descripción medianamente detallada de la rutina diaria personal, de tal manera que se describan las instrucciones paso a paso y de manera lógica para llegar al final del día:

- Despertarse
- Mirar la hora
- Levantarse de la cama
- Dirigirse a tomar la tohalla
- Entrar al baño
- Cerrar la puerta
- Desvestirse
- Entrar a la ducha
- Abrir la llave de la ducha
- Mojarse
- Así sucesivamente...

3. ¿Qué son estructuras de control en la programación?, ¿Cuáles son los tipos de estructuras de control y las estructuras más comunes de cada tipo Describir al menos
dos tipos de estructura de control, explicar por qué son importantes y proporcionar ejemplos de cada uno de cómo se utilizan en el desarrollo web Frontend.

Las estructuras de control es la manera como están construidas las sentencias dentro del código, dependiendo de una condición. Estas sentencias modifican el flujo de ejecución del algoritmo. Las estructuras de control pueden ser secuenciales que son ejecutadas una después de la otra en secuencias determinadas. Dentro de esta categoría, también entran las estructuras condicionales simples (IF) que evalúan una condición y son ejecutadas cuando dicha condición es cierta, las estructuras condicionales múltiples (IF, ELSE IF, ELSE) que consiste en las mismas características de la anterior mencionada, pero cuando la condición no se cumple, también se ejecutarán ciertas acciones, es decir, se ejecutarán otras acciones si se cumplen codiciones definidas diferentes a la inicial o si no se cumple ninguna.

Las estructuras de control son básicas en el desarrollo Frontend, debido a que son las herramientas que permiten ejecutar sentencias a partir de una condición, y de esta manera están estructuradas las páginas web: Si oprimo un botón, sucede algo, si un valor que el usuario ingresa en un campo no corresponde a lo solicitado, entonces debe rechazarse el proceso. Por tanto, son fundamentales para el correcto manejo y control del usuario al objetivo final.

4. Describir cómo se declaraban variables y constantes en JavaScript antes de la introducción de ECMAScript 6 (ES6). Explicar cómo ES6 mejoró la declaración de variables y constantes, y mencionar los problemas que esta mejora resuelve en el desarrollo web Frontend.

Las variables antes de ECMAScript 6 se declaraban con la palabra "var", seguida del nombre de la variable. Dicha declaración cumplía tanto de manera global como local y los únicos alcances que tenían estas variables eran en todo el scope (global) y dentro de una función (local). Sin embargo, con la actualización, la nueva declaración de variables permitió acotar el alcance de las variables. Al usar "let", permite definir las variables que van a cambiar su valor posteriormente (además, solo existirá en la porción de código que la contiene), mientras que "const", servirá para declarar objetos y variables cuyo valor no cambiará a lo largo del código.

Además, el intérprete de Javascript por defecto, siempre leerá primero las variables definidas con "var" para poder definir cuales variables son globales y cuales no, y luego, Javascript leerá el resto de variables y de código, lo que quiere decir que el intérprete leerá dos veces el mismo código, pudiendo indicar poca optimización en el procesamiento. Por tanto, al evitar la declaración de variables por medio de "var", el código será más legible y óptimo hablando del rendimiento de la máquina. 

5. ¿Cómo se declaran las funciones en JavaScript y cuál es la diferencia entre una declaración de función, una expresión de función y una función de flecha (arrow function)? Proporcionar ejemplos de cada una.

- Una declaración de función es la manera de definir una función. Se utiliza la palabra "function" seguida del nombre de la función, una lista de parámetros entre paréntesis, y el cuerpo de la función entre llaves {}.

function saludar(mensaje) {
  console.log(mensaje);
}
saludar("¡Hola Mundo!");

- Una expresión de función es cuando se le asigna una función anónima (sin nombre definido) a una variable. La función se puede utilizar como cualquier otro valor.

var saludar = function(mensaje) {
  console.log(mensaje);
};
saludar("¡Hola Mundo!");

La principal diferencia es que la función no tiene un nombre directo, pero la variable saludar ahora contiene la función.

- Las funciones de flecha son una sintaxis más corta y moderna introducida en ECMAScript 6. Utilizan la notación de flecha "=>"

var cuadrado = x => x * x;
console.log(cuadrado(5));

Como se puede observar, también permite usar la sintaxis de manera más simple y reducida, es posible hacer retornos implícitos y no tienen su propio objeto "this", todos los contextos internos de la función heredan el valor de las variables previamente definidas.

6. ¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en el contexto de estas razones.

- Dentro del desarrollo web Frontend, es usual tener interacción con el usuario en cuando a funcionalidad (reiteración de procesos) y obtención de información, ya sea por medio de formularios o campos simples. En este sentido, al encapsular la lógica del procesamiento de dicha información en una función, puede ser reutilizada fácilmente en múltiples lugares sin tener que duplicar el código.

- Por otra parte, si el flujo de información se complejiza debido a la escalabilidad de la aplicación web o porque la operación a realizar es complicada, se hace necesario colocar esa lógica en una función, pues facilita la tarea de depurar el código, realizar cambios o correcciones. Únicamente serían necesarios los cambios en esa porción de código.

- Cuando se divide el código en porciones que cumplen una función o tarea específica, mejora la legibilidad del código y facilita la comprensión de la funcionalidad de cada parte de la aplicación.

Según lo anterior, las funciones flecha ayudan a entender de una manera más rápida (legibilidad y reducción de sintaxis) el código, pues al ser más concisas, pueden implementarse en funciones que no suelen tener mucha extensión, que son simples y así, mantener el código más compacto.

7. ¿Cuál es la diferencia entre parámetro y argumento?

Un parámetro es la representación de un valor de entrada que una función espera recibir. Los parámetros son declarados en la definición de la función y se comportan como una variable local. Mientras que los argumentos hacen referencia al valor real que es ingresado a la función cuando esta es invocada o llamada. En otras palabras, al pasar los argumentos a una función, se le asignan esos valores a los parámetros de la misma.

8. Definir el concepto de Callback y proporcionar un ejemplo práctico.

Un callback es una función que se pasa como argumento a otra función (función invocada dentro de otra) y que se ejecuta después de que la función contenedora ha completado la operación principal.

En el contexto de una operación asincrónica, un ejemplo podría ser:

import axios from 'axios';

URL_API = "http://apiListaDeNumeros.com"; // Endpoint almacenado en una variable global

function getDataFromApi(callback) {
  setTimeout(function() {
    const data = axios.get(URL_API); // Obtención de datos de manera asincrónica
    callback(data); // Invocación de callback
  }, 2000);
}

function duplicar(data) { // Definición de la función callback
  const duplicados = data.map(numero => numero * 2);
  console.log(duplicados);
}

getDataFromApi(duplicar); // Invocación de la función asincrónica, pasandole como argumento el callback.

9. ¿Qué es el hoisting en JavaScript y cómo afecta a las variables y funciones?Proporcionar ejemplos de hoisting en declaraciones de variables y funciones.

El hoisting es una característica de Javascript donde las declaraciones de las funciones o variables son movidas al inicio del alcance o contexto (scope) al momento de ser compilado el código en cuestión. Es fundamental destacar que únicamente se hoistea la declaración, más no la inicialización.

- En variables, Javascript se comporta de la siguiente manera:

console.log(saludo);  // Respuesta: undefined
var saludo = 'Hola';
console.log(saludo);  // Respuesta: "Hola"

Como la declaración variable se hoistea al inicio del scope, la variable existe al ser llamada en el console.log, pero no tiene un valor definido (undefined) porque la inicialización es ejecutada posteriormente.

- En el caso de las funciones: 

suma(1, 3);  // Respuesta: 4

function suma(a, b) {
  console.log(a + b);
}

En esta ocasión, la declaración de la función al inicio del contexto de ejecución por medio del hoisting, permite que esta esté disponible al comienzo y pueda ser ejecutada o llamada antes de su inicialización. Es importante anotar que las funciones anónimas o asignadas a variables (expresión de función) no se comportan de manera igual, debido a que su declaración es hoisteada, más no su inicialización y si es ejecutada o llamada antes, no encontrará la función y el compilador retornará un error.

10.	Definir brevemente el concepto de objeto en JavaScript y cuál es la visión general sobre este concepto. Indicar, también cómo se declaran estas estructuras de datos.

11.	¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en un objeto?

14.	¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden almacenar? 

Respuesta para a las preguntas 10, 11 y 14:

El concepto de objeto de manera general, se asocia al concepto de objeto en la realidad. Los objetos son elementos que contienen características y propiedades. Al momento de declarar un objeto en Javascript, debe realizarse con {} y en su interior, manejará una lógica de "llave: valor", donde la llave será la propiedad o característica y el valor corresponderá a la definición o especificación de dicha propiedad. Por ejemplo; si tomamos una fruta como objeto, ésta tiene ciertas caracteristicas en la vida real; ejemplo: nombre, tamaño, color, textura... Al llevarlo a Javascript, podría expresarse de la siguiente manera:

const fruta = {
  nombre: "Manzana",
  tamaño: "mediano",
  color: "verde",
  textura: "lisa",
  utilidad: function() {
    console.log("La manzana sirve para alimentarse");
  }
  ...
}

Cada propiedad es separada por una coma y los valores de cada propiedad, pueden ser de tipo numérico, cadena de caracteres, booleano, arreglo, otro objeto e incluso métodos, según se requiera. Los métodos; como se pudo observar en el ejemplo, se definen como una función (en este caso, anónima) que es asignada como valor de una propiedad dentro del objeto.

Los objetos en Javascript permiten mejorar la lógica de programación, legibilidad y de acceso a la información debido a las siguientes razones: 

- Encapsulación, modularidad y organización;
- Reusabilidad de código;
- Abstracción, simplificación y flexibilidad

12. Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.

En Javascript, hay dos maneras de acceder a las propiedades de un objeto, mediante la notación de punto y mediante la notación de corchetes:

const persona = {
  nombre: "Juan",
};

console.log(persona.nombre); // Notación de punto
// Respuesta: "Juan"

console.log(persona['nombre']); // Notación de corchetes
// Respuesta: "Juan"

En ambos casos se obtiene el mismo resultado; sin embargo, hay casos particulares en los cuales es más conveniente usar un método sobre el otro. La notación de punto es más concisa y legible a la hora de programar; además, se usa con mayor frecuencia si la propiedad ya es conocida y no tiene caraceres especiales o espacios. En contraparte, la notación de corchetes es útil para acceder a la propiedad si esta contiene caracteres específicos o espacios; adicionalmente, al tratarse de un acceso por nombre de la propiedad, es posible acceder de manera dinámica a las propiedades del objeto.

13.	¿Existe alguna forma de recorrer las propiedades de un objeto? En caso negativo, explicar por qué no es posible y en caso positivo proporcionar un ejemplo. Mencionar una situación en la cual sea muy útil recorrer las propiedades de un objeto.

Hay varias maneras de recorrer las propiedades de un objeto, las más usadas son mediante bucles tales como for (for (let propiedad in objeto)) o forEach. Es importante mencionar que para usar el forEach, es necesario extraer un arreglo o lista con las propiedades del objeto usando algunos métodos de Javascript: "Object.keys()" o "Object.entries()" y esto se logra de la siguiente manera:

const persona = {
  nombre: "Santiago",
  edad: 30,
  ciudad: "Medellín",
};

Object.keys(persona).forEach(propiedad => {
  console.log(`${propiedad}: ${persona[propiedad]}`);
});

Object.entries(persona).forEach(([llave, valor]) => {
  console.log(`${llave}: ${valor}`);
});

//Ambas retornan la siguiente respuesta -> nombre: "Santiago"...

También es posible usar estos métodos de Object usando el bucle for.

Recorrer las propiedades es útil cuando es necesario validar datos para envío de información asincrónica por medio de solicitudes HTTP, procesar datos dinámicamente o realizar operaciones usando las propiedades como recurso.

15.	¿Qué es un array en JavaScript y por qué son esenciales?

16.	 ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo.

Respuesta a las preguntas 15 y 16.

Un array es un tipo de elemento o estructura usada para almacenar y organizar los datos. Es una colección donde cada elemento interno puede ser de tipo numérico, cadena de caracteres, booleano, otros arrays, objetos o funciones.

Facilita la gestión de grupos de datos o elementos, es es posible acceder a esos valores, únicamente usando un índice iterativo. Permite realizar operaciones en cada elemento del array o realizar acciones específicas para cada elemento. Los arreglos son fáciles de manipular, pues permiten agregar, eliminar y modificar elementos dinámicamente durante la ejecución del programa.

Para acceder a un elemento del arreglo, como fue mencionado, basta con hacer uso del índice mediante corchetes o si se requiere recorrer el arreglo, se puede hacer de manera sencilla con un bucle cuyo elemento iterador sea el índice del arreglo:

const numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]); // Respuesta: 1

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]); // Respuesta: 1, 2, 3, 4, 5
}

17.	Mencionar al menos tres funciones de arrays y describir su utilidad en la programación web.

18. Proporcionar un ejemplo de cómo se utiliza una función de array para transformar y filtrar datos en un array.

Respuesta para las preguntas 17 y 18.

- map():

Crea un nuevo array aplicando una función a cada elemento del array original. Es útil para transformar o modificar cada elemento del array sin modificar el array original. Además, esta función de arreglo siempre retorna implícitamente el nuevo arreglo con la información modificada, por tanto, es importante a la ora de requerir una respuesta inmediata de la operación realizada sobre cada uno de los elementos de un arreglo u objeto.

const newArray = array.map(item => item * item);

- filter():

Crea y retorna un nuevo array con todos los elementos que cumplan o coincidan una condición especificada por una función. Es útil para extraer elementos que cumplen ciertos criterios.

const newArray = array.filter(item => item != null);

- find():

Este método realiza una operación similar a filter, pues itera sobre el arreglo, buscando el elemento que cumpla con cierta condición facilitada en la función; sin embargo, retorna el primer elemento encontrado. Es útil si sólo se requiere encontrar un único item dentro del arreglo.

const foundElement = objectArray.find(object => object.id = 1);

Ejemplo de transformación y filtrado con funciones de arreglo:

const books = [
  { title: 'Cien años de soledad', author: 'Gabriel García Márquez', pages: 432 },
  { title: 'El señor de los anillos', author: 'J.R.R. Tolkien', pages: 1200 },
  { title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', pages: 863 },
];

const summarizedBooks = books.map(book => ({
  summary: `${book.title} - ${book.author}`,
  pages: book.pages,
}));

const longBooks = summarizedBooks.filter(book => book.pages > 800); // Utilizando filter() para obtener solo los libros con más de 800 páginas

console.log(summarizedBooks);
console.log(longBooks);

## Módulo sobre HTML, CSS y Responsive Design

1. ¿Qué significa HTML y cuál es su función en el desarrollo web?

HTML significa "Hypertext Markup Language" (Lenguaje de Marcado de Hipertexto). Es un lenguaje de marcado que estructura el contenido de una página web mediante etiquetas, permitiendo a los desarrolladores web describir y definir la estructura por medio de componentes anidados en una página. Es importante mencionar que las etiquetas o marcas que definen un elemento deben contener la etiqueta de apertura y cierre correspondientes.

2. ¿Cuál es la estructura básica de un documento HTML? Describir las etiquetas esenciales.

La estructura básica de un documento HTML está definida de la siguiente manera: 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<header></header>
<body></body>
<footer></footer>
</html>

<!DOCTYPE html> Indica al navegador que el documento tiene como base la versión estandar de HTML 5.

<html lang="en"></html> Esta etiqueta representa la raiz de todo el documento HTML; en otras palabras, el resto de etiquetas debes estar contenidas por esta.

<head></head> Contiene la información descriptiva del sitio y los metadatos tales como el formato de transformación Unicode de 8 bits (UTF-8) para la visualización de caracteres, escalado, anchura del contenido y título de la página en la pestaña del navegador.

<header></header> Contiene el encabezado de la página, puede ser una barra de navegación.

<body></body> Contiene el cuerpo del documento (contenido).

<footer></footer> Contiene el pie de página del documento.

3. ¿Qué es CSS y cuál es su propósito en el desarrollo web?

CSS significa "Cascading Style Sheets" (Hojas de Estilo en Cascada) siendo un lenguaje de estilos enfocado en el diseño de los componentes o elementos estructurados en el documento HTML.

Algunas de las principales ventajas pueden ser: mejorar la estética, presentación y la legibilidad de una página web, consistencia en el diseño de las diferentes páginas, pues puede mantenerse un mismo estilo haciendo uso de CSS. Ayuda a la modularización, teniendo en cuenta que los estilos están separados del esquema general HTML; además, otorga adaptabilidad y responsividad según el dispositivo que visualice la página, entre muchos otros.

4. ¿Qué son selectores CSS, cuáles son los principales tipos de selectores y porqué es importante entender la especificidad en el contexto de las hojas de estilo en cascada (CSS)? Describir al menos tres tipos de selectores CSS y cómo la especificidad afecta a la aplicación de estilos en un proyecto de desarrollo web Frontend. Proporcionar ejemplos de situaciones en las que se utiliza la especificidad de selectores para resolver conflictos de estilos.

Los selectores son un tipo de apuntador a cualquier elemento o conjunto de elementos dentro del documento HTML, el cual aplica un patrón de estilos de manera selectiva.

Los principales selectores en CSS, son:

- Selectores de tipo: selección por nombre de etiqueta.

p {
  color: blue;
}

- Selectores de clase: selección por nombre definido en el atributo "class" de alguna etiqueta.

.text {
  font-weight: bold;
}

- Selectores de id: selección por nombre definido en el atributo "id" de alguna etiqueta.

#navbar {
  background-color: gray;
}

La especificidad en CSS determina qué patrón de estilos se aplicará cuando hay conflictos. Cada selector tiene una especificidad asociada. Cuando dos o más reglas afectan al mismo elemento, la regla con la mayor especificidad tiene prioridad. El orden de especificidad está dado de la siguiente manera:

* < Selectores de tipo < Selectores de clase < Selectores de id < Estilos en línea < !important

Ejemplos de especificidad:

p {
  color: red;
}

.miParrafo {
  color: green;
}

La regla de clase (.miParrafo) prevalecerá sobre la regla de tipo, incluso si el selector de tipo (etiqueta) tiene un color definido.

Ahora, teniendo lo siguiente:

<div class="contenedor">
  <p id="miParrafo">Texto</p>
</div>

.contenedor p {
  color: red;
}

#miParrafo {
  color: blue;
}

La regla que selecciona el párrafo dentro del contenedor (div.contenedor p) tiene más peso que la regla de selección por id, por lo que el texto se mostrará en rojo.

Fue necesario la extensión superior a las 200 palabras en esta respuesta, debido a que con los ejemplos de CSS, en su estructura, es necesario incluir varias palabras.

5. Explicar las diferencias entre los estilos en línea (inline), estilos internos (embedded) y estilos externos (external) en CSS. Indicar cuál de los tres estilos es el recomendado usar y por qué.

Los estilos en línea se aplican directamente a un elemento específico dentro del HTML, utilizando el atributo "style", significando así que puede ser una manera rápida de aplicar estilos.

<p style="color: blue; font-size: 16px;">Texto</p>

Los estilos internos se definen dentro del documento HTML, generalmente en la sección <head></head>, utilizando la etiqueta <style></style>, esta forma añade una separación de estilos más limpia que los estilos en línea.

<head>
  <style>
    button {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <button>Click</button>
</body>

Los estilos externos se definen en un archivo CSS separado que luego se enlaza con el documento HTML utilizando la etiqueta <link> en la sección <head>.

<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>

Siempre es recomendable usar esta última configuración, ya que aporta a la mantenibilidad del código, teniendo en cuenta que el código está centralizado facilita la actualización o depuración del mismo. Además, los estilos separados en un módulo externo, permite que sean llamados desde otro documento HTML, pudiéndose reutilizar.

6. ¿Qué es flexbox y cómo se utiliza para el diseño de páginas web?

7. Explicar cómo se emplean las propiedades flexbox y explicar la función de las principales propiedades en la creación de diseños flexibles.

Respuesta a las preguntas 6 y 7.

Flexible Box Layout (Flexbox) es un modelo de diseño en CSS que brinda una forma eficiente y sencilla de estructurar y organizar el contenido de algún elemento o contenedor; sin importar que los tamaños de dichos elementos sean conocidos o dinámicos. Flexbox es utilizado para la distribución del espacio entre elementos, orden de contenido, alineación y espaciado automático.

.contenedor {
  display: flex; // El contenido se visualiza en forma de fila por defecto
}

.contenedor {
  display: flex;
  justify-content: center; // Alineación horizontal al centro
  align-items: center; // Alineación vertical al centro
}

.contenedor {
  display: flex;
  justify-content: space-between; // Espaciado automático entre elementos. Si se quiere espaciado automático al rededor de los elementos, es muy común hacer uso del valor space-around
}

.elemento {
  order: 2; // Cambia el orden visual
  flex-grow: 1; // El elemento crecerá para llenar el espacio disponible
}

8. ¿Qué es CSS Grid Layout y en qué se diferencia de flexbox?

9. Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.

Respuesta a las preguntas 8 y 9.

Grid Layout es otro modelo de CSS que no se centra en la organización de los elementos de manera unidimensional, en este cas, es en forma de filas y columnas (bidimensional). Este orden de ideas, Grid Layout distribuye el espacio y organiza los elementos en ambas direcciones; horizontal, vertical. Además, a diferencia de flexbox, esta propiedad permite especificar tamaños fijos o flexibles tanto para las filas como para las columnas, permitiendo una gestión más efectiva de la disposición de los elementos.

.contenedor {
  display: grid;
}

.contenedor {
  display: grid;
  grid-template-rows: 100px 200px; // Dos filas de tamaños específicos
  grid-template-columns: repeat(3, 1fr); // Tres columnas de tamaño flexible
  gap: 10px; // Espacio de 10'x entre cada elemento de la columna
}

.elemento {
  grid-row: 1 / 2; //Ocupa filas de la 1 a la 2
  grid-column: 1 / 3; // Ocupa columnas de la 1 a la 3
}

10.	¿Qué significa el diseño responsivo en el contexto del desarrollo web?

El diseño resposivo en desarrollo web, hace referencia al diseño de una pagina web que se adapta al tamaño de la pantalla del dipositivo que la está visualizando, y así, brindar una experiencia de usuario adecuada.

Las características principales de un diseño responsivo son: adaptabilidad, flexibilidad, navegación intuitiva y que solo haya una única fuente base de código.

11. Enumerar al menos tres técnicas o estrategias utilizadas para lograr el diseño responsivo en una página web.

- Media Queries: Permiten aplicar estilos específicos según las características del dispositivo, como el ancho de la pantalla, la altura, la orientación y la resolución.

body { // Diseño de estilos general
  font-size: 16px;
}

@media screen and (max-width: 500px) {
  body {
    font-size: 14px;
  }
}
// Diseño de Media Query para tenga ese patrón de estilos hasta que la pantalla supere 500px (pantallas pequeñas).

- Flexbox y Grid Layout: Estos permiten una distribución eficiente de elementos en filas y columnas, adaptándose fácilmente a diferentes tamaños de pantalla.

.contenedor {
  display: flex;
  justify-content: space-between;
}

.contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
// Se ajusta automáticamente al tamaño de la pantalla cuyo comportamiento estará dado entre 200px y 1fr.

- Uso de librerías: Existen variedad de librerías de acceso libre en internet que puede ayudar al manejo tanto de estilos como el diseño responsive. En su mayoría, ofrecen recursos adaptativos y fáciles de usar con el objetivo de agilizar el diseño y la codificación. Algunas librerías pueden ser: Bootstrap, Chakra, Tailwind...

## Módulo sobre DOM e Interacción con el DOM

1. ¿Qué es el DOM (Modelo de Objeto de Documento) en el contexto de la programación web?

El DOM o Document Object Model (Modelo de Objeto de Documento) es una representación estructurada de un documento HTML, el cual abarca tanto la interactividad dinámica entre el usuario con la página como el diseño. Se hace necesario apuntar que el DOM organiza los elementos del documento de forma jerárquica, donde cada elemento, componente o contenedor, es representado como un nodo en el árbol de jerarquías; el nodo más alto es el objeto Document, pues a partir de éste, se peude acceder al resto de nodos, atributos y propiedades. Finalmente, el DOM permite la manipulación de eventos, de tal manera que dada una acción, se ejecute una funcionalidad específica aportando a la interacción con el usuario. 

2. ¿Cuál es la diferencia entre el DOM y el HTML en una página web?

3. ¿Porqué es importante entender y manipular el DOM en el desarrollo web Frontend?

9. ¿Cuál es la importancia de la manipulación del DOM en la creación de aplicaciones web dinámicas e interactivas?

Respuesta a las preguntas 2, 3 y 9.

Aunque el DOM y el HTML son conceptos muy relacionados, representan dos cosas diferentes. HTML hace referencia al enmaquetado o estructuración de la página web; además, siempre será estático. Mientras que el DOM se centra más en la representación estructurada de la interactividad y funcionalidad, es el modelo que le da dinamismo al documento HTML. Este último es construído automáticamente cuando el navegador carga el documento, siendo ahí donde se genera la jerarquía en forma de árbol. Se hace necesario detacar que el DOM se genera a partir del documento HTML y proporciona una interfaz para acceder y modificar los elementos dentro de este.

Es muy importante el DOM para los desarrolladores web, ya que con éste, es posible modificar y actualizar dinámicamente el contenido, los estilos y la interacción de la página en respuesta a eventos del usuario o cambios en los datos. Posibilita la creación de aplicaciones web modernas, adaptativas y eficientes, mejorando la usabilidad y proporcionando una experiencia más amena. Es fundamental para la comunicación entre la visualización de los datos o interfaz de usuario con la conexión asincrónica de peticiones al servidor.

Para poder entender cuán crucial es el DOM, cabe resaltar que éste facilita enormemente la manipulación de las siguientes características de una página moderna: 

- Interactividad del usuario
- Actualización dinámica de contenido
- Validación y flujo de formularios
- Comunicación asíncrona
- Animaciones y transiciones
- Desarrollo SPA (Single Page Application)
- Responsividad

4. ¿Qué son los eventos del DOM y cuál es su función en una página web?

son acciones o sucesos que ocurren en una página web y que pueden ser detectados y gestionados mediante JavaScript. Estos eventos se dan gracias a la interacción entre el usuario y la página. Como parte del DOM, permite dicha interatividad y dinamismo según quién esté usando la aplicación, lo requiera. Permiten a los desarrolladores web asociar funciones o scripts específicos con las acciones del usuario, realizando cambios en el DOM y actualizaciones de contenido.

Algunos de los eventos más usados en programación web, son:

Click: Se dispara cuando un elemento es clicado

Cambio (change): Se activa cuando el valor de un elemento de formulario cambia

Tecla Presionada (keydown, keyup): Estos eventos ocurren cuando una tecla del teclado es presionada (keydown) o liberada (keyup).

Envío de Formulario (submit): Ocurre cuando se envía un formulario.

Carga (load): Se dispara cuando todos los recursos de la página, como imágenes y scripts, han sido completamente cargados.

5. Proporcionar ejemplos de eventos prácticos y comunes, como “click”, “submit” y “load o DOMContentLoad”.

6. ¿Por qué es importante manejar eventos en la interacción usuario-web y cómo se añaden controladores de eventos a los elementos del DOM?

Respuesta a las preguntas 5 y 6.

Manejar eventos en la interacción usuario-web es fundamental para crear experiencias dinámicas e interactivas como fue mencionado anteriormente. Estos permiten que la aplicación responda a las acciones del usuario, como clicks, teclas presionadas, envíos de formularios, entre otros. Si se desea añadir un evento del DOM en algún elemento del documento HTML, basta con usar el método de Javascript: addEventListener(), pasándole como parámetro el evento que debe escuchar y la función callback que es disparada cuando el evento sucede.

- Click:

<button id="btn">Enviar</button>

<script>
  document.getElementById("btn").addEventListener("click", () => alert("¡Click!"));
</script>

- Submit:

<form id="form">
  <input type="text" id="nombre" placeholder="Nombre">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("form").addEventListener("submit", (e) => { // Asocia un manejador de eventos al enviar el formulario
    e.preventDefault();
    const nombre = document.getElementsById("nombre").value;
    console.log("Nombre:", nombre);
  });
</script>

- DOM Content Loaded: 

<script>
    document.addEventListener("DOMContentLoaded", () => console.log("El DOM ha sido completamente cargado."));
</script>

7. Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript.

- getElementById: selecciona un elemento del DOM basándose en su atributo de identificación "id"

<div id="element">Elemento</div>

<script>
  const element = document.getElementById("element"); // Selecciona el elemento por su id
</script>

- getElementsByClassName: selecciona todos los elementos que tienen una clase específica y devuelve una colección de nodos (árbol jerárquico de clase).

<form>
  <input type="text" class="input" placeholder="Nombre">
  <input type="submit" class="input" value="Enviar">
</form>

<script>
  const elementos = document.getElementsByClassName("input"); // Selecciona todos los elementos con la clase "input"
</script>

- querySelector:  selecciona el primer elemento que coincida con un selector CSS proporcionado, puede ser de tipo clase, id o etiqueta. Si hay varios elementos que coinciden, solo se selecciona el primero.

<p class="first-p">Primer párrafo</p>
<p id="second-p">Segundo párrafo</p>

<script>
  var firstP = document.querySelector(".first-p"); // Selecciona el elemento con la clase first-p
  var secondP = document.querySelector("#second-p"); // Selecciona el elemento con el id second-p
</script>

8. ¿Cómo se crea un nuevo elemento HTML y se agrega al DOM utilizando JavaScript?

Para crear crear y agregar elementos en Javascript, se usan los métodos "createElement()" y "appendChild()", respectivamente. Son usados de la siguiente manera:

var newElement = document.createElement("div");
// Acá se modifica el elemento antes de ser enviado documento de HTML o agregarlo al DOM.
document.body.appendChild(newElement);

10. Explicar brevemente los conceptos “event bubbling” y “event delegation” en el contexto de eventos del DOM.

11. ¿Por qué son relevantes los conceptos “event bubbling” y “event delegation” en la gestión de eventos en páginas web con múltiples elementos interactivos?

Respuesta a las preguntas 10 y 11.

En el contexto de eventos del DOM, el "event bubbling" se refiere al crecimiento o avance de un evento a nivel de jerarquía, desde el elemento objetivo hasta el elemento raíz del documento. Este proceso permite la captura del evento en elementos superiores. Por otro lado, el "event delegation" es una técnica que consiste en asignar un único controlador de eventos a un elemento padre de varios subelementos similares. Este controlador determina el elemento específico que desencadenó el evento al verificar el objetivo del evento dentro del controlador, por tanto, esta última ayuda a reducir la cantidad de controladores a implementar, cuando se trata de múltiples elementos similares dentro de un elemento superior común. Ambos conceptos son fundamentales para comprender y gestionar la interacción de eventos en el desarrollo web, permitiendo la creación de interfaces interactivas y eficientes.

## Módulo sobre Comunicación con el Servidor (Storage, Promesas, Asincronías y Peticiones HTTPS)

1. Definir brevemente el concepto de localStorage y sessionStorage.

2.	Describir las diferencias claves entre localStorage y sessionStorage.

Respuesta para las preguntas 1 y 2.

LocalStorage y sessionStorage son dos modalidades de almacenamiento de información en el navegador (web) para que los desarrolladores puedan almacenar, manipular y transferir datos desde la interfaz de manera constante (sesión). Existen dos cosas importantes a la hora de hablar de estas modalidades de almacenamiento: persistencia y alcance. En el caso de localStorage los datos tienen una persistencia a largo plazo y permanecen incluso después de cerrar y volver a abrir el navegador. En contraparte, en sessionStorage, la información no persiste más allá de la sesión actual del usuario, por tanto, al cerrar el navegador, la información se pierde.

En cuanto al alcance, para el primer caso, los datos almacenados están disponibles para todas las ventanas y pestañas que pertenecen al mismo dominio, mientras que en el otro, están limitados a la ventana o pestaña que crea los datos.

3. ¿Por qué son útiles para almacenar datos en el navegador y cuál es su límite de capacidad?

Es útil almacenar los datos en el navegador, ya que brindan muchas alternativas a procesos que se pueden volver engorrosos, mejorar la eficiencia y la experiencia. Además, aporta persistencia del lado del cliente y reduce la cantidad de datos que debe transferir el cliente al servidor, mejorando así el rendimiento.

La capacidad varía según el navegador y puede oscilar entre 5 MB y 10 MB o más. Sin embargo, es importante tener en cuenta que este límite es por dominio, pues cada uno tiene su propio espacio de almacenamiento local. Generalmente, localStorage debe tener una mayor capacidad de almacenamiento, debido a que la información perdura por mucho más tiempo.

Fuente: https://platzi.com/blog/local-storage-html5/#:~:text=Las%20caracter%C3%ADsticas%20de%20Local%20Storage,a%20diferencia%20de%20las%20cookies

4. ¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web?

5. Explica el concepto de asincronía en programación y cómo las promesas ayudan a manejar operaciones asincrónicas.

Como parte de la actualización de ECMAScript 6, las promesas son modelos estructurados como parte de la calidad en las operaciones asincrónicas, pues permiten que se ejecuten dichas operaciones de manera limpia y efectiva, controlando el resultado y los errores. Además, ofrecen una manera de escribir código asincrónico de una manera más intuitiva y sintácticamente más clara. 

En una promesa hay tres estados: pending (pendiente), fulfilled (resuelto), rejected (rechazado).

Son principalmente usadas también para evitar el callback hell, pues para realizar una sola operación asincrónica, se requería de muchos callbacks anidados en los que se podía complicar su lectura. Facilita la gestión de errores con el estado de la promesa.

6. Proporciona un ejemplo de cómo se utiliza una promesa para realizar una operación asincrónica, como una solicitud de red.

function asyncRequest(url) {
  return fetch(url) // Gestor de promesas, quién hace la petición y devuelve el resultado.
    .then(response => {
      if (!response.ok) {
        console.log(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

asyncRequest('Acá iría el endpoint de red')
  .then(data => {
    console.log('Datos:', data);
  })
  .catch(error => {
    console.error('Error:', error);
});

7. ¿Qué es JSON Server y cómo se utiliza en el desarrollo web?

8. ¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend?

Respuesta a las preguntas 7 y 8.

Es un paquete que permite crear una fake APIREST, usando un archivo JSON como base de datos. Simula un servidor y una base de datos sin necesidad de realizar un proceso de backend. Esta herramienta es fundamental para la creación rápida de prototipos y maquetas de interfaces sin esperar la implementación completa del backend, por tanto, facilita la colaboración y sinergia entre equipos. Posibilita también poder realizar pruebas de interfaz de usuario.

Para usarse, primero es necesario instalar la herramienta a nivel global con el siguiente comando: npm install -g json-server. Se crea un archivo JSON (debe tener la extensión .json) e ingresar los datos que debe contener.

{
  "users": [
    { "id": 1, "name": "Juan"},
    { "id": 2, "name": "María"}
  ]
}

Ahora, es necesario poner a correr o iniciar el servidor con el siguiente comando: json-server --watch nombreDelArchivoJson.json (es importante que debe ingresarse la ruta en la cual se encuentra el archivo, es decir, si el archivo está dentro de una carpeta llamada data, en el comando se ingresaría data/nombreDelArchivoJson.json).

Finalmente, JSON Server arroja una URL que simulará un endpoint de conexión al servidor y es el link que servirá para realizar las solicitudes o peticiones entre cliente-servidor.

Fuente: https://www.npmjs.com/package/json-server

9. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y las palabras claves async/await?

Las principales diferencias, son:

- Manejo de errores: 

Al usar .then().catch(), los errores se gestionan por medio de .catch(), mientras que usando async/await, dentro de la funció asincrónica, es necesario definir un controlador de errores tal como try/catch.

- Unión de promesas

En el primer caso, se usa .then() para unir o encadenar promesas consecuentes, por tanto, se tendría un resulado con mayor cantidad de anidaciones; mientras que en el caso de async/await, el código es más fluido tal cual como una función, únicamente es necesario definir al momento de ralizar la solicitud que dicha operación será asicrónica, siendo antecedida por el await.

- Legibilidad del código

Es importante destacar que el uso de async/await siempre será más fácil de leer, interpretar y mantener para el desarrollador, debido a que no suele tener estructuras anidadas.

Fuente: https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/

10. Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar solicitudes (GET, POST, PUT, PATCH y DELETE) a través de ella.

Luego de haber seguido el proceso con JSON Server, una fake APIREST, se puede contruír de la siguiente manera, para cada verbo HTTP:

Suponiendo que el endpoint es el siguiente: 
const URL_BASE = "http://localhost:3000";

- Solicitud GET:

fetch(`${URL_BASE}/users`)

- Solicitud POST:

Objeto a enviar por medio de POST:
const newObject = {
  name: "Sara"
}

fetch(`${URL_BASE}/users`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newObject),
})

- Solicitud PUT:

Usuario que se quiere modificar: id=1

fetch(`${URL_BASE}/users/1`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Jorge' }),
})

- Solicitud PATCH:

fetch(`${URL_BASE}/users/1`, {
  method: 'PATCH', // Patch solo modifica pequeños fragmentos del objeto. No actualiza todo el objeto
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Eliana' }),
})

- Solicitud DELETE:

Usuario que se quiere eliminar: id=1

fetch(`${URL_BASE}/users/1`, {
  method: 'DELETE',
})

Para captura de errores y recepción del resultado de la petición, se puede usar el siguiente código en todos los casos:

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

11. Describe las diferencias entre Fetch y Axios como métodos para realizar solicitudes HTTP en JavaScript.

Fetch y Axios son métodos para realizar solicitudes HTTP en JavaScript. Fetch es una API nativa que utiliza promesas y se integra bien con las características modernas de JavaScript, pero requiere el manejo de JSON en su manipulación. Por otro lado, Axios es una biblioteca que simplifica las solicitudes actuando como cliente HTTP, ofrece un formato más conveniente para trabajar con datos JSON y proporciona características adicionales, como la compatibilidad con navegadores antiguos, la cancelación de solicitudes y la protección contra ataques CSRF, lo que lo hace más flexible en algunos escenarios.

Fuente: https://barcelonageeks.com/diferencia-entre-fetch-y-axios-js-para-realizar-requests-http/

12.	¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas?

Las peticiones HTTP son fundamentales en aplicaciones web modernas por su papel clave en la carga dinámica de datos, la interactividad del usuario y la comunicación entre servicios. Permiten la integración de APIs externas, la implementación de autenticación y son esenciales para la construcción de aplicaciones eficientes. El manejo de peticiones HTTP es crucial para optimizar el rendimiento, la seguridad y la experiencia del usuario en el entorno web actual.

13.	Proporciona ejemplos de cómo se utilizan Fetch y Axios para realizar solicitudes GET y POST.

17. Proporciona un ejemplo de cómo se puede manejar un error en una promesa al realizar una solicitud de red.

Respuesta a las preguntas 13 y 17.

En el punto 10, se proporcionó ejemplos de la utilización de Fetch al realizar las solicitudes GET y POST; sin embargo, para el caso de Axios, se tiene:

Luego de instalar Axios e importarlo, se procede a crear el objeto necesario para la petición PUT.

async function postRequest(data) {
  try {
    const response = await axios.post('Acá debe ir la URL del endpoint dada por JSON Server u otro simulador de fake APIRest', data);
    console.log('data:', response.data);
  } catch (error) {
    console.error('error:', error);
  }
}

const data = {
  title: 'Post',
  body: 'Content',
  userId: 1,
};

postRequest(data);

En el caso de GET, es mucho más sencillo:

async function getRequest() {
  try {
    const response = await axios.get('URL Endpoint');
    console.log('data:', response.data);
    return response.data;
  } catch (error) {
    console.error('error:', error);
  }
}

const data = getRequest() // Obtención de los datos para su posterior uso

14.	Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo web.

15.	Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch.

Respuesta a las preguntas 14 y 15.

El manejo de errores al trabajar con promesas en el desarrollo web es esencial para asegurar la solidez y fiabilidad de las aplicaciones. Este enfoque garantiza una experiencia del usuario positiva al ofrecer mensajes de error claros y amigables. Facilita la depuración y el mantenimiento, permitiendo la identificación y resolución eficiente de problemas.

En cuanto al asincronísmo, el manejo de errores es especialmente crucial para prevenir rechazos de peticiones no capturados que podrían resultar en comportamientos impredecibles.

Cuando no se usa el bloque catch para capturar los errores, es muy probable que cuando haya un rechazo, dicho va a dirigir al entorno global de Node o al objeto "window", que puede conllevar a una mala experiencia de usuario.

myPromise
.then(response => {
  console.log('data:', response);
})
.catch(error => {
  console.error('error:', error); // Este bloque se ejecutará cuando la promesa sea rechazada
});

Se pueden encadenar varios tipos de errores en la promesa, de la siguiente manera:

.catch(TypeError, error => {
  console.error('Error de tipo:', error.message); // Si el error es de tipo TypeError
})
.catch(error => {
  console.error('Error general:', error.message); // Otros tipos de errores
})

16. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y la estructura try/catch?

.then().catch()

Estructura de métodos.
Encadenamiento de errores.
Funciona para objetos promesa.
Útil en funciones asíncronas.

try/catch

Estrctura de bloques.
Error en un solo bloque.
Maneja excepciones de manera asincrónica.
Útil en funciones asíncronas y síncronas.