/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AboutScreen from '../screens/AboutScreen';
import BarcodeScreen from '../screens/BarcodeScreen';
import { BottomTabParamList, AboutParamList, BarcodeParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="About"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Штрихкод"
        component={BarcodeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-barcode" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="О программе"
        component={AboutNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-information-circle" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const AboutStack = createStackNavigator<AboutParamList>();

function AboutNavigator() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </AboutStack.Navigator>
  );
}

const BarcodeStack = createStackNavigator<BarcodeParamList>();

function BarcodeNavigator() {
  return (
    <BarcodeStack.Navigator>
      <BarcodeStack.Screen
        name="BarcodeScreen"
        component={BarcodeScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </BarcodeStack.Navigator>
  );
}
