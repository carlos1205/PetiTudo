import React, {Component} from "react";
import {Text, View, TextInput, StyleSheet} from "react-native";
import styles from "../../../styles";
import Btn from "../../../components/button";
import Pets from "../../../service/pets";

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            data: '',
            responsavel: '',
            dose: '',
            fabricante: '',
            lote: '',
            proxima: ''
        }
    }

    async cadastrar(){
        const pet = new Pets();
        const payload = {
            name: this.state.name,
            data: this.state.data,
            responsavel: this.state.responsavel,
            dose: this.state.dose,
            fabricante: this.state.fabricante,
            lote: this.state.lote,
            proxima: this.state.proxima
        }
        const response = await pet.cadastrarMedicamento(this.props.pet, this.props.type, payload);
        if(response){
            this.props.navigation.navigate('Menu');
        }
    }

    render(){
        return(
            <View>
                <View>
                    <Text style={style.label}>Nome</Text>
                    <TextInput
                        onChangeText={(data) => this.setState({name: data})}
                        value={this.state.name}
                        placeholder="Nome do medicamento"
                        style={styles.input}
                        keyboardType="default"
                        editable
                    />
                </View>
                <View>
                    <Text style={style.label}>Data</Text>
                    <TextInput
                        onChangeText={(data) => this.setState({data: data})}
                        value={this.state.data}
                        placeholder="Data de aplicação"
                        style={styles.input}
                        keyboardType="number-pad"
                        editable
                    />
                </View>
                <View>
                    <Text style={style.label}>Responsavel</Text>
                    <TextInput
                        onChangeText={(data) => this.setState({responsavel: data})}
                        value={this.state.responsavel}
                        placeholder="Nome do responsavel"
                        style={styles.input}
                        keyboardType="default"
                        editable
                    />
                </View>
                <View>
                    <Text style={style.label}>Dose</Text>
                    <TextInput
                        onChangeText={(data) => this.setState({dose: data})}
                        value={this.state.dose}
                        placeholder="dose em mL"
                        style={styles.input}
                        keyboardType="number-pad"
                        editable
                    />
                </View>
                <View>
                    <Text style={style.label}>Fabricante</Text>
                    <TextInput
                        onChangeText={(data) => this.setState({fabricante: data})}
                        value={this.state.fabricante}
                        placeholder="Fabricante do medicamento"
                        style={styles.input}
                        keyboardType="default"
                        editable
                    />
                </View>
                <View>
                    <Text style={style.label}>Lote</Text>
                    <TextInput
                        onChangeText={(data) => this.setState({lote: data})}
                        value={this.state.lote}
                        placeholder="Lote do medicamento"
                        style={styles.input}
                        keyboardType="default"
                        editable
                    />
                </View>
                <View>
                    <Text style={style.label}>Proxima</Text>
                    <TextInput
                        onChangeText={(data) => this.setState({proxima: data})}
                        value={this.state.proxima}
                        placeholder="Data da proxima"
                        style={styles.input}
                        keyboardType="number-pad"
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

export default Form;