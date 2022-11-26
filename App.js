import * as React from 'react';
import TabBawah from './pages/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './pages/Home';
import Nike from './pages/Nike';
import About from './pages/About';
import Product from './pages/Product';
import DetailNewBalance from './pages/DetailNewBalance';
import DetailNike from './pages/DetailNike';
import DetailConverse from './pages/DetailConverse';
import NewBalance from './pages/NewBalance';
import Converse from './pages/Converse';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Shoes Breed" component={TabBawah} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Nike" component={Nike} />
        <Stack.Screen name="New Balance" component={NewBalance} />
        <Stack.Screen name="Converse" component={Converse} />
        <Stack.Screen name="Detail Nike" component={DetailNike} />
        <Stack.Screen name="Detail New Balance" component={DetailNewBalance} />
        <Stack.Screen name="Detail Converse" component={DetailConverse} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
