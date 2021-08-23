import React, {Component} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import styles from "../../styles";
import Notify from "../../components/notify";

class Home extends Component{
    render(){
        return(
            <View style={styles.Tela}>
                <View style={[styles.viewIn, styleHome.container]}>
                    <ScrollView style={styles.flat}>
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify /> 
                    </ScrollView>    
                </View>               
            </View>
        );
    }
}

const styleHome = StyleSheet.create({
    container: {
        padding: 5
    }
});

export default Home;