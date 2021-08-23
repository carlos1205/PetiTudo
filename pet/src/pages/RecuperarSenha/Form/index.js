import React, {Component} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import Btn from "../../../components/button";
import styles from "../../../styles";
import User from "../../../service/user";

class FormRecuperacao extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: ""
        }
    }

    async action(){
        const user = new User();
        const res = await user.resetPassword(this.state.email);
        if(res){
            alert('Email enviado, por favor verifique seu email.');
            this.props.navigation.navigate('Login');
        }
    }

    render(){
        return(
            <View>
                <TextInput
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder="Email"
                    style={[styles.input, style.margin]}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    editable
                />
                <Btn value="Enviar" onPress={() => {this.action()}}/>
            </View>
        );
    }
};

const style = StyleSheet.create({
    margin:{
        marginBottom: 40
    }
});

export default FormRecuperacao;