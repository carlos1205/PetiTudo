import { Children } from "react";
import firebase from "../../config/firebase";

class SpeciesRepository {
    async getSpecies(){
        try{
            var species = [];
            var speciesId = [];
            await firebase.database().ref('species/').once('value', (snapshot) => {
                snapshot.forEach((child) => {
                    species.push(child.val().name);
                    speciesId.push(child.key);
                });
            });
            return {species, speciesId};
        }catch(err){
            console.error(err);
        }
    }

    async getSpecie(id){
        try{
            var specie = await firebase.database().ref(`species/${id}`).once('value');
            return specie.val().name;
        }catch(err){
            console.error(err);
        }
    }

    async getSpeciesRaces(index){
        try{
            var races = [];
            var racesId = [];
            await firebase.database().ref(`species/${index}/`).once('value', (snapshot) => {
                snapshot.forEach((child) => {
                    child.forEach((snapshot2) => {
                        races.push(snapshot2.val().name);
                        racesId.push(snapshot2.key);
                    });
                });
            });
            return {races, racesId};
        }catch(err){
            console.error(err);
        }
    }

    async getSpecieRaces(raceId, specieId){
        try{
            var race = await firebase.database().ref(`species/${specieId}/races/${raceId}`).once('value');
            return race.val().name;
        }catch(err){
            console.error(err);
        }
    }
}

export default new SpeciesRepository();