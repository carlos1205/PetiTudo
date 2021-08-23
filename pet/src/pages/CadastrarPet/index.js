import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import FormCadastroPet from "./Form";
import styles from "../../styles";

class CadastrarPet extends Component {
    render(){
        const title = "Cadastrar Pet";
        return(
            <View style={styles.Tela}>
                <View style={[styles.viewIn]}>
                    <FormCadastroPet navigation={this.props.navigation} /> 
                </View>
            </View>
        );
    }
}

export default CadastrarPet;