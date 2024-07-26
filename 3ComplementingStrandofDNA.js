/********************************
 * 
 * Complementing Strand of DNA
 * 
 * @author iambarack
 * 
 *******************************/
import { rf, wf, dna_f } from './modules.js'
var dna = rf('./datasets/rosalind_revc.txt').toString().split('')
var dna = rf('./datasets/cogniterra13.txt').toString().split('')
//console.log(dna);
for (let i = 0; i < dna.length;i++) {
    switch (dna[i]) {
        case 'T':
            dna[i] = 'A'
            break;
        case 'A':
            dna[i] = 'T'
            break;
        case 'C':
            dna[i] = 'G'
            break;
        case 'G':
            dna[i] = 'C'
            break;   
        default:
            break;
    }
}

dna=dna.reverse().join('')
console.log(dna);

wf('out/3.txt', dna_f(dna))