/***********************************************
 * 
 * Return: The probability that two randomly 
 * selected mating organisms will produce an 
 * individual possessing a dominant allele 
 * (and thus displaying the dominant phenotype). 
 * Assume that any two organisms can mate.
 * 
 * @author iambarack
 * 
 ***********************************************/
import { rf, wf, dna_f } from './modules.js'

const population = rf('./datasets/rosalind_iprb.txt').split(' ')

let k = Number(population[0])
let m = Number(population[1])
let n = Number(population[2])

let pop = k+m+n;

let mendel_dominant_gene_probability = ()=>(k*4*(k-1 + 2*m + 2*n) + 3*m*(m-1) + 4*m*n)/(4*pop*(pop-1));

(() => {
    const MENDEL = mendel_dominant_gene_probability()
    wf('./out/7.txt', JSON.stringify(MENDEL))
    console.log(MENDEL)
})();

