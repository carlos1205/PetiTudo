import React, { Component } from "react";
import {Text, View, StyleSheet, Image} from 'react-native';
import FormLogin from "./../../components/forms/Login";

class Login extends Component{
    render() {
        const logo = require('./../../assets/image/petitudoLogo.png');
        return(
            <View style={styles.Login} >
                <h1>Login</h1>
                <Image source={logo} style={styles.Logo} />
                <FormLogin />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Login: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEFC5"
    },
    Logo:{
        width: 200, 
        height: 200 
    },
    Title: {
        fontFamily: "Roboto"
    }
});

export default Login;