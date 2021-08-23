import React,{ Component } from "react";
import {TextInput, View, StyleSheet} from "react-native";
import Btn from "../../../components/button";
import styles from "../../../styles";

class FormLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    async logar(){
        const resp = await this.props.onPress({
                        email: this.state.email,
                        password: this.state.password
                    });
                    
        if(resp === true){
            this.setState({
                email: "",
                password: ""
            });
            console.log('Logado!');
            this.props.navigation.navigate('Main');
        }
    }

    render() {
        return (
            <View style={style.margin}>
                <TextInput
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder="Email"
                    style={styles.input}
                    editable
                />

                <TextInput
                    autoCompleteType="password"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry={true}
                    editable
                />

                <Btn value="Login" onPress={() => this.logar()}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    margin: {
        marginBottom: 20
    }
});

export default FormLogin;