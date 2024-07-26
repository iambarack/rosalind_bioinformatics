import { rf, wf, dna_f } from './modules.js'
const DNA = rf('./data/dataset_30273_5.txt').replace(/[\r]/g, "").split('\n').filter(e=>e!='')

console.log(DNA[1].length);
function PatternCount(dna, pattern) {
    let patternIndices = [];
    for (let i = 0; i+pattern.length < dna.length; i++) {
        let dna3mer = dna.slice(i,i+pattern.length)
        if(pattern.indexOf(dna3mer) !== -1) {
            //console.log(dna3mer,pattern);
            patternIndices.push(i)
        }
    }
    return patternIndices;
}


console.log(PatternCount(DNA[1],DNA[0]));
wf('./out/patternIndices.txt', PatternCount(DNA[1],DNA[0]).join(' '))