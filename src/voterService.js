
const COUNTRY = "USA";

export function isEligibleToVote(person) {
    let eligible = false;
    if (person.age >= 18 && person.birthCountry == COUNTRY || person.naturalizationDate) {
        eligible = true;
    }
    return eligible;
}