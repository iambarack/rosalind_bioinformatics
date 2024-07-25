/***************************
 * 
 * Counting Point Mutations
 * 
 * @author iambarack
 * 
 ***************************/

import { rf, wf } from './modules.js'

const dnasets = rf('./datasets/rosalind_hamm.txt').replace(/[\r]/g, "").split('\n')

console.log(dnasets);
var dna1 = "GAGCCTACTAACGGGAT";
var dna2 = "CATCGTAATGACGGCCT";

let mutationCount = 0;

var newSet = [];
for (let i = 0; i < dnasets[0].length; i++) {
    if(dnasets[0][i] != dnasets[1][i]) {
        mutationCount++
        newSet[i] = '*'
    } else newSet[i] = dnasets[0][i]
}
newSet=newSet.join('')
console.log(newSet);
console.log(mutationCount);
const joy = newSet.match(/.{1,10}/g).join(' ').match(/.{1,33}/g).join('\n')

wf('./out/6.txt', "mutation_count: "+JSON.stringify(mutationCount) +'\n' + joy)