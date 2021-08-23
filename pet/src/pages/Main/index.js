import React, {Component} from "react";
import Home from "../Home";
import Route from "../../routes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

class Main extends Component{
    render(){
        return(
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: '#FFBD3E' },
                    tabBarIcon: () => {
                        let iconName;

                        if(route.name === "Home"){
                        iconName = 'home';
                        }else if(route.name === "Route"){
                        iconName = 'paw';
                        }

                        return <Icon name={iconName} size={40} color="#fff" />;
                        }
                    })
                }
                initialRouteName="Home"
            >
                <Tab.Screen name="Route" component={Route} options={{headerShown: false}}/>
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
            </Tab.Navigator>
        );
    }
}

export default Main;