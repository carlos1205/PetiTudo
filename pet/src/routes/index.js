import React, {Component} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "../pages/Menu";
import CadastrarPet from "../pages/CadastrarPet";
import SelecionarPet from "../pages/SelecionarPet";
import Pet from "../pages/Pet";
import CartaoVacinasMenu from "./vacinas";

const Stack = createNativeStackNavigator();

class Route extends Component{
    render(){
        return(
            <Stack.Navigator initialRouteName="Menu" >
                <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
                <Stack.Screen name="CadastrarPet" component={CadastrarPet} options={{headerShown: false}} />
                <Stack.Screen name="Pet" component={Pet} options={{headerShown: false}} />
                <Stack.Screen name="SelecionarPet" component={SelecionarPet} options={{headerShown: false}} />
                <Stack.Screen name="CartaoVacinasMenu" component={CartaoVacinasMenu} options={{headerShown: false}} />
            </Stack.Navigator>
        );
    }
}

export default Route;