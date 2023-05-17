import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Posts from './Posts';

const Tab = createBottomTabNavigator();

export default function Screens(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} 
                />
                <Tab.Screen name="Posts" component={Posts} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}