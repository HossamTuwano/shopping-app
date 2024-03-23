import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AbsoluteCenter } from '@chakra-ui/react'
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated'

const AVATAR_URL =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const CATEGORIES = [
  'Clothing',
  'Shoes',
  'Accessories',
  'Accessories 1',
  'Accessories 3',
  'Accessories 4',
]
export default function HomeScreen() {
  const { colors } = useTheme()
  const [categoryIndex, setCategoryIndex] = useState<number>(0)
  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/* Header Section */}
        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Image
            source={{ uri: AVATAR_URL }}
            style={{
              width: 52,
              aspectRatio: 1,
              borderRadius: 52,
            }}
            resizeMode='cover'
          />
          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={1}
              style={{
                marginBottom: 12,
                fontSize: 18,
                fontWeight: '600',
                color: colors.text,
              }}
            >
              Hi, James 👋{' '}
            </Text>
            <Text
              style={{ opacity: 0.5, color: colors.text }}
              numberOfLines={1}
            >
              Discover fashion that suit your style
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <MaterialCommunityIcons
              name='bell-circle-outline'
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
        {/* Search Bar Section */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 1,
              borderColor: colors.border,
              borderWidth: 1,
              alignItems: 'center',
              paddingHorizontal: 24,
              flexDirection: 'row',
              gap: 12,
            }}
          >
            <Icon
              name='search'
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
            <Text>Icon Here</Text>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: colors.text,
                opacity: 0.5,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            {/* change to filter icon here */}
            <MaterialCommunityIcons
              name='bell-circle-outline'
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>

        {/* Gird Collection View*/}
        <View style={{ paddingHorizontal: 24 }}>
          {/* Title bar*/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: '700' }}>
              New Collections
            </Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: 200, gap: 12 }}>
          <Card />
          <View style={{ flex: 1, gap: 12 }}>
            <Card />
            <Card />
          </View>
          <Card />
          <View style={{ flex: 1 }}></View>
        </View>
        {/* Categories Section  */}
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
          }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex == index
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderRadius: 100,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,
                }}
              >
                <View
                  style={{
                    backgroundColor: isSelected ? colors.primary : colors.card,
                  }}
                >
                  <Text
                    style={{
                      color: isSelected ? colors.background : colors.text,
                      fontWeight: '600',
                      fontSize: 16,
                      opacity: isSelected ? 1 : 0.5,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </SafeAreaView>
    </ScrollView>
  )
}

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        height: 200,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        source={require('path/to/img.[jpg/png]')}
        resizeMode='cover'
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      />
      <View
        style={{
          position: 'absolute',
          left: 16,
          top: 16,
          paddingHorizontal: 12,
          paddingVertical: 12,
          backgroundColor: 'rgba(0,0,0,.25)',
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}></Text>
      </View>
    </View>
  )
}
