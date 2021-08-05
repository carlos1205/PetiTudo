import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import styles from "../../styles";
import FormRecuperacao from "./Form";
import Link from "../../component/link";

class RecuperarSenha extends Component {
    render(){
        const logo = require('./../../assets/image/petitudoLogo.png');
        const title = "Recuperar Senha";
        return (
            <View style={[styles.Tela, styles.backgroundPattern]} >
                <Text h1
                    style={[styles.header, styles.colorFont]}
                >
                    {title}
                </Text>
                <Image source={logo} style={styles.Logo} />
                <FormRecuperacao />
                <View style={style.margin}>
                    <Link href="#" value="voltar"/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    margin: {
        marginTop: 20
    }
});

export default RecuperarSenha;