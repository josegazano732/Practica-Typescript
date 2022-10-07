

let apellido: string = 'gazano';
let energia: number= 95;
let esVivo: boolean = true;

function cargarEnergia(cant:number) {
    let reultado: number = energia + cant;
    return reultado;
}

//cargarEnergia(5);



console.log("Total de energia: ",energia,"Señor: ",apellido);
console.log("Eu energia se encuentra en un %",cargarEnergia(5));

