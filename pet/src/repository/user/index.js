import firebase from "../../config/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';


class UserRepository {
    async persist(newUser){
        return await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((user) => {
                const userRef = firebase.database().ref(`user/${user.user.uid}`);
                console.log(user.user.uid);
                userRef.set({
                    perfil: {
                        name: newUser.name,
                        email: newUser.email,
                        phone: newUser.telefone,
                        birthDate: newUser.dataNascimento,
                        termAccept: newUser.termoIsSelected,
                        receiveAccept: newUser.receberIsSelected
                    }
                });
                return true;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    async login({email, password}){
        try{
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            await AsyncStorage.setItem("@user_id", user.user.uid);
            return true;
        }catch(err){
            console.error(err);
        }
    }

    async isLogged(){
        try{
            return await AsyncStorage.getItem("@user_id");
        }catch(err){
            console.error(err);
        }
    }

    async logout(){
        try{
            await AsyncStorage.removeItem("@user_id");
        }catch(err){
            console.error(err);
        }
    }

    async resetPassword(email){
        try{
            await firebase.auth().sendPasswordResetEmail(email);
            return true;
        }catch(err){
            console.error(err);
        }
        return false;
    }
}

export default new UserRepository();
