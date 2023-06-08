import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import{Water} from '../pages/water'
import{Training} from '../pages/training'
import{User} from '../pages/user'
import { Home } from '../pages/home';

const {Navigator, Screen}= createBottomTabNavigator();

export function AppRoutes() {

    return(
        <NavigationContainer>
            <Navigator screenOptions={{
                tabBarHideOnKeyboard: true
            }}>
                <Screen name="Início" component={Home} options={{headerShown : false, tabBarIcon: () =>{
                    return <Feather name="home" size={25} color="#26416c" />
                }}}/>
                <Screen name="Treinos" component={Training} options={{ headerShown : false, tabBarIcon: () =>{
                    return <Feather name="chevrons-up" size={25} color="#26416c" />
                }}}/>
                <Screen name="Água" component={Water} options={{headerShown : false, tabBarIcon: () =>{
                    return <Feather name="droplet" size={25} color="#26416c" />
                }}}/>
                <Screen name="Perfil" component={User} options={{headerShown : false, tabBarIcon: () =>{
                    return <Feather name="user" size={25} color="#26416c" />
                }}}/>
            </Navigator>
         </NavigationContainer>
    )
}