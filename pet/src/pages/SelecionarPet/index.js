import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import styles from "../../styles";
import PetItem from "./PetItem";
import Pets from "../../service/pets";

class SelecionarPet extends Component{
    constructor(props){
        super(props);
        this.state = {
            pets: []
        }
    }

    async componentDidMount(){
        const pets = new Pets();
        const list = await pets.listar();
        this.setState({
            pets: list
        });
    }

    render(){
        const title = "Selecionar Pet";
        const itens = this.state.pets.map((pet) => {
            return (<PetItem key={pet.id} id={pet.id} nome={pet.name} especie={pet.specie} navigation={this.props.navigation} onGoBack={this.props.route.params.onGoBack}/>);
        });
        return(
            <View style={[styles.viewIn]}>
                <Text h1
                    style={[styles.header, styles.colorFont]}
                >
                    {title}
                </Text>
                <ScrollView style={[styles.flat]}>
                    {itens}
                </ScrollView>    
            </View>
        );
    }
}

export default SelecionarPet;