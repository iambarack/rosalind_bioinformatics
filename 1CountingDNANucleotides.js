import { rf, wf, res } from './modules.js'

const dna = rf('./datasets/rosalind_dna.txt')

for (let i = 0; i < dna.length; i++) {
    if(dna[i] !=  '\r' && dna[i] != '\n') res[dna[i]]++
}
console.log(Object.values(res));
console.log(res);
wf('./out/1.txt', JSON.stringify(res))