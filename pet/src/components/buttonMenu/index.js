import React, {Component} from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "../../styles";

class ButtonMenu extends Component {
    action(){
        this.props.navigation.navigate(this.props.page);
    }

    render(){
        return (
            <TouchableOpacity
                style={[styles.buttonMenu, style.button]}
                onPress={()=> this.action()}
            >
                <View style={style.containerIcon}>
                    <Icon style={style.Icon} name={this.props.iconName} size={40} color="#fff" />
                </View>
                <View style={style.containerText}>
                    <Text style={[styles.buttonText, style.text]}>{this.props.value}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    button: {
        flexDirection: "row"
    },
    containerText: {
        width: 80+"%",
        paddingRight: 15,
        justifyContent: "center",
    },
    text: {
        backgroundColor: "#fff",
        width: 100 + "%",
        marginLeft: -15,
        padding: 7,
        paddingLeft: 20,
        borderRadius: 10,
        color: "#FFBD3E",
        textAlign: "left"
    },
    containerIcon: {
        height: 73,
        width: 73,
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 45,
        justifyContent: "center",
        zIndex: 1
    },
    Icon: {
        height: 60,
        width: 60,
        backgroundColor: "#FFDC6E",
        borderRadius: 30,
        textAlign: "center",
        textAlignVertical: "center"
    }
});

export default ButtonMenu;