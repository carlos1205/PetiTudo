import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Pet from "../../service/pets";
import Specie from "../../service/species";
import styles from "../../styles";
import ButtonGoBack from "../../components/buttonGoBack";
import ButtonDanger from "../../components/buttonDanger";

class PetPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            pet: null
        }
    }   

    componentDidMount(){
        this.props.navigation.navigate('SelecionarPet', { onGoBack: (id) => this.setPetId(id)});
    }

    async setPetId(id){
        const pet = new Pet();
        const species = new Specie();
        const res = await pet.getPet(id);
        const specie = await species.getSpecie(res.specie);
        const race = await species.getSpecieRaces(res.race, res.specie);
        this.setState({
            id: id,
            name: res.name,
            date: res.date,
            size: res.size,
            color: res.color,
            specie: specie,
            race: race,
            sex: res.sex
        });
    }

    async remover(){
        const pet = new Pet();
        const res = await pet.deletePet(this.state.id);
        if(res){
            this.props.navigation.goBack('SelecionarPet');
        }
    }

    render(){
        return(
            <View style={[styles.viewIn, style.petView]}>
                <Text h1 style={[styles.header, styles.colorFont, style.title]} >{this.state.name}</Text>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Idade: </Text> 
                    <Text style={style.text}>{this.state.date}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Peso: </Text> 
                    <Text style={style.text}>{this.state.size} Kg</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Cor: </Text> 
                    <Text style={style.text}>{this.state.color}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Especie: </Text> 
                    <Text style={style.text}>{this.state.specie}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Raça: </Text> 
                    <Text style={style.text}>{this.state.race}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Sexo: </Text> 
                    <Text style={style.text}>{this.state.sex}</Text>
                </View>
                <ButtonDanger value="Remover" onPress={()=> this.remover()} />
                <ButtonGoBack value="voltar" navigation={this.props.navigation}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    petView: {
        alignItems: "center"
    },
    contentText: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        width: 75 + "%",
        paddingRight: 15
    },
    text: {
        fontSize: 20,
        textAlign: 'left'
    },
    label: {
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 5 + "%"
    }
});

export default PetPage;