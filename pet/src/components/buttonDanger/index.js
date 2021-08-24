import React, {Component} from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import styles from "../../styles";

class ButtonDanger extends Component {
    render(){
        return (
            <TouchableOpacity
                    style={[styles.buttonMenu, style.button]}
                    onPress={(event)=>{this.props.onPress(event.target.value)}}
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
        backgroundColor: "#8B0000",
        padding: 7,
        paddingLeft: 20,
        borderRadius: 10,
        color: "#fff",
        textAlign: "center"
    }
});

export default ButtonDanger;