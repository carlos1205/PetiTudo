import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

class NavBar extends Component {
    render(){
        return(
            <View style={menuStyle.backgroundNav}>
                <View>
                    <Icon name="home" size={40} color="#fff" /> 
                </View>
                <View>
                    <Icon name="paw" size={40} color="#fff" />
                </View>
            </View>
        );
    }
}

const menuStyle = StyleSheet.create({
    backgroundNav: {
        backgroundColor: "#FFBD3E",
        flex: 1,
        textAlignVertical: "bottom",
        width: 100+"%",
        alignItems: "center",
        paddingTop: 2,
        flexDirection: "row",
        justifyContent: "space-around"
    }
});

export default NavBar;