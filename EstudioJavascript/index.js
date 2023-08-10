
// Objeto vacio : {} 
// Las funciones puede reotrnar una funcion

// Fucniones

function add(x, y = 0){
    
    //if(y === undefined) {
       // y = 0
    //}

    return x + y
} 

function hello3(name){
    return "Hola " + name
}

function hello2(){
    return function(){
        return "Buenos dias"
    }
}

function hello(){
    return "Buenos dias"
}

// Objetos

const user = {
    name : "Manuel",
    lastName : "Martinez",
    age : 20, 

    address : {
        country : "Colombia",
        city : "Bogota",
        street : "calle 5"

    },

    friends : ["Laura", "Braiytan"],
    active : true,
    sendEmail : function (name) {
        return "send email to "+name
    }
 }

console.log("Funciones : ")
console.log(hello())
console.log(add(10, 20))
console.log(add(100))
hello()

console.log("Objetos : ")
console.log(user.name)
console.log(user.address.city)
console.log(user.active)
console.log(user.sendEmail("Crreos"))

// Crear objetos

const name = "Laptop"
const price = 1000

const newproduct = {
    //name : name,
    //price : price
    name,
    price
}

console.log("Nuevo producto")
console.log(newproduct.name)
console.log(newproduct.price)

// Creacion de interfaz para editar documetnos

const title = document.createElement("h1")
title.innerText = "Buenos dias por la mañana"

const button = document.createElement("button")
button.innerText = "Click"
button.addEventListener("click", function(){
    const Aparece = document.createElement("h1")
    Aparece.innerText = "Hello madafaca"
    document.body.append(Aparece)
    alert("Se realizo un click")
})

document.body.append(title)
document.body.append(button)

// Done
// Pdemos ingresar directamente script html
// Al html 
const user2 = {

    name : "joe",
    age : 30

}

function printInfo(user){
    return "<h1>Hellou "+user.name+"</h1>"
}

// Inner html asi borra lo que se ha hecho hasta el momento
document.body.innerHTML = printInfo(user2)

// Destructing  
// Podemos indicarle a las fucniones que espere
// Un objeto que contenga el atributo ingresado

function printInfoName({name}){
    return "<h1>Hellou "+name+"</h1>"
}

function ExtraerValores(user){
    const {name, age} = user
    console.log(name, age)
    return "<h1>Hellou "+name+"</h1>"
}

// Funciones anonimas
// Funcion normal
function start(){
    return "Starting"
}

console.log(start());

// Funcion anonima
// Funcion sin nombre que se ejecuta 1 vez
console.log(function (){
    return "Starting"
}())

// Ejemplo practico 
const button2 = document.createElement("button")
button2.innerText = "Click me 2"


button2.addEventListener("click", function(){
    alert("Has realizado un lcick alv")
})

document.body.append(button2)

// Funciones flecha

const adicionar = (x,y) => {return x + y}

const adicionarReturn = (x, y) => x + y 

//Tener cuidado con retornar objetos
//Js se confunde con bloque de funcion 
//y bloque de objeto por lo tanto se ingresan
// Con unas llaves

const showObject = () => ({name : "madafaca"})
console.log(showObject)
console.log("Funcion adicionar "+adicionar(2, 5))

//Cositas 

const background = 'red'
const color = 'white'

const band = true
const button3 = document.createElement("button")
button3.innerText = "Dele click"
button3.style = `background : ${band ? "blue" : red}; color : ${color}`

button3.addEventListener("click", () => {
    if(band){
        return alert("Esta autorizado")
    }
    return alert("No esta autorizado")
 })

 document.body.append(button3)


 // Map, filter, Foreach, concat
 const names = ["ryan", "joe", "maria"]
 const newNames = names.map(function (name){
    //return name.includes("m") ? name.toUpperCase() : name = [ryan, joe ,MARIA]
    if(name.includes("a")){
        return name // = [ryan, undefined, maria]
    }
 })

console.log(newNames)

//var i = 0;
//var ganancia = 0;
//while(i < 165){
    //i++
    //ganancia = ganancia + 7850
//}

 // Filter ayuda a borrar informacion

const AreglosSinM = names.filter(function (name){
    if(! name.includes("m")){
        //console.log(name)
        return name
    }
})

console.log(AreglosSinM)

// Spread operator 
// Arrelgos 
const names5 = ["ryan", "joe", "maria"]
const OtrosNombres = ["marcos", "mario", "maria"]
const ListaCompleta = [...names5, ...OtrosNombres];
console.log(ListaCompleta)

// Objetos
const userxproduct = {
    ...newproduct,
    ...user 
}
 
console.log(userxproduct)

// Exportar, tambien puedo exporat variabels 

//import {addModulo} from './add.js'
// console.log(addModulo(12, 30))

// Se activa exportar por defecto
// Si no importo algo en especifico puedo exportar
// lo que declare como exportacion por defecto

import suma from "./add.js";
console.log(suma(10, 100))

// Verificar si existe, un atributo

const userEjermplo = {
    name : "ryan",
    address : {
        city : "london"
    }
}

/*if(userEjermplo.location){
    console.log(userEjermplo.location)
}
*/

// Optional chaiting
// Como endart que se usa ? para variables 
// que peuden ser null
console.log(userEjermplo.location?.city)

// Retorna una promesa, porque es asincrono
// Entonces mietras piede datos espera cosas

//let data = fetch("https://jsonplaceholder.typicode.com/posts")
//console.log(data)

const ul = document.createElement("ul")

fetch("https://jsonplaceholder.typicode.com/posts").then(
    function (response) {
        console.log("Finalizo la carga")
        console.log("Verificar la respuesta : ")
        console.log(response)
        return response.json()
    }).then( function (data) {
            //console.log(data)
            data.forEach(function (element) {
                const li = document.createElement("li")
                li.innerText = element.title
                ul.append(li)
            });
        document.body.append(ul)
        }

    )

console.log("Espero a que finalice la carga")
 
// Asycg 
// Para hacer el codigo masa legible y faci
// podemos utilizar await
// Basicamente le indica al programa que esa variable 
// Se le va a ingresar respuestas asincronass
//Sin embargo para que los await funcionen tenemos
// Que ingresarlos a una funcion que tenga la propiedad asincrona


async function loadData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)
}

loadData()
