import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ProductDetailScreen from '../screens/home/productDetail.js';
import TabNavigation from './tabNavigation.js';
import CartPage from '../screens/home/productDetail.js/cartPage/index.js';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="CartPage" component={CartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
