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

const couples = rf('./datasets/rosalind_iev.txt').split(' ')

let k = Number(couples[0])
let m = Number(couples[1])
let n = Number(couples[2])

let x = Number(couples[3])
let y = Number(couples[4])
let z = Number(couples[5])

const dominantPhenotype = 2*(k + m + n + x*3/4 + y/2 + z*0);

console.log(dominantPhenotype);