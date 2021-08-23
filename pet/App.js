import React from "react";
import Login from "./src/pages/Login";
import Cadastrar from "./src/pages/Cadastrar";
import Main from "./src/pages/Main";
import RecuperarSenha from "./src/pages/RecuperarSenha";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Cadastrar" component={Cadastrar} options={{headerShown: false}}/>
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerShown: false}}/>
          <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}