import { rf, wf, dna_f } from './modules.js'
const DATA = rf('./data/dataset_30272_13.txt').replace(/[\r]/g, "").split('\n').filter(e=>e!='')

//console.log(DATA);
var len = 4;

function kmerMap(dna,len) {
    const kmers = new Map(); //3
    for (let i = 0; i+len-1 < dna.length; i++) {
        const dna_kmer = dna.slice(i,i+len)
        //console.log(dna_kmer.length, i+len);
        let w_kmer = kmers.get(dna_kmer)
        //console.log(w3mer);
        if(w_kmer) kmers.set(dna_kmer,++w_kmer)
        else kmers.set(dna_kmer, 1)
    }

    return kmers;
}

export default kmerMap;
export function sorted_K_mer(dna,len) {
    return [...kmerMap(dna,len).entries()].filter(e=> e[1]>1).sort((a, b) => b[1] - a[1]);
}

let x = [...kmerMap(DATA[0],Number(DATA[1])).entries()].filter(e=> e[1]>1).sort((a, b) => b[1] - a[1]).map(e=>e[0])
console.log(
    x
);

wf('./out/kmer.txt',x.join(' '))
console.log(sorted_K_mer(DATA[0],Number(DATA[1])));