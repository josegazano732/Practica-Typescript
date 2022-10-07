/*
    ===== Código de TypeScript =====
*/

let habilidad = ['Bash','Manuel','Escuela'];
let texto: string = "El dia esta lluvioso, y hay mucho relampagos !";
let limpiar_texto: any= texto.toLowerCase().replace(/[!¡]/,'');


let esVerdadero=habilidad.includes('Manuel');


console.log(habilidad);
console.log(esVerdadero);
console.log(limpiar_texto);






