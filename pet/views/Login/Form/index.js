import React,{ Component } from "react";
import {TextInput, View, StyleSheet} from "react-native";
import Btn from "../../../component/button";
import styles from "../../../styles";

class FormLogin extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <View style={style.margin}>
                <TextInput
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    placeholder="Name"
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

                <Btn value="Login"/>
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