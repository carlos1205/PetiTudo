import React,{Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../../styles";
import Form from "./Form";

class Cadastrar extends Component {
    render(){
        const title = "Cadastrar";
        return (
            <View style={[styles.Tela, styles.backgroundPattern]} >
                <Text h1
                    style={[styles.header, styles.colorFont, margin.title]}
                >
                    {title}
                </Text>
                <Form />
            </View>
        );
    }
}

const margin = StyleSheet.create({
    title: {
        marginBottom: 20
    }
});


export default Cadastrar;