import React, {Component} from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import Specie from "../../../service/species";

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
                style={style.item}
                onPress={() => this.selected()}
            > 
                <Text style={style.center}>
                    Nome: {this.props.nome}
                </Text>
                <Text style={style.center}>
                    Espécie: {this.state.specie}
                </Text>
            </TouchableOpacity>
        );
    }
} 

const style = StyleSheet.create({
    center: {
        textAlign: "center"
    },
    item: {
        backgroundColor: '#fff',
        marginTop: 15,
        width: 60 + "%",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#FFBD3E'
    }
});

export default PetItem;