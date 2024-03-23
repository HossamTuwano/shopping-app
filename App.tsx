import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import RootNavigator from './navigators/RootNavigator'
import {
  NavigationContainer,
  Theme,
  DefaultTheme,
} from '@react-navigation/native'
import { useMemo } from 'react'
import { background } from '@chakra-ui/react'

export default function App() {
  const theme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: '#f5f5f5',
        text: '#191919',
        border: '#D909D9',
        primary: '#191919',
      },
    }),
    []
  )
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style='dark' />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
