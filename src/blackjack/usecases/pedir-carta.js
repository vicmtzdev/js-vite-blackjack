
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['9H', 'JS', '2S', 'JC', '4H'] 
 * @returns {String} Retorna el ultimo valor del deck. Ejemplo: 4H
 */

 export const pedirCarta = (deck) => {

     if ( !deck || deck.length === 0 ) {
         throw 'No hay cartas en el deck';
     }
     const carta = deck.pop();
     return carta;
 }