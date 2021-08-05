import React, { Component } from "react";
import {View, Image, Text, StyleSheet} from 'react-native';
import Form from "./Form";
import Link from "../../component/link";
import styles from "../../styles";
import BtnSecondary from "../../component/buttonSecondary";

class Login extends Component{
    render() {
        const logo = require('./../../assets/image/petitudoLogo.png');
        const title = "Login";
        return(
            <View style={[styles.Tela, styles.backgroundPattern]} >
                <Text h1
                    style={[styles.header, styles.colorFont]}
                >
                    {title}
                </Text>
                <Image source={logo} style={styles.Logo} />
                <Form />
                <Link href="#" value="esqueci minha senha"/>
                <View style={style.Cad}>
                    <Text style={[style.Text, styles.colorFont]}>Ainda não tem Conta?</Text>
                    <BtnSecondary value="Cadastrar" />
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