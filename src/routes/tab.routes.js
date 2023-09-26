import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import Teapet from '../page/Teapet';
import Pictogame from '../page/Pictogame';
import Metas from '../page/Metas';
import Home from '../page/Home';

const Tab = createBottomTabNavigator();

export default function TabRoute(){
    return(
        <Tab.Navigator InitialRouteName="Home" screenOptions={{headerShown: false}}>
    <Tab.Screen
    name="home" component={Home}
    options={{
        tabBarIcon: ({color, size}) => <FontAwesome name="home" size={24} color="black" />,
        tabBarLabel: 'Home'
    }}
    />

    <Tab.Screen
    name="pictogame" component={Pictogame}
    options={{
        tabBarIcon: ({color, size}) => <Ionicons name="game-controller" size={24} color="black" />,
        tabBarLabel: 'Jogos'
    }}
    />

    <Tab.Screen
    name="metas" component={Metas}
    options={{
        tabBarIcon: ({color, size}) => <FontAwesome5 name="tasks" size={24} color="black" />,
        tabBarLabel: 'Metas'
    }}
    />

    <Tab.Screen
    name="Teapet" component={Teapet}
    options={{
        tabBarIcon: ({color, size}) => <MaterialIcons name="pets" size={24} color="black" />,
        tabBarLabel: 'Jogos'
    }}
    />

</Tab.Navigator>
    )
}
