import React, {Component} from "react";
import {TouchableOpacity, Text} from "react-native";
import styles from "../../styles";

class Btn extends Component {
    render(){
        return(
            <TouchableOpacity
                    style={styles.button}
                    onPress={(event)=>{this.props.onPress(event.target.value)}}
                >
                <Text style={styles.buttonText}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

export default Btn;