//Array de objetos

const personas = [
    {
        nombre: 'Lu'
    },
    {
        nombre: 'Flor'
    },
    {
        nombre: 'Jose'
    }
]

//Para acceder combinamos notacion de corchetes y de puntos
personas[3].nombre

//Metodos para trabajar con arrays de objetos. Son todos metodos de arrays y se pueden encadenar

//*map
//*filter
//*reduce

//*some
//*every
//*sort

//MAP
//Dado un array (ej. de numeros). Va a recorrer cada elemento del array y lo va a pasar como parametro de la funcion que tiene como callback. El valor que este callback devuelva lo va a pushear a un nuevo array, y devuelve ese nuevo array. No modifica el array original.
const numeros = [2, 4, 6, 8, 12];

const duplicar = x => x*2;

const duplicados = numeros.map(duplicar);

const cuadruplicados = numeros.map(duplicar).map(duplicar);

//Siempre es un array nuevo, por lo tanto puedo encadenarlo con otros metodos. 
//Lo utilizamos cuando queremos realizar una operacion en cada uno de los items de un array, devolviendo un nuevo array

const frutas = ['uva', 'pera', 'banana', 'manzana'];

const aMayusculas = palabra = palabra.toUpperCase();

const FRUTAS = frutas.map(aMayusculas);


//Ejemplo extrayendo solo dos datos de cada objeto y transformando su valor

const aPesos = producto =>({
    nombre: producto.name,
    precio: producto.price*60
})

const productosEnPesos = products.map(aPesos);

//Map se utiliza o para realizar una operacion sobre los datos de un array, o para convertir los objetos

//Filter

//Filtra algunos elementos de un array
//Tambien toma un callback por parametro

//Va a pasar cada elemento del array por el callback. Si la funcion devuelve true, lo pushea a un nuevo array

const otrosNumeros = [5, 6, 8, 34, 12, 76, 18,22];

const mayorA20 = x => x>20;

const numerosMayoresA20 = otrosNumeros.filter(mayorA20);

//La diferencia con MAP es que MAP pushea todos los elementos del array a un nuevo array, filter solo pushea los que pasan el filtro.

//combinado con map

const numerosMayoresA20 = otrosNumeros.map(duplicar).filter(mayorA20);

//Ejemplo filtrar el numero 34, eliminarlo del array

const noEs34 = x => x!== 34

const numerosDistintosA34 = otrosNumeros.filter(noEs34);

// Productos solo de Coto

const esDeCoto = producto => producto.store ==='Coto';

const productosCoto = productos.filter(esDeCoto);

//Si devuelve true toma todo el item y lo pushea a otro array, sea un numero o un objeto o un string

const productosCoto = productos.filter(esDeCoto).map(aPesos);

//Los callbacks pueden llevar como parametros el item, el index o el array original. Si o si uno, el resto son opcionales

//REDUCE

//Reduce todo el array a un unico valor. Va pasando por cada uno de los elementos de un array, y esos elementos del array los va pasando por un callback. Este callback tiene un acumulador, el acumulador es un valor que va manteniendo entre llamada y llamada. A medida que va pasando item por item va haciendo la operacion sobre el item asignandolo al acumulador y una vez que finaliza devuelve ese acumulador

const numerosASumar = [2, 4, 6, 10];

//El callback toma dos parametros principales, el acumulador y el valor actual. El valor que retorne se va pisando sobre el acumulador, y actual es el valor que esta recorriendo

const sumaDeNumeros = (sumaParcial, actual) => {

    console.log(`Suma parcial : ${sumaParcial} | actual: ${actual}`)
    return sumaParcial + actual;
}

const sumaTotal = numerosASumar.reduce(sumaDeNumeros)


const palabras = ['casa', 'jardin', 'auto', 'elefante'];
const unionDePalabras = (stringParcial, palabra)=>{
    return `${stringParcial}-${palabra}`
}

const palabrasUnidas = palabras.reduce(unionDePalabras);

//Ejemplo concatenar todos los nombres de los productos

const unionDeProductos = (stringParcial, producto)=>{
    return (stringParcial += `$(producto.name) | `)
}

const nombreDeProductos = productos.reduce(unionDeProductos, '');

console.log(nombreDeProductos)

//cuando tenemos tipos de datos distintos entre lo que estamos pasando y lo que queremos obtener, tenemos que definir un segundo parametro que es el valor inicial. Defino un string vacio y lo concatena con los resultados.
//Si no se le pasa un valor inicial, el acumulador va a ser el primero y el actual va a ser el segundo. Si le pasamos valor inicial el acumulador va a ser el valor inicial y el actual va a ser el primer elemento

//Se suele usar para obtener un resumen o estadisticas de un array de objetos

//Ejemplo quiero saber la cantidad de producto por cada supermercado
//
const cantidadPorSupermercado = (datosParciales,producto) => {
    const supermercado = producto.store;
    datosParciales[supermercado] = datosParciales[supermercado] + 1 || 1

    return datosParciales
}

const productosPorSupermercado = productos.reduce(cantidadPorSupermercado, {})

console.log(productosPorSupermercado)
