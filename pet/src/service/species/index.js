import SpeciesRepository from "../../repository/species";

class Species {
    async getSpecies(){
        const species = await SpeciesRepository.getSpecies();
        return species;
    }

    async getSpecie(id){
        const specie = await SpeciesRepository.getSpecie(id);
        return specie;
    }

    async getSpeciesRaces(index){
        const races = await SpeciesRepository.getSpeciesRaces(index);
        return races;
    }

    async getSpecieRaces(raceId, specieId){
        const race = await SpeciesRepository.getSpecieRaces(raceId, specieId);
        return race;
    }
}

export default Species;