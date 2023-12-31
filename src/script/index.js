
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

// 2. Crear una lista no ordenada de elementos (por ejemplo, elementos de lista) en el DOM. Implementar la delegación de eventos (event delegation) para que, al hacer clic en cualquier elemento de la lista, se muestre un mensaje en la consola que indique qué elemento de la lista se ha hecho clic.


const list = document.getElementById("list");

list.addEventListener("click", (e) => {
    console.log(e.target.attributes["name"].value);
})

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

// PREGUNTAS PRÁCTICAS MODULO 4

// 1. En una sección de la página web construida en los módulos anteriores, permitir a un usuario almacenar y recuperar datos utilizando localStorage y sessionStorage. Demostrar cómo se puede guardar y recuperar datos de estas áreas de almacenamiento del navegador.

const saveContainer = document.getElementById('save-info');
const getContainer = document.getElementById('get-info');

saveContainer.addEventListener('click', (e) => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if(name == '' || age == '') alert("No creo que quieras llenar el navegador de información basura. ¡Diligencia los campos, por favor!");
    else {
        const data = {
            name: name,
            age: age
        }
    
        if(e.target.attributes.name.value == 'saveInLS') localStorage.setItem('data', JSON.stringify(data));
        else sessionStorage.setItem('data', JSON.stringify(data));
    }
})

getContainer.addEventListener('click', (e) => {
    const storagedData = document.getElementById('storagedData');

    if(e.target.attributes.name.value == 'getFromLS') storagedData.innerHTML = localStorage.getItem('data');
    else storagedData.innerHTML = sessionStorage.getItem('data');
})

// 2. Escribir una función que utilice una promesa para simular una operación asincrónica, como, por ejemplo, una solicitud de datos. Luego, mostrar los resultados de la promesa en una sección en la página web.

function asyncSim() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const datos = "¡Estos son los datos obtenidos!";
            resolve(datos);
        }, 1000); // Simular 1 segundo de demora en la adquisición de los datos
    });
}

function showResp(resultados) {
    const resultSection = document.getElementById("resultSection");
    resultSection.innerHTML = `<p>${resultados}</p>`;
}

asyncSim()
    .then((resultados) => {
        showResp(resultados);
    })
    .catch((error) => {
        console.error("error:", error);
    });

// 3.	Crear una API falsa con JSON Server y realizar una solicitud GET y POST con Fetch o Axios y mostrar los resultados en una sección de la página web.

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
const URL_BASE = 'http://localhost:3000';

const formAPI = document.getElementById('formAPI');

formAPI.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('bandName').value;
    const gender = document.getElementById('gender').value;
    let members = document.getElementById('members').value;
    members = members.split(',');
    const foundYear = document.getElementById('foundYear').value;

    const band = {
        nombre: name,
        anioFormacion: foundYear,
        genero: gender,
        miembros: members
    }

    const resp = await axios.post(`${URL_BASE}/bandas`, band)
    console.log(resp);
})

const getDataFromAPI = async () => {
    try {
        const response = await axios.get(`${URL_BASE}/bandas`)
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("error:", error);
        return null;
    }
}

const showData = async () => {
    let dataContainer = document.getElementById('dataFromAPI');
    let data = await getDataFromAPI();
    data.map(band => {
        dataContainer.innerHTML += `
            <tr>
                <td>${band.nombre}</td>
                <td>${band.genero}</td>
                <td>${band.miembros.map(member => member)}</td>
                <td>${band.anioFormacion}</td>
            </tr>
        `
    })
}

showData();
