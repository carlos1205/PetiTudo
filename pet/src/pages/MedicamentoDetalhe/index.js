import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Pets from "../../service/pets";
import styles from "../../styles";
import ButtonGoBack from "../../components/buttonGoBack";

class MedicamentoDetalhe extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            data: "",
            responsavel: "",
            dose: "",
            fabricante: "",
            lote: "",
            proxima: ""
        }
    }

    async componentDidMount(){
        const pets = new Pets();
        const petId = this.props.route.params.pet;
        const tipo = this.props.route.params.tipo;
        const id = this.props.route.params.medicamento;
        const res = await pets.getMedicamento(petId, tipo, id);
        this.setState({
            name: res.name,
            data: res.data,
            responsavel: res.responsavel,
            dose: res.dose,
            fabricante: res.fabricante,
            lote: res.lote,
            proxima: res.proxima
        });
    }

    render(){
        return(
            <View style={[styles.viewIn, style.petView]}>
                <Text h1 style={[styles.header, styles.colorFont, style.title]} >{this.state.name}</Text>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Data: </Text> 
                    <Text style={style.text}>{this.state.data}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Responsavel: </Text> 
                    <Text style={style.text}>{this.state.responsavel}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Dose: </Text> 
                    <Text style={style.text}>{this.state.dose}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Fabricante: </Text> 
                    <Text style={style.text}>{this.state.fabricante}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Lote: </Text> 
                    <Text style={style.text}>{this.state.lote}</Text>
                </View>
                <View style={style.contentText}>
                    <Text style={[style.text, style.label]}>Proxima: </Text> 
                    <Text style={style.text}>{this.state.proxima}</Text>
                </View>
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

export default MedicamentoDetalhe;