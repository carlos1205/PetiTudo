import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import ButtonGoBack from "../../components/buttonGoBack";
import Form from "./Form";
import styles from "../../styles";

class CadastrarMedicamento extends Component{
    render(){
        return(
            <View style={styles.viewIn}>
                <ScrollView>
                    <Text h1
                        style={[styles.header, styles.colorFont]}
                    >
                        Cadastrar: {this.props.route.params.type}
                    </Text>
                    <Form navigation={this.props.navigation} type={this.props.route.params.type} pet={this.props.route.params.petId} />
                </ScrollView>
            </View>
        );
    }
}

export default CadastrarMedicamento;