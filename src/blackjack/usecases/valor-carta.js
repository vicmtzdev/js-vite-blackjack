
/**
 * Esta función obtiene el valor de la carta
 * @param {String} carta Ejemplo: 4H
 * @returns {Number} Retorna el valor de carta como un número. Ejemplo: 4
 */

 export const valorCarta = ( carta ) => {
 
    if(!carta || carta === '') 
     throw new Error('carta es obligatorio como un string');


    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}