import { rf, wf } from './modules.js'
var dna = rf('./datasets/rosalind_revc.txt').toString().split('')
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

wf('out/3.txt', dna)