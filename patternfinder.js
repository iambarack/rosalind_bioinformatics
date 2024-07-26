import { rf, wf, dna_f } from './modules.js'
const DNA = rf('./data/dataset_30272_6.txt').replace(/[\r]/g, "").split('\n').filter(e=>e!='')

console.log(DNA[1].length);
function PatternCount(dna, pattern) {
    let ctx = 0;
    for (let i = 0; i+pattern.length < dna.length; i++) {
        let dna3mer = dna.slice(i,i+pattern.length)
        if(pattern.indexOf(dna3mer) !== -1) {
            console.log(dna3mer.length,pattern.length);
            ctx++
        }
    }
    return ctx;
}


console.log(PatternCount(DNA[0],DNA[1]));