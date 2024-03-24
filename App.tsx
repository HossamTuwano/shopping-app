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
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.container}>
        <View style={styles.container}>
          <NavigationContainer>
            <BottomSheetModalProvider>
              <RootNavigator />
            </BottomSheetModalProvider>
            <StatusBar style='dark' />
          </NavigationContainer>
        </View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
