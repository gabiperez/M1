'use strict'

function BinarioADecimal(num) {                         //num contiene el numero binario
  // tu codigo aca
   let deci = 0;                                        //genero una variable que sera el num decimal (dec)
    for (let i = 0; i < num.length; i++) {              //creo una icognita que recorra todo el num binario(ya que no se la cantidad)
       deci += +num[i] * 2 ** (num.length - 1 - i);     //hago que dec se sume a num (dec += +num => dec+num)
    }                                                   //lo multiplico por lo posicion i y lo elevo al 2 (**)
    return deci;      
                                     
}


function DecimalABinario(num) {
  // tu codigo aca
   let bina = [];                                          
  while (num > 0){
    bina.unshift(num % 2);
    num = Math.floor(num / 2);                    // Math.trunc -> saca el decimal dejando numeroentero
    }
return bina.join("") 
  }

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

/* Por ejemplo:
Supongamos 10101, comenzando de derecha a izquierda, cada 1 o 0 será multiplicado por 2^n en donde n 
describe la posición en el que se encuentra, siendo el más derecho, la posición 0. El resultado 
final será la sumatoria de todos ellos.

 1 |  0  |   1   |  0  | 1
-- | --- | ----- |-----| ---
2^4| 2^3 |  2^2  | 2^1 | 2^0

Por lo tanto:
1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0 = 16 + 0 + 4 + 0 + 1 = 21


DECIMAL AL BIANRIO debemos dividir por dos y quedarnos con el resto, dicho 
resto va a ser quien nos marque el binario involucrado.

Por ejemplo:
Realizamos la operación inversa, convertimos 21 en binario.

21/2 = 10 (resto 1)
10/2 = 5 (resto 0)
5/2 = 2 (resto 1)
2/2 = 1 (resto 0)
1/2 = 0 (resto 1) */