/*
    ===== Código de TypeScript =====
*/

let habilidad:string[] = ['Bash','Manuel','Escuela'];

let texto: string = "El dia esta lluvioso, y hay mucho relampagos !";

let limpiar_texto: any= texto.toLowerCase().replace(/[!¡]/,'');


let esVerdadero=habilidad.includes('Manuel');
habilidad.push('true');


console.log(habilidad);
console.log(esVerdadero);
console.log(limpiar_texto);

/*-------------------------------------------------------*/
//! Las interfaces obligan a nuestros objetos que implementen los tipos o lo que le decimos.
interface Personaje2 {
    nombre: string;
    energia: number;
    habilidades: string[];
    //! El signo ? hace que la propiedad sea opcional.
    puebloNatal?:string;

}


const personaje2: Personaje2 = {
    nombre: 'Jose',
    energia: 100,
    habilidades: ['Bash','Counter','Healing']

}

personaje2.puebloNatal= 'pueblonatal';

// console.table nos trae nuestro objeto personaje en la consola en forma de tabla.
console.table(personaje2)








