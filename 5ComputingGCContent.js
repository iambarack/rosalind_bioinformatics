/*****************************************************************
 * 
 * Finding Highest GC rate among 10 DNA samples of same lengths
 * 
 *                     @author iambarack
 * 
 *****************************************************************/

import { rf, wf } from './modules.js'
var dna = rf('./datasets/rosalind_gc.txt').toString()

dna=dna.replace(/>Rosalind_/g,':').replace(/[\r\n]/g, "").split(':').filter(e=>e!="")

console.log(dna);

//dna=dna.split('')

let gcmap = new Map()

for (let o = 0; o < dna.length; o++) {
    const el = dna[o].split("");
    let gc = 0;
    for (let i = 0; i < el.length; i++) {
        if(el[i] == 'G' || el[i] == 'C') gc++;
    }
    gcmap.set("Rosalind_"+dna[o].substring(0,4), 100*(gc/(dna[o].length-4)))

}

gcmap = [...gcmap.entries()].sort((a, b) => b[1] - a[1]);

console.log(gcmap);
console.log("===RESULT===");
console.log("Rosalind_"+gcmap[0][0]+'\n'+gcmap[0][1]);
console.log("====END====");
wf('out/5.txt', JSON.stringify(gcmap))