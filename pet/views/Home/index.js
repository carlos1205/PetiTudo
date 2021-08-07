import React, {Component} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import styles from "../../styles";
import NavBar from "../NavBar";
import Notify from "../../component/notify";

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
                <NavBar style={styles.navbar}/>                
            </View>
        );
    }
}

const styleHome = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default Home;