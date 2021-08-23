import React, { Component } from "react";
import {View, Image, Text, StyleSheet} from 'react-native';
import Form from "./Form";
import Link from "../../components/link";
import styles from "../../styles";
import BtnSecondary from "../../components/buttonSecondary";
import User from "../../service/user";

class Login extends Component{

    async logar(data){
        const user = new User();
        return await user.logar(data);
    }

    async componentDidMount(){
        const user = new User();
        const isLogged = await user.isLogged();
        if(isLogged){
            this.props.navigation.navigate('Main');
        }
    }

    render() {
        const logo = require('./../../../assets/image/petitudoLogo.png');
        const title = "Login";
        return(
            <View style={[styles.Tela, styles.backgroundPattern]} >
                <Text h1
                    style={[styles.header, styles.colorFont]}
                >
                    {title}
                </Text>
                <Image source={logo} style={styles.Logo} />
                <Form navigation={this.props.navigation} onPress={(user) => this.logar(user)} />
                <Link navigation={this.props.navigation} href='RecuperarSenha' value="esqueci minha senha"/>
                <View style={style.Cad}>
                    <Text style={[style.Text, styles.colorFont]}>Ainda não tem Conta?</Text>
                    <BtnSecondary value="Cadastrar"  onPress={()=> this.props.navigation.navigate('Cadastrar')} />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    margin: {
        marginBottom: 35
    },
    cadastra: {
        textAlign: "center"
    },
    Cad: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    Text: {
        fontSize: 20
    }
});

export default Login;