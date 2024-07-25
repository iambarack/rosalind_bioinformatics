/********************************
 * 
 * Transcribing DNA into RNA
 * 
 * @author iambarack
 * 
 *******************************/

import { rf, wf, dna_f } from './modules.js'
var dna = rf('./datasets/rosalind_rna.txt')
            .toString()
            .replace(/T/g,"U")

wf('out/2.txt', dna_f(dna))
console.log(dna_f(dna));
// method 2:
// dna=dna.split("");
// for (let i = 0; i < dna.length; i++) {
//     if(dna[i] ==  'T') dna[i] = 'U';
// }
// dna=dna.join("")
