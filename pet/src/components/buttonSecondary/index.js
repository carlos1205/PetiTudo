import React, {Component} from "react";
import {TouchableOpacity, Text} from "react-native";
import styles from "../../styles";

class BtnSecondary extends Component {
    render(){
        return(
            <TouchableOpacity
                    style={styles.buttonSecondary}
                    onPress={(event)=>{this.props.onPress(event.target.value)}}
                >
                <Text style={styles.buttonText}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

export default BtnSecondary;