import React, {Component} from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import Specie from "../../../service/species";
import styles from "../../../styles";

class PetItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            specie: null
        };
    }
    
    selected(){
        this.props.onGoBack(this.props.id);
        this.props.navigation.goBack();
    }

    async componentDidMount(){
        const species = new Specie();
        const specie = await species.getSpecie(this.props.especie);
        this.setState({specie});
    }

    render(){
        return(
            <TouchableOpacity 
                style={[styles.viewIn, style.petView]}
                onPress={() => this.selected()}
            > 
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Nome: </Text> 
                    <Text style={style.text}>{this.props.nome}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Espécie: </Text> 
                    <Text style={style.text}>{this.state.specie}</Text>
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

export default PetItem;