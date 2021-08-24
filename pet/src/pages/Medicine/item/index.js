import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Link from "../../../components/link";
import styles from "../../../styles";

class Item extends Component{
    action(){
        this.props.navigation.navigate('MedicamentoDetalhe', {
            pet: this.props.pet,
            medicamento: this.props.id,
            tipo: this.props.type
        });
    }

    render(){
        return(
            <TouchableOpacity 
                style={[styles.viewIn, style.petView]}
                onPress={()=>{this.action()}}
            >
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Data: </Text> 
                    <Text style={style.text}>{this.props.data}</Text>
                </View>
                <View style={[style.contentText, style.beetween]}>
                    <View style={style.subContentText}>
                        <Text style={[style.text, style.label]}>Tipo: </Text> 
                        <Text style={style.text}>{this.props.name}</Text>   
                    </View>
                    <Text style={styles.linkPadrao}>
                        Ver Detalhes
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    petView: {
        marginTop: 10,
        alignSelf: "center",
        width: 80 + "%",
        borderColor: "#FFBD3E",
        borderWidth: 7,
        borderRadius: 10,
        backgroundColor: "#FFDC6E"
    },
    contentText: {
        flexDirection:'row',
        flexWrap:'wrap',
        width: 100+"%",
    },
    beetween: {
        justifyContent: "space-between",
        paddingRight: 5
    },
    subContentText: {
        flexDirection:'row',
        flexWrap:'wrap',
        width: 60 + "%"
    },
    text: {
        fontSize: 18,
        textAlign: 'left'
    },
    label: {
        fontWeight: 'bold'
    }
});

export default Item;