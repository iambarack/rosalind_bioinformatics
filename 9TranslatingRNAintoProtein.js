/********************************
 * 
 * Complementing Strand of DNA
 * 
 * @author iambarack
 * 
 *******************************/
import { rf, wf, dna_f } from './modules.js'
const RNA_CODON_TABLE = rf('./RNA_CODON_TABLE')
                        //.replace(/[\r\n]/g, "")
                        .split('\r\n').map(e=>e.split(' ').filter(e=>e!=''))

const RNA_HASHMAP = new Map();

for (let i = 0; i < RNA_CODON_TABLE.length; i++) {
    for (let j = 0; j < 8; j+=2) {
        const el = RNA_CODON_TABLE[i][j];
            RNA_HASHMAP.set(el, RNA_CODON_TABLE[i][j+1])
    }
}

console.log(RNA_CODON_TABLE);
console.log(RNA_HASHMAP);

export default RNA_HASHMAP;

const rna = rf('./datasets/rosalind_prot.txt');
var newstr = [];

for (let i = 0; i < rna.length; i+=3) {
    let rna3 = rna[i] + rna[i+1] + rna[i+2];
    if(RNA_HASHMAP.has(rna3)) {
        let rna3code = RNA_HASHMAP.get(rna3);
        if(rna3code != "Stop") 
            newstr.push(rna3code)
    }
}
console.log(newstr.join(''));


wf('./out/9.txt', newstr.join(''))
