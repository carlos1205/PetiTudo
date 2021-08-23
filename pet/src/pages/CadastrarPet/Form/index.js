import React,{Component} from "react";
import {TextInput, View, Text, StyleSheet} from "react-native";
import Species from "../../../service/species";
import Pets from "../../../service/pets";
import ListSelector from "../../../components/listSelector";
import Btn from "../../../components/button";
import styles from "../../../styles";

class FormCadastroPet extends Component {
    constructor(props){
        super(props);
        this.state = {
            nomePet: "",
            dataNascimento: "",
            peso: "",
            cor: "",
            specie: 0,
            raca: 0,
            sexo: 0,
            speciesIds: [],
            species: [],
            racasIds: [],
            racas: [],
            sexos: ["Macho", "Femea"]
        };
    }

    async cadastrar(){
        const pets = new Pets();
        const sexo = this.state.sexos[this.state.sexo-1];
        const specie = this.state.speciesIds[this.state.specie-1];
        const race = this.state.racasIds[this.state.raca-1];
        const newPet = {
            name: this.state.nomePet,
            date: this.state.dataNascimento,
            size: this.state.peso,
            color: this.state.cor,
            specie: specie,
            race: race,
            sexo: sexo
        }

        if(newPet.specie === 0){
            console.error('Sem Especie Selecionada');
            return;
        }

        if(newPet.raca === 0){
            console.error('Sem Raça Selecionada');
            return;
        }

        if(newPet.sexo === 0){
            console.error('Sem Sexo Selecionada');
            return;
        }

        const res = await pets.cadastrar(newPet);
        if(res)
            this.props.navigation.goBack();
    }

    async getSpecies(){
        const species = new Species();
        return await species.getSpecies();
    }

    async getRaces(itemIndex){
        const species = new Species();
        return await species.getSpeciesRaces(itemIndex);
    }

    async changedSpecies(itemIndex){
        this.setState({
            specie: itemIndex
        });
        
        const res = await this.getRaces(itemIndex);
        this.setState({
            racas: res.races,
            racasIds: res.racesId,
            raca: 0
        });
    }

    async changedRacas(itemIndex){
        this.setState({
            raca: itemIndex
        });
    }

    async changedSexos(itemIndex){
        this.setState({
            sexo: itemIndex
        });
    }

    async componentDidMount(){
        const res = await (await this.getSpecies());
        this.setState({
            species: res.species,
            speciesIds: res.speciesId
        });
    }

    render(){
        return (
            <View>
                <View>
                    <Text style={style.label}>Nome</Text>
                    <TextInput
                        onChangeText={(nomePet) => this.setState({nomePet})}
                        value={this.state.nomePet}
                        placeholder="Nome"
                        style={styles.input}
                        editable
                    />
                </View>
                <View>
                    <Text style={style.label}>Data de Nascimento</Text>
                    <TextInput
                        onChangeText={(data) => this.setState({dataNascimento: data})}
                        value={this.state.dataNascimento}
                        placeholder="Data de Nascimento"
                        style={styles.input}
                        keyboardType="number-pad"
                        editable
                    />
                </View>
                <View>
                    <Text style={style.label}>Peso</Text>
                    <TextInput
                        onChangeText={(peso) => this.setState({peso})}
                        value={this.state.peso}
                        placeholder="Peso"
                        style={styles.input}
                        keyboardType="numeric"
                        editable
                    /> 
                </View>
                <View>
                    <Text style={style.label}>Especie</Text>
                    <ListSelector list={this.state.species} changed={(item) => this.changedSpecies(item)} selected={this.state.specie} />
                </View>
                <View>
                    <Text style={style.label}>Raça</Text>
                    <ListSelector list={this.state.racas} changed={(item) => this.changedRacas(item)} selected={this.state.raca} />
                </View>
                <View>
                    <Text style={style.label}>Sexo</Text>
                    <ListSelector list={this.state.sexos} changed={(item) => this.changedSexos(item)} selected={this.state.sexo}/>
                </View>
                <View>
                    <Text style={style.label}>Cor</Text>
                    <TextInput
                        onChangeText={(cor) => this.setState({cor})}
                        value={this.state.cor}
                        placeholder="Cor"
                        style={styles.input}
                        editable
                    /> 
                </View> 
                <Btn value="Cadastrar" onPress={() => {this.cadastrar()}}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    label: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "700"
    }
});

export default FormCadastroPet;