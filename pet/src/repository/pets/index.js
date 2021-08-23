import { Children } from "react";
import firebase from "../../config/firebase";

class PetRepository {
    async cadastrar(userId, pet){
        try{
            const userRef = await firebase.database().ref(`user/${userId}/pets`);
            const newPetRef = userRef.push();
            console.log(newPetRef);
            newPetRef.set({
                name: pet.name,
                date: pet.date,
                size: pet.size,
                color: pet.color,
                specie: pet.specie,
                race: pet.race,
                sex: pet.sexo
            });
            return true;
        }catch(err){
            console.error(err);
        }
    }

    async listar(id){
        try{
            const userRef = await firebase.database().ref(`user/${id}/pets`);
            var pets = [];
            await userRef.once('value',(snapshot) => {
                snapshot.forEach((child) => {
                    const pet = {
                        id: child.key,
                        name: child.val().name,
                        specie: child.val().specie
                    }
                    pets.push(pet);
                });
            });
            return pets;
        }catch(err){
            console.error(err);
        }
    }

    async getPet(petId, userId){
        try{
            var pet = await firebase.database().ref(`user/${userId}/pets/${petId}`).once('value');
            return pet.val();
        }catch(err){
            console.error(err);
        }
    }
}

export default new PetRepository();