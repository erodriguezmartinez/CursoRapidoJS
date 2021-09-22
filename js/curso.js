'use strict'

console.log("JS Carga")

//Objetos

let objeto= {
  atributo1: 78,
  nombre:'Perico Palotes',
  parejas:['María','Pedro','Macario'],
  metodo2: function(num){
    console.log('Método 2: '+ num*2)
  }
}
console.log(objeto)
console.log('Me llamo ' + objeto.nombre)
console.log('Una de mis parejas es ' + objeto.parejas[1])

//let funcion1 = function(){...}
function funcion1(){
  document.write('Me encanta JavaScript<br />')
}
funcion1()
//----------------------
let num = 7 //Declaro num y le asigno 7.Es tipo Number
num = funcion1  //Le asigno funcion1.Es tipo Funcion
num() //la ejecuto

objeto.metodo = funcion1
objeto.metodo()
objeto.metodo2(2)

//Parametros de funciones
function suma(a,b=4){
  return a + b
}
console.log(suma(5,8))
console.log(suma(2))
console.log(suma())

function ejecuta(callback){  //pasamos una función en parametro
  console.log('Ejecutando...')
  callback()
}
ejecuta(funcion1)

//Excepciones
try{
  let nombre = 'Miguel'
  console.log(nombre.substr(2,4)) //Visualiza a partir del segundo caracter, cuatro caracteres
}
catch(excepcion){
    console.log(excepcion)
}
finally{
  console.log('Ejecuto el finally')
}

//Excepciones fallida
try{
  let nombre = 42
  console.log(nombre.substr(2,4)) //Visualiza a partir del segundo caracter, cuatro caracteres
}
catch(excepcion){
    console.log('La hemos liado')
    console.log(excepcion)
}
finally{
  console.log('Ejecuto el 2 finally')
}


//Arrays
let vector = [2,3,5,7,11,13,17,19,23,29,31,37]
let guarreria = [1,2,'adasfafa',function(){consile.log('PFFF')},true]
let matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(matriz[1][2])

//Recorrer un Arrays
for(let i=0; i<vector.length;i++){
    console.log(vector[i])
}

for(let elemento of vector){  //Recorre un vector
  console.log(elemento)
}

for(let atributo in objeto){    //Recorrer los atributos de un objeto
  //console.log(atributo)
  //console.log('El atributo '+atributo+' vale '+objeto[atributo])
  //Usamos comillas americanas para que se visualicen las comillas simples
  console.log(`El atributo '${atributo}' vale ${objeto[atributo]}`)
}

let matriz2 = [
  [1,2,3],
  [4,5,14,78],
  [7,8]
]
for(let fila of matriz2){
  for(let elemento of fila){
    console.log(elemento)
  }
}
