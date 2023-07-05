/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


/*
function crazySum(a , b) {
     if(a === b){
         return (a+b)*3
     } else {
        return a+b
     } 
} 
const result = crazySum(5,5)
console.log(result)
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* 
function boundary(a) {
    if(a > 20 && a <= 100) {
        return true
    } else if( a === 400) {
        return true
    }
    else
    {
        return false
    }
    
}
    
const result = boundary(420)
console.log(result) 
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
 */

/*
 function reverseString(parola){
    return parola.split('').reverse().join('')
 } 
 console.log(reverseString('EPICODE'))
*/


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* 
function upperFirst(str) {

    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(' ');

    }
    
console.log(upperFirst('ciao sono mario'))
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* 
 function giveMeRandom(n) {
    const arr = []
     for (i=0; i < n; i++){
        arr.push(Math.floor(Math.random() *11))

    }
     return arr
 }

console.log(giveMeRandom(5))
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/



/* 
function area(l1, l2){
    return l1 * l2 
}

console.log(area(11,12))

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/



/* 
function crazyDiff(n){
    const diff = Math.abs(n - 19)
    if (diff > 19) {
        return diff * 3
    } return diff 
}
console.log(crazyDiff(50))
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/


/* 
function codify(word) {
    const wc = 'code'
    if (word.startsWith('code')){
        return word
    } else {
        return wc + word
    }
}
console.log(codify('code'))
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/


/* 
function check3and7(num){
    const intNum = num
    if(num % 3 === 0 || num % 7 === 0) {
        return true
    } else {
        return false
    }
}
console.log(check3and7(71))
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/


/* 
function cutString(word){
    const stringa = word
    return stringa.slice(1,-1)
}
console.log(cutString('passaparola'))
*/
