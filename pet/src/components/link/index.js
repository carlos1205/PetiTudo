import React, {Component} from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import styles from "../../styles";

class Link extends Component {
    action(){
        this.props.navigation.navigate(this.props.href);
    }

    render(){
        return (
            <TouchableOpacity
                onPress={()=> this.action()}
            >
                <Text style={styles.linkPadrao}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

export default Link;