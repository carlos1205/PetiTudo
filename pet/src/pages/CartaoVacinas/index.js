import React, {Component} from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import styles from "../../styles";
import ButtonMenu from "../../components/buttonMenu";
import ButtonGoBack from "../../components/buttonGoBack";

class CartaoVacinas extends Component{
    render(){
        return (
            <View style={styles.Tela}>
                <View style={[styles.viewIn, StyleMenu.viewMenu]}>
                    <ScrollView style={styles.flat}>
                        <ButtonMenu iconName="syringe" value="Vacinas" navigation={this.props.navigation} page='Medicine' type="vacinas"/>
                        <ButtonMenu iconName="thermometer" value="Vermífugos" navigation={this.props.navigation} page='Medicine' type="vermifugos"/>
                        <ButtonMenu iconName="capsules" value="Antipulgas" navigation={this.props.navigation} page='Medicine' type="antipulgas"/>
                        <ButtonMenu iconName="heart" value="Medicamentos" navigation={this.props.navigation} page='Medicine' type="medicamentos"/>
                    </ScrollView>
                    <ButtonGoBack value="voltar" navigation={this.props.navigation}/>  
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

export default CartaoVacinas;