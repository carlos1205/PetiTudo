import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../styles";

class Notify extends Component {
    render(){
        return (
            <View style={styleNotify.notify}>
                <Icon name="paw" size={40} color="#e67817" />
                <View style={styleNotify.content}>
                    <View style={styleNotify.row}> 
                        <Text h3 style={styleNotify.title}>Alerta</Text>
                        <Text style={styleNotify.time}>17:30</Text>
                    </View>
                    <View style={styleNotify.row}>
                        <Text style={[styleNotify.desc, styles.colorFont]}>
                            Lorem ipsum mauris vivamus donec lorem egestas dui lacinia, eros elit dapibus tortor quisque blandit. 
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styleNotify = StyleSheet.create({
    notify:{
        borderStyle: "solid",
        borderWidth: 2,
        padding: 5,
        width: 95+"%",
        borderRadius: 10,
        borderColor: "#e67817",
        backgroundColor: "#FFEAEA",
        flexDirection: "row",
        marginTop: 3,
        marginBottom: 3
    },
    content: {
        marginLeft: 10
    },
    row: {
        width: 75 + "%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#e67817"
    },
    time: {
        fontSize: 18,
        fontWeight: "700",
        alignSelf: "center"
    },
    desc: {
        fontSize: 15
    }
});
export default Notify;