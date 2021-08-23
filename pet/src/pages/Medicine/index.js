import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import styles from "../../styles";
import Pets from "../../service/pets";
import Item from "./item";

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
        this.setState({
            medList: medicamentos,
            petName: petName
        });
    }

    render(){
        const list = this.state.medList.map(item => {
            return (<Item key={item.id} name={item.name} data={item.data}/>);
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
            </View>
        );
    }
}

export default Medicine;