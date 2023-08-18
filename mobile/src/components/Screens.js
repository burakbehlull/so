import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Posts from './Posts';

import {Image} from 'react-native'

const Tab = createBottomTabNavigator();

export default function Screens(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}>
                <Tab.Screen name="Anasayfa" component={Home}
                options={{
                    headerTitle:'Anasayfa',
                    tabBarIcon: ({color,size}) => {
                        return <Image style={{width: 30, height: 30,}} source={{
                            uri: 'https://img.icons8.com/?size=512&id=3Rb0bBna6uQL&format=png',
                          }} />
                    }
                }}
                />
                <Tab.Screen name="Postlar" component={Posts} 
				options={{
                    headerTitle:'Posts',
                    tabBarIcon: ({color,size}) => {
                        return <Image style={{width: 30, height: 30,}} source={{
                            uri: 'https://img.icons8.com/?size=512&id=eaYBmeUl7DGc&format=png',
                          }} />
                    }
                }}
				/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}