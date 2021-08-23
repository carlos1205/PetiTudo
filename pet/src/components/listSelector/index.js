import React, {Component} from "react";
import {Picker} from "@react-native-picker/picker";
import {StyleSheet, View} from "react-native";
import styles from "../../styles";

class ListSelector extends Component{
    constructor(props){
        super(props);
        this.state = {
            itens: []
        }
    }

    changed(itemValue){
        this.props.changed(itemValue);
    }

    getList(){
        const itens = this.props.list.map((item, index) => {
                return (<Picker.Item key={index+1} label={item} value={index+1} />);
            });

        return itens;
    }

    render(){
        const Itens = this.getList();
        return(
            <View style={[styles.input, style.listSelector]}>
                <Picker
                    selectedValue={this.props.selected}
                    onValueChange={(itemValue) => this.changed(itemValue)}
                    style={style.align}
                >
                    <Picker.Item key={0} label={'selecionar'} value={0} />
                    {Itens}
                </Picker>
            </View>
        );
    }

}

const style = StyleSheet.create({
    listSelector: {
        padding: 0,
        textAlignVertical: "top",
        paddingBottom: 4,
    }
});

export default ListSelector;