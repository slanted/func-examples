const COUNTRY = "USA"
const isOver18 = (person) => person.age >= 18
const wasBornInThisCountry = (person) => person.birthCountry == COUNTRY;
const wasNaturalized = (person) => Boolean(person.birthCountry);
const isCitizen = (person) => wasBornInThisCountry(person) || wasNaturalized(person)
export const isEligibleToVote = (person) => isOver18(person) && isCitizen(person)


