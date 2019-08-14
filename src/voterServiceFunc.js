import {both, either} from './helpers'
const COUNTRY = "USA"
const isOver18 = (person) => person.age >= 18
const wasBornInThisCountry = (person) => person.birthCountry == COUNTRY;
const wasNaturalized = (person) => Boolean(person.birthCountry);
const isCitizen = either(wasBornInThisCountry,wasNaturalized)
export const isEligibleToVote = both(isOver18, isCitizen)