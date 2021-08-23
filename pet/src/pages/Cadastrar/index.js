import React,{Component} from "react";
import { View, Text, StyleSheet} from "react-native";
import User from "../../service/user";
import styles from "../../styles";
import Form from "./Form";

class Cadastrar extends Component {
    constructor(props){
        super(props);
    }

    async cadastrar(data){
        const user = new User();
        return await user.cadastrar(data);
    }

    render(){
        const title = "Cadastrar";
        return (
            <View style={[styles.Tela, styles.backgroundPattern]} >
                <Text h1
                    style={[styles.header, styles.colorFont, margin.title]}
                >
                    {title}     
                </Text>
                <Form navigation={this.props.navigation} onPress={ (data) => this.cadastrar(data) }/>
            </View>
        );
    }
}

const margin = StyleSheet.create({
    title: {
        marginBottom: 20
    }
});


export default Cadastrar;