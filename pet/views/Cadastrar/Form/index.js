import React, {Component} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Btn from "../../../component/button";
import styles from "../../../styles";

class FormCadastro extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            emailConfirm: "",
            telefone: "",
            dataNascimento: "",
            password: "",
            passwordConfirm: "",
            termoIsSelected: false,
            receberIsSelected: false,
        }
    }

    setTermo(){
        this.setState({termoIsSelected: !this.state.termoIsSelected});
    }

    setReceber(){
        this.setState({receberIsSelected: !this.state.receberIsSelected});
    }

    render(){
        return(
            <View>
                <TextInput
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                    placeholder="Name"
                    style={styles.input}
                    editable
                />

                <TextInput
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder="Email"
                    style={styles.input}
                    editable
                />

                <TextInput
                    onChangeText={(emailConfirm) => this.setState({emailConfirm})}
                    value={this.state.emailConfirm}
                    placeholder="Confirmar Email"
                    style={styles.input}
                    editable
                />

                <TextInput
                    onChangeText={(telefone) => this.setState({telefone})}
                    value={this.state.telefone}
                    placeholder="Telefone"
                    style={styles.input}
                    editable
                />
                
                <TextInput
                    onChangeText={(dataNascimento) => this.setState({dataNascimento})}
                    value={this.state.dataNascimento}
                    placeholder="Data de Nascimento"
                    style={styles.input}
                    editable
                />

                <TextInput
                    autoCompleteType="password"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    editable
                />

                <TextInput
                    autoCompleteType="password"
                    onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
                    value={this.state.passwordConfirm}
                    placeholder="Confirmar Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    editable
                />

                <BouncyCheckbox 
                    size={25}
                    fillColor="#FFBD3E"
                    unfillColor="#FFFFFF"
                    textStyle={{fontSize: 18}}
                    text="Eu li e concordo com os 
                    termos de uso do serviço."
                    iconStyle={{ borderColor: "#FFBD3E" }}
                    value={this.state.termoIsSelected}
                    onPress={() => {this.setTermo}}
                    style={style.checkBox}
                />

                <BouncyCheckbox 
                    size={25}
                    fillColor="#FFBD3E"
                    unfillColor="#FFFFFF"
                    textStyle={{fontSize: 18}}
                    text="Quero receber as informações relacionadas a Petitudo."
                    iconStyle={{ borderColor: "#FFBD3E" }}
                    value={this.state.receberIsSelected}
                    onPress={() => {this.setReceber}}
                    style={style.checkBox}
                />

                <Btn value="Cadastrar"/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    checkBox: {
        marginTop: 15,
        maxWidth: 250
    }
});

export default FormCadastro;