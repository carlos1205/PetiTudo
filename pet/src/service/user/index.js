import UserRepository from "../../repository/user";

class User {
    async cadastrar(payload){
        const newUser = {
            name: payload.name,
            email: payload.email,
            telefone: payload.telefone,
            dataNascimento: payload.dataNascimento,
            password: payload.password,
            termoIsSelected: payload.termoIsSelected,
            receberIsSelected: payload.receberIsSelected
        };
        
        return await UserRepository.persist(newUser);
    }

    async logar(user){
        return await UserRepository.login(user);
    }

    async isLogged(){
        return await UserRepository.isLogged();
    }

    async logout(){
        await UserRepository.logout();
    }

    async resetPassword(email){
        return await UserRepository.resetPassword(email);
    }
}

export default User;