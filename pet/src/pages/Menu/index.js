import React, {Component} from "react";
import {View, ScrollView, StyleSheet} from "react-native";
import styles from "../../styles";
import ButtonMenu from "../../components/buttonMenu";
import ButtonLogout from "../../components/buttonLogout";

class Menu extends Component {
    render(){
        return (
            <View style={styles.Tela}>
                <View style={[styles.viewIn, StyleMenu.viewMenu]}>
                    <ScrollView style={styles.flat}>
                        <ButtonMenu iconName="clipboard" value="Cartão de Vacina" navigation={this.props.navigation} page='CartaoVacinasMenu'/>
                        <ButtonMenu iconName="virus-slash" value="Agenda" href="#"/>
                        <ButtonMenu iconName="hippo" value="Pets" navigation={this.props.navigation} page='Pet'/>
                    </ScrollView>
                    <ButtonMenu iconName="plus" value="Adotei um novo Pet" navigation={this.props.navigation} page='CadastrarPet'/>
                    <ButtonLogout value="Sair" navigation={this.props.navigation} />  
                </View>                
            </View>
        );
    }
}

const StyleMenu = StyleSheet.create({
    viewMenu: {
        paddingLeft: 10,
        backgroundColor: "#FFBD3E",
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        paddingBottom: 0
    }
});

export default Menu;