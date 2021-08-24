import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import styles from "../../styles";
import Pets from "../../service/pets";
import Item from "./item";
import ButtonSlim from "../../components/buttonSlim";

class Medicine extends Component{
    constructor(props){
        super(props);
        this.state = {
            petId: null,
            medList: []
        }
    }
    
    componentDidMount(){
        this.props.navigation.navigate('SelecionarPet', { onGoBack: (id) => this.setPetId(id)});
    }

    async setPetId(id){
        this.setState({petId: id});
        const pet = new Pets();
        const medicamentos = await pet.getMedicamentos(this.props.route.params.type, id);
        const petName = await pet.getPetName(this.state.petId);
        const insert = {
            petId: id,
            type: this.props.route.params.type
        }
        this.setState({
            medList: medicamentos,
            petName: petName,
            inserir: insert
        });
    }

    render(){
        const list = this.state.medList.map(item => {
            return (<Item key={item.id} id={item.id} pet={this.state.petId} type={this.props.route.params.type} name={item.name} data={item.data} navigation={this.props.navigation}/>);
        });
        return(
            <View style={styles.viewIn}>
                <Text h1
                    style={[styles.header, styles.colorFont]}
                >
                    {this.state.petName}
                </Text>
                <ScrollView style={[styles.flat]}>
                    {list}
                </ScrollView>  
                <ButtonSlim value="Inserir Novo" navigation={this.props.navigation} page="CadastrarMedicamento" parametros={this.state.inserir}/>  
            </View>
        );
    }
}

export default Medicine;