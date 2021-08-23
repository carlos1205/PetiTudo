import React, {Component} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartaoVacinas from "../../pages/CartaoVacinas";
import Medicine from "../../pages/Medicine";

const Stack = createNativeStackNavigator();

class CartaoVacinasMenu extends Component{
    render(){
        return(
            <Stack.Navigator initialRouteName='CartaoVacinas'>
                <Stack.Screen name='CartaoVacinas' component={CartaoVacinas} options={{headerShown: false}} />
                <Stack.Screen name='Medicine' component={Medicine} options={{headerShown: false}} />
            </Stack.Navigator>
        );
    }
}

export default CartaoVacinasMenu;