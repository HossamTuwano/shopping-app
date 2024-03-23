import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
export type TabsStackParamList = {
  Home: undefined
  Cart: undefined
  Payment: undefined
  Profile: undefined
}

const TabsStack = createBottomTabNavigator<TabsStackParamList>()
export default function TabsNavigator() {
  return (
    <TabsStack.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <TabsStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Entypo name='home' size={24} color='black' />
          ),
        }}
      />
      <TabsStack.Screen
        name='Cart'
        component={Example}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Entypo name='shopping-cart' size={24} color='black' />
          ),
        }}
      />
      <TabsStack.Screen
        name='Payment'
        component={Example}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons name='payment' size={24} color='black' />
          ),
        }}
      />
      <TabsStack.Screen
        name='Profile'
        component={Example}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign name='user' size={24} color='black' />
          ),
        }}
      />
    </TabsStack.Navigator>
  )
}

const Example = () => {
  return <></>
}
