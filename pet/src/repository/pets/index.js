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

    async deletePet(userId, pet){
        try{
            await firebase.database().ref(`user/${userId}/pets/${pet}`).remove();
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

    async getPetName(petId, userId){
        try{
            var pet = await firebase.database().ref(`user/${userId}/pets/${petId}`).once('value');
            return pet.val().name;
        }catch(err){
            console.error(err);
        }
    }

    async getMedicamentos(type, petId, userId){
        try{
            var pet = await firebase.database().ref(`user/${userId}/pets/${petId}/${type}`).once('value');
            var medication = [];
            pet.forEach((snapshot) => {
                const med = {
                    id: snapshot.key,
                    name: snapshot.val().name,
                    data: snapshot.val().data
                }
                medication.push(med);
            });
            return medication;
        }catch(err){
            console.error(err);
        }
    }

    async cadastrarMedicamento(userId, petId, tipo, payload){
        try{
            const medicamentoRef = await firebase.database().ref(`user/${userId}/pets/${petId}/${tipo}`);
            const newMedicamentoRef = medicamentoRef.push();
            console.log(newMedicamentoRef);
            newMedicamentoRef.set({
                name: payload.name,
                data: payload.data,
                responsavel: payload.responsavel,
                dose: payload.dose,
                fabricante: payload.fabricante,
                lote: payload.lote,
                proxima: payload.proxima
            });
            return true;
        }catch(err){
            console.error(err);
        }
    }

    async getMedicamento(userId, petId, tipo, id){
        try{
            const medicamentoRef = await firebase.database().ref(`user/${userId}/pets/${petId}/${tipo}/${id}`).once('value');
            return medicamentoRef.val();
        }catch(err){
            console.error(err);
        }
    }
}

export default new PetRepository();