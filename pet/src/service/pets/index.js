import PetRepository from "../../repository/pets";
import User from "../user";

class Pets {
    async cadastrar(pet){
        const user = new User();
        const userId = await user.isLogged();
        if(userId){
            return await PetRepository.cadastrar(userId, pet);
        }
    }

    async listar(){
        const user = new User();
        const userId = await user.isLogged();
        if(userId){
            const pets = await PetRepository.listar(userId);
            return pets;
        }
    }

    async getPet(petId){
        const user = new User();
        const userId = await user.isLogged();
        if(userId){
            const pets = await PetRepository.getPet(petId, userId);
            return pets;
        }
    }

    async getPetName(petId){
        const user = new User();
        const userId = await user.isLogged();
        if(userId){
            const pets = await PetRepository.getPetName(petId, userId);
            return pets;
        }
    }

    async getMedicamentos(type, id){
        const user = new User();
        const userId = await user.isLogged();
        if(userId){
            const medicamentos = await PetRepository.getMedicamentos(type, id, userId);
            return medicamentos;
        }
    }
}

export default Pets;