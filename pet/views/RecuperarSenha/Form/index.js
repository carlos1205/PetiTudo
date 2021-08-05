import React, {Component} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import Btn from "../../../component/button";
import styles from "../../../styles";

class FormRecuperacao extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: ""
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
                    editable
                />
                <Btn value="Enviar" />
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