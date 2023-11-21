// PREGUNTAS PRÁCTICAS MODULO 1

// 1. Escribir un programa con JavaScript que resuelva el siguiente problema: Dada una lista (o	array) de números enteros, encontrar el número más grande de la lista y mostrarlo en consola. No se debe usar la función Math.max(), ni .forEach().

const intNumArray = [-2, 2, -1, 50390, -15, -12, -1, 6];

// sort() ordena los números con el criterio de ordenamiento pasado como parámetro (callback). Si el criterio retorna un número negativo, "a" iría primero dentro del nuevo arreglo. Si es un número positivo,"b" primero y si retorna 0, es porque ambos números son iguales y no necesitaría cambios.

// intNumArray.sort(function (a, b) {
//     return a - b; 
// });

const newArray = [];

for (let i = 0; i < intNumArray.length; i++) {
    for (let j = 0; j < intNumArray.length; j++) {     
        if(intNumArray[i] > intNumArray[j] && !newArray.includes(intNumArray[j])){
            newArray.push(intNumArray[j]);
        }
    }
}

for (let k = 0; k < intNumArray.length; k++) {
    if (!newArray.includes(intNumArray[k])) {
        console.log('Max number:', intNumArray[k]);
    }
}

console.log('---------------------------------------------------');

// 2. Escribir una función en JavaScript que tome dos números como argumentos y devuelva su suma. Luego, escribir la misma función utilizando una función flecha (arrow function) y comparar ambas declaraciones. Llamar a ambas funciones con valores de ejemplo y mostrar los resultados en la consola del navegador.

const num1 = 1;
const num2 = 5;

function addFun(num1, num2) {
    return num1 + num2;
}

console.log(`Adding ${num1} and ${num2} using function =`, addFun(num1, num2));

const addArrow = (num1, num2) => {
    return num1 + num2;
}

console.log(`Adding ${num1} and ${num2} using arrow function =`, addArrow(num1, num2));

console.log('---------------------------------------------------');

//3. Escribir una función en JavaScript que reciba un array de números como argumento y utilizar la función de array para calcular la suma de todos los números pares en el array. Luego, llamar a la función con un array de ejemplo y mostrar el resultado en la consola del navegador.

//Usando el arreglo del Módulo 1:

const evenNumsAdd = (array) => {
    const evenNums = array.filter( num => num % 2 == 0);
    let add = null;
    evenNums.forEach(evenNum => add += evenNum);
    return add;
}

console.log('Adding even numbers:', evenNumsAdd(intNumArray));


console.log('---------------------------------------------------');

// PREGUNTAS PRÁCTICAS MODULO 3

// 1. Escribir una función en JavaScript que tome un botón en el DOM y, al hacer click en él, cambie el color de fondo de un elemento específico en la página. Luego, agregar el botón y el elemento objetivo en el DOM y asociar la función al evento “click”.


const togglerBtn = document.getElementById("toggle-btn");
const span = document.querySelector(".span-color");
let flag = false;

const changeColor = (colorFlag) => {
    if(colorFlag) span.style.backgroundColor = "rgba(116, 139, 240, 0.911)"
    else span.style.backgroundColor = "rgba(124, 218, 213, 0.911)"
}

togglerBtn.addEventListener("click", () => {
    flag = !flag;
    changeColor(flag)
})

console.log('---------------------------------------------------');

// 2. Crear una lista no ordenada de elementos (por ejemplo, elementos de lista) en el DOM. Implementar la delegación de eventos (event delegation) para que, al hacer clic en cualquier elemento de la lista, se muestre un mensaje en la consola que indique qué elemento de la lista se ha hecho clic.


const list = document.getElementById("list");

list.addEventListener("click", (e) => {
    console.log(e.target.attributes["name"].value);
})

console.log('---------------------------------------------------');

// 3. Agregar un formulario a tu página web con un campo de entrada y un botón "Enviar". Implementar una función que sea llamada al enviar el formulario y que valide el campo de entrada (por ejemplo, si está vacío), muestre un mensaje de error accesible si es necesario y en caso de que el formulario esté correctamente diligenciado muestre en consola un objeto con el dato que ha ingresado el usuario en el campo de entrada y un alert con el siguiente mensaje: “Formulario correctamente diligenciado”.

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let text = document.getElementById("text").value;
    if(text == '') alert("¡Error, Diligencie el campo!");
    else {
        const object = {
            data: text
        };
        console.log("Este es el objeto con el dato:", object);
        alert("Formulario correctamente diligenciado");
    }
})