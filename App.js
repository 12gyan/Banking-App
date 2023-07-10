import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SignupScreen from './SignupScreen';
import MainScreen from './MainScreen';
import TransferScreen from './TransferScreen';
import TransactionCompleteScreen from './TransactionCompleteScreen';
import MomoScreen from './MomoScreen';
import HistoryScreen from './HistoryScreen';
import BillsScreen from './BillsScreen';
import ExchangeScreen from './ExchangeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TransferScreen" component={TransferScreen} />
        <Stack.Screen name="TransactionCompleteScreen" component={TransactionCompleteScreen} />
        <Stack.Screen name="MomoScreen" component={MomoScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="BillsScreen" component={BillsScreen} />
        <Stack.Screen name="ExchangeScreen" component={ExchangeScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

