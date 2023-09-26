import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import Teapet from '../page/Teapet';
import Pictogame from '../page/Pictogame';
import Metas from '../page/Metas';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator InitialRouteName="Home" screenOptions={{headerShown: false}}>
    <Tab.Screen
    name="teapet" component={Teapet}
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
        tabBarIcon: ({color, size}) => <Feather name="plus" color={color} size={size} />,
        tabBarLabel: 'Metas'
    }}
    />

</Tab.Navigator>
    )
}
