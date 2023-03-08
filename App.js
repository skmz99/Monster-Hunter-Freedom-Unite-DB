import 'react-native-gesture-handler';
import React, {useCallback, useEffect} from 'react';
import Top_Menu from './Navigation/Top_Menu';
import Default from './Components/Default';
import Quests from './Components/Quests';
import QuestsInfo from './Components/QuestsInfo'
import Weapon from './Components/Weapon';
import Armor from './Components/Armor';
import Items from './Components/Items';
import {StatusBar,SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {loadDatabase} from './server.js';

export default function App() {
  loadDatabase()
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={[{flex: 1}]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          header: (props) => <Top_Menu {...props}/>,
        }}>
          <Stack.Screen name="About" component={Default} />
          <Stack.Screen name="Quests" component={Quests}/>
          <Stack.Screen name="QuestsInfo" component={QuestsInfo}/>
          <Stack.Screen name="Armor" component={Armor}/>
          <Stack.Screen name="Weapon" component={Weapon}/>
          <Stack.Screen name="Items" component={Items}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style={'auto'}/>
    </SafeAreaView>
  );
};
