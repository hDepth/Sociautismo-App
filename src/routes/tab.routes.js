import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Teapet from '../page/Teapet';
import Pictogame from '../page/Pictogame';
import Metas from '../page/Metas';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
    name="teapet" component={Teapet}
    options={{
        tabBarIcon: ({color, size}) => <Feather name="Home" color={color} size={size} />,
        tabBarLabel: 'Home'
    }}
    />

    <Tab.Screen
    name="pictogame" component={Pictogame}
    options={{
        tabBarIcon: ({color, size}) => <Feather name="plus" color={color} size={size} />,
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
