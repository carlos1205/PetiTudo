import React, {Component} from "react";
import {Text, Linking} from "react-native";
import styles from "../../styles";

class Link extends Component {
    render(){
        return (
            <Text
                style={styles.linkPadrao}
                onPress={() => Linking.openURL(this.props.href)}
            >
                {this.props.value}
            </Text>
        );
    }
}

export default Link;