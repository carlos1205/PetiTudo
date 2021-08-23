import React, {Component} from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import styles from "../../styles";

class ButtonLogout extends Component {
    async action(){
        this.props.navigation.goBack();
    }

    render(){
        return (
            <TouchableOpacity
                    style={[styles.buttonMenu, style.button]}
                    onPress={() => this.action()}
                >
                <View style={style.containerText}>
                    <Text style={[styles.buttonText, style.text]}>{this.props.value}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    button: {
        width: 80+"%",
        flexDirection: "row",
        marginBottom: 0
    },
    containerText: {
        width: 100+"%",
        paddingRight: 15,
        justifyContent: "center",
    },
    text: {
        backgroundColor: "#FFDC6E",
        padding: 7,
        paddingLeft: 20,
        borderRadius: 10,
        color: "#fff",
        textAlign: "center"
    }
});

export default ButtonLogout;