import React, {Component} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartaoVacinas from "../../pages/CartaoVacinas";
import Medicine from "../../pages/Medicine";
import CadastrarMedicamento from "../../pages/cadastrarMedicamento";
import MedicamentoDetalhe from "../../pages/MedicamentoDetalhe";

const Stack = createNativeStackNavigator();

class CartaoVacinasMenu extends Component{
    render(){
        return(
            <Stack.Navigator initialRouteName='CartaoVacinas'>
                <Stack.Screen name='CartaoVacinas' component={CartaoVacinas} options={{headerShown: false}} />
                <Stack.Screen name='Medicine' component={Medicine} options={{headerShown: false}} />
                <Stack.Screen name='CadastrarMedicamento' component={CadastrarMedicamento} options={{headerShown: false}} />
                <Stack.Screen name='MedicamentoDetalhe' component={MedicamentoDetalhe} options={{headerShown: false}} />
            </Stack.Navigator>
        );
    }
}

export default CartaoVacinasMenu;