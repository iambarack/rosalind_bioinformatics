import { rf, wf, dna_f } from './modules.js'
const dna = rf('./data/in.txt').split('')

const kmers = new Map(); //3

for (let i = 0; i+2 < dna.length; i++) {
    let dna3mer = dna[i] + dna[i+1] + dna[i+2]
    let w3mer = kmers.get(dna3mer)
    console.log(w3mer);
    if(w3mer) kmers.set(dna3mer,++w3mer)
    else kmers.set(dna3mer, 1)
}
var mostfreq3mer = [...kmers.entries()].sort((a, b) => b[1] - a[1]);

console.log(mostfreq3mer);